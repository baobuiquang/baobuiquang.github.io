//Text Format
function textFormat() {
    var x = document.getElementById("frm");
    var str = "";
    var i = 0;
    for (i = 0; i < x.length; i++) {
        str += x.elements[i].value;
        str += "<br>";
    }

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
    var elm0, elm1, numOfExp;
    elm0 += x.elements[0].value;
    elm1 += x.elements[1].value;
    numOfExp = parseInt(x.elements[2].value);
    var doc = new jsPDF();

    //Processing
    doc.setLineHeightFactor(1.4);
    var leading = 6;

    var leftSide = 10;
    var maxWidthSide = 55;
    var leftMain = 78;
    var leftMain2 = 120;
    var maxWidthMain = 125;
    var maxWidthMain1 = 40;
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
    doc.text("TOP SKILLS", leftSide, shiftSkill);
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
    //Exp1
    var shiftExp1 = 0;
    doc.setFontSize(14);
    doc.text("Freelance", leftMain, shiftExperience + shiftExp1 + 2 * leading, { maxWidth: maxWidthMain1 });
    doc.setFontSize(12);
    doc.text("(Working for clients)", leftMain, shiftExperience + shiftExp1 + 3 * leading, { maxWidth: maxWidthMain1 });
    doc.setTextColor(100, 100, 100);
    doc.text("Jul 2020 - Present", leftMain, shiftExperience + shiftExp1 + 4 * leading, { maxWidth: maxWidthMain1 });
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Front-end Web Developer", leftMain2, shiftExperience + shiftExp1 + 2 * leading);
    doc.setFontSize(12);
    doc.text("Discussing and turning client's ideas into visual problems, designing and developing their website. Worked mainly with HTML, CSS, Javascript and Bootstrap.", leftMain2, shiftExperience + shiftExp1 + 3 * leading, { maxWidth: maxWidthMain2 });
    //Exp2
    var shiftExp2 = 0;
    doc.setFontSize(14);
    doc.text("Design ITUS", leftMain, shiftExperience + shiftExp2 + 8 * leading, { maxWidth: maxWidthMain1 });
    doc.setFontSize(12);
    doc.text("(Academic Club)", leftMain, shiftExperience + shiftExp2 + 9 * leading, { maxWidth: maxWidthMain1 });
    doc.setTextColor(100, 100, 100);
    doc.text("Sep 2019 - Present", leftMain, shiftExperience + shiftExp2 + 10 * leading, { maxWidth: maxWidthMain1 });
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Graphic Designer", leftMain2, shiftExperience + shiftExp2 + 8 * leading);
    doc.setFontSize(12);
    doc.text("Responsible for graphic design content (logos, posters, backdrops, etc) for some events in university, work regularly on Adobe Illustrator.", leftMain2, shiftExperience + shiftExp2 + 9 * leading, { maxWidth: maxWidthMain2 });

    //Education
    var shiftEducation = 135;
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
    doc.setTextColor(0, 0, 0);
    doc.text("Coursework includes one of the majors: computer science, software engineering, data science, computer network. Enthusiastically lead group projects in subjects including mathematics, programming technique.", leftMain, shiftEducation + 5 * leading, { maxWidth: maxWidthMain });

    //Award
    var shiftAward = 200;
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("AWARDS", leftMain, shiftAward);
    doc.setFontSize(14);
    doc.text("IT Talent 2019", leftMain, shiftAward + 2 * leading, { maxWidth: maxWidthMain1 });
    doc.text("Competition", leftMain, shiftAward + 3 * leading, { maxWidth: maxWidthMain1 });
    doc.setFontSize(12);
    doc.text("Role: Team Leader", leftMain, shiftAward + 4 * leading, { maxWidth: maxWidthMain1 });
    doc.setTextColor(100, 100, 100);
    doc.text("Sep 2019", leftMain, shiftAward + 5 * leading, { maxWidth: maxWidthMain1 });
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Consolation Prize", leftMain2, shiftAward + 2 * leading);
    doc.setFontSize(12);
    doc.text("A five-round competition, round 4 focused on teamworking, applying IT knowledge into a theme issue (2019 - environmental issue). Our solution: Green Life System - Plastic waste Management System with mobile app technology.", leftMain2, shiftAward + 3 * leading, { maxWidth: maxWidthMain2 });





    //Save file
    doc.save('Test.pdf');
}

