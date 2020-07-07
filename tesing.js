//Text Format
function textFormat() {
    var x = document.getElementById("frm");
    var str = "";
    var i = 0;
    str += x.elements[0].value;

    //Removes "_" from both sides of str
    str = str.trim();

    //Turn string to array
    var arr = str.split("");

    //Get str length
    var length = 0;
    while (arr[i] != undefined) {
        length++;
        i++;
    }

    //-------------- CORE FUNCTION --------------

    //Turn "__" to "_"
    for (i = 0; i < length; i++) {
        if (arr[i] == " " && arr[i + 1] == " ") {
            while (arr[i + 1] == " ") {
                var u;
                for (u = i; u < length - 1; u++) {
                    arr[u] = arr[u + 1];
                }
                length--;
            }
        }
    }

    //Turn "a_._" to "a._"
    for (i = 0; i < length; i++) {
        if (arr[i] == " " && (arr[i + 1] == "." || arr[i + 1] == "," || arr[i + 1] == ";" || arr[i + 1] == "!" || arr[i + 1] == "?" || arr[i + 1] == ")" || arr[i + 1] == "]" || arr[i + 1] == "}")) {
            var u;
            for (u = i; u < length - 1; u++) {
                arr[u] = arr[u + 1];
            }
            length--;
        }
    }

    //Turn ".A" to "._A"
    for (i = 0; i < length; i++) {
        if ((arr[i] == "." || arr[i] == "," || arr[i] == ";" || arr[i] == "!" || arr[i] == "?" || arr[i] == ")" || arr[i] == "]" || arr[i] == "}") && arr[i + 1] != " ") {
            var u;
            for (u = length; u >= i + 2; u--) {
                arr[u] = arr[u - 1];
            }
            arr[i + 1] = " ";
            length++;
        }
    }

    //Turn "a(" to "a_("
    for (i = 0; i < length; i++) {
        if ((arr[i] == "(" || arr[i] == "{" || arr[i] == "[") && arr[i - 1] != " ") {
            var u;
            for (u = length; u >= i + 1; u--) {
                arr[u] = arr[u - 1];
            }
            arr[i] = " ";
            length++;
        }
    }
    //Turn "(_A" to "(A"
    for (i = 0; i < length; i++) {
        if ((arr[i] == "(" || arr[i] == "{" || arr[i] == "[") && arr[i + 1] == " ") {
            var u;
            for (u = i + 1; u < length - 1; u++) {
                arr[u] = arr[u + 1];
            }
            length--;
        }
    }

    //Capitalize: Turn "._a" to "._A"
    for (i = 0; i < length; i++) {
        str = "";
        for (u = 0; u < length; u++) {
            str += arr[u];
        }
        //Dont "," or ";"
        if ((arr[i] == "." || arr[i] == "!" || arr[i] == "?") && arr[i + 1] == " ") {
            arr[i + 2] = str.charAt(i + 2).toUpperCase();
        }
    }

    //Final step: Turn array into string again
    str = "";
    for (i = 0; i < length; i++) {
        str += arr[i];
    }
    document.getElementById("demo").innerHTML = str;
}

//getFormInput
function getFormInput() {
    //Initiate
    var x = document.getElementById("frm");
    var elm0 = "", elm1 = "";
    elm0 += x.elements[0].value;
    elm1 += x.elements[1].value;
    var doc = new jsPDF();






    //Processing
    doc.setLineHeightFactor(1.4);
    var leading = 6;

    var leftSide = 10;
    var maxWidthSide = 55;
    var leftMain = 78;
    var leftMain2 = 120;
    var maxWidthMain = 40;
    var maxWidthMain2 = 80;

    //Side
    doc.setDrawColor(0);
    doc.setFillColor(0, 25, 38);
    doc.rect(0, 0, 70, 300, "F");

    //Contact
    var shiftContact = 20;
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.text("CONTACT", leftSide, shiftContact);
    doc.setFontSize(12);
    doc.text("Phone", leftSide, shiftContact + 2 * leading);
    doc.text("0849283959", leftSide, shiftContact + 3 * leading);
    doc.text("Mail", leftSide, shiftContact + 5 * leading);
    doc.text("quangbao.co@gmail.com", leftSide, shiftContact + 6 * leading, { maxWidth: maxWidthSide });
    doc.text("LinkedIn", leftSide, shiftContact + 8 * leading);
    doc.text("linkedin.com/in/buiquangbao", leftSide, shiftContact + 9 * leading, { maxWidth: maxWidthSide });
    doc.text("Personal Website", leftSide, shiftContact + 11 * leading);
    doc.text("buiquangbao.github.io", leftSide, shiftContact + 12 * leading, { maxWidth: maxWidthSide });

    //Skill
    var shiftSkill = 120;
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.text("TOP SKILL", leftSide, shiftSkill);
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text("Web Development", leftSide, shiftSkill + 2 * leading);
    doc.setFontSize(12);
    doc.setTextColor(160, 160, 160);
    doc.text("HTML, CSS, Javascript, Bootstrap", leftSide, shiftSkill + 3 * leading, { maxWidth: maxWidthSide });
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text("App Development", leftSide, shiftSkill + 6 * leading);
    doc.setFontSize(12);
    doc.setTextColor(160, 160, 160);
    doc.text("Dartlang, Flutter SDK, Firebase", leftSide, shiftSkill + 7 * leading, { maxWidth: maxWidthSide });
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text("Graphic Design", leftSide, shiftSkill + 10 * leading);
    doc.setFontSize(12);
    doc.setTextColor(160, 160, 160);
    doc.text("Adobe Illustrator, Davinci Resolve", leftSide, shiftSkill + 11 * leading, { maxWidth: maxWidthSide });

    //Header
    var shiftHeader = 20;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(24);
    doc.text("Bui Quang Bao", leftMain, shiftHeader);
    doc.setFontSize(12);
    doc.text("App & Web Developer, UI/UX Designer ", leftMain, shiftHeader + 1 * leading);
    doc.text("Ho Chi Minh City, Vietnam", leftMain, shiftHeader + 2 * leading);

    //Experience
    var shiftExperience = 45;
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("EXPERIENCE", leftMain, shiftExperience);
    doc.setFontSize(14);
    doc.text("Design ITUS", leftMain, shiftExperience + 2 * leading, { maxWidth: maxWidthMain });
    doc.setFontSize(12);
    doc.text("(Academic Club)", leftMain, shiftExperience + 3 * leading, { maxWidth: maxWidthMain });
    doc.setTextColor(100, 100, 100);
    doc.text("Sep 2019 - Present", leftMain, shiftExperience + 4 * leading, { maxWidth: maxWidthMain });
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Graphic Designer", leftMain2, shiftExperience + 2 * leading);
    doc.setFontSize(12);
    doc.text("Responsible for graphic design content (logos, posters, backdrops, etc) for some events in university, work regularly on Adobe Illustrator, have a little experience in video editing using Adobe Premiere and Davinci Resolve.", leftMain2, shiftExperience + 3 * leading, { maxWidth: maxWidthMain2 });

    //Education
    var shiftEducation = 105;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(16);
    doc.text("EDUCATION", leftMain, shiftEducation);
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("VNUHCM - University of Science ", leftMain, shiftEducation + 2 * leading);
    doc.setFontSize(12);
    doc.text("Bachelor's degree, Information Technology", leftMain, shiftEducation + 3 * leading);
    doc.setTextColor(100, 100, 100);
    doc.text("2019 - 2023", leftMain, shiftEducation + 4 * leading);









    //Save file
    doc.save('Test.pdf');
}

