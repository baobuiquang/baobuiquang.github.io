var renderer, scene, camera, composer, mesh, object;
var mouseX = 0, mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

window.onload = function () {
  init();
  animate();
}

function init() {

  //renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.getElementById("canvas2").appendChild(renderer.domElement);

  //camera  
  camera = new THREE.PerspectiveCamera(
    15,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );


  camera.position.z = 2000;
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  //scene
  scene = new THREE.Scene();
  scene.add(camera);

  //mesh
  var geometry = new THREE.CylinderGeometry(0, 80, 95, 4, false);
  var material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shading: THREE.FlatShading
  });
  mesh = new THREE.Object3D();
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.y += 80;
  mesh.rotation.x = 15 * Math.PI / 180;
  scene.add(mesh);

  // object
  var geo1 = new THREE.PlaneBufferGeometry(10000, 10000, 128, 128);
  var mat1 = [
    new THREE.MeshLambertMaterial({
      color: 0x333333,
      side: THREE.DoubleSide,
      shading: THREE.FlatShading
    }),
    new THREE.MeshBasicMaterial({
      color: 0x555555,
      wireframe: true,
      side: THREE.DoubleSide
    })
  ];
  var plane = THREE.SceneUtils.createMultiMaterialObject(geo1, mat1);
  plane.position.z -= 300;
  scene.add(plane)


  var material2 = new THREE.MeshPhongMaterial({
    color: 0x666666,
    shading: THREE.FlatShading,
    side: THREE.DoubleSide
  });

  var manager = new THREE.LoadingManager();
  manager.onProgress = function (item, loaded, total) {
    console.log(item, loaded, total);
  };
  var texture = new THREE.Texture();

  var loader = new THREE.OBJLoader(manager);
  loader.load("/hand.obj", function (
    object
  ) {
    object.traverse(function (child) {
      if (child instanceof THREE.Mesh) {
        child.material.map = texture;
        child.material = material2;
        material2.side = THREE.DoubleSide;
      }
    });

    object.position.set(30, 0, 0);
    object.rotation.x = 20 * Math.PI;
    object.rotation.y = Math.PI;
    object.rotation.z = 20 * Math.PI / 180;
    object.scale.x = 2;
    object.scale.y = 2;
    object.scale.z = 2;
    obj = object;
    scene.add(obj);
  });

  //lights
  var pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(25, 50, 25);
  pointLight.castShadow = true;
  pointLight.shadow.mapSize.width = 1024;
  pointLight.shadow.mapSize.height = 1024;
  scene.add(pointLight);

  var spotlight = new THREE.SpotLight(0x111111, 5);
  spotlight.opacity = 0.1;
  spotlight.position.z = 25;
  spotlight.position.y = 425;
  spotlight.position.x = 20;
  scene.add(spotlight);

  var spotlight2 = new THREE.SpotLight(0xffffff, 1);
  spotlight2.position.z = 25;
  spotlight2.position.y = 425;
  spotlight2.position.x = 20;
  mesh.add(spotlight2);

  var ambientLight = new THREE.AmbientLight(0x111111);
  scene.add(ambientLight);


  //effects
  var renderModel = new THREE.RenderPass(scene, camera);
  composer = new THREE.EffectComposer(renderer);
  composer.addPass(renderModel);

  var effectFilm = new THREE.FilmPass(.35, .025, 648, true);
  //var effectFilm = new THREE.FilmPass( 1, 0.025, 2048, true );
  //effectFilm.renderToScreen = true;
  composer.addPass(effectFilm);

  var rgbSplit = new THREE.ShaderPass(THREE.RGBShiftShader);
  rgbSplit.uniforms["amount"].value = 0.0025;
  rgbSplit.renderToScreen = true;
  composer.addPass(rgbSplit);



  //Tween
  setInterval(animeIn, 7000);
  function animeIn() {
    setTimeout(animeOne, 700);
  };
  function animeOne() {
    rgbSplit.uniforms["amount"].value = 0.01;
    setTimeout(animeTwo, 100);
  }
  function animeTwo() {
    rgbSplit.uniforms["amount"].value = 0.003;
    setTimeout(animeThree, 100);
  }
  function animeThree() {
    rgbSplit.uniforms["amount"].value = 0.05;
    setTimeout(animeOut, 100);
  }

  function animeOut() {
    rgbSplit.uniforms["amount"].value = 0.003;
  };





  //resize & mouseEvent
  document.addEventListener("mousemove", onDocumentMouseMove, false);
  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}
function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

function render() {
  camera.position.x -= (mouseX + camera.position.x) * 0.05;
  camera.position.y -= (-mouseY + camera.position.y) * 0.05;

  //animation object
  mesh.rotation.y += 0.005;
  //end animation

  renderer.clear();
  camera.lookAt(scene.position);
  //renderer.render( scene, camera )
  composer.render(0.02);
}