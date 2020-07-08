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
    var elm0, elm1;
    elm0 += x.elements[0].value;
    elm1 += x.elements[1].value;
    //var numOfExp = parseInt(x.elements[0].value);
    //var numOfEdu = parseInt(x.elements[0].value);
    //var numOfAwa = parseInt(x.elements[0].value);
    //var numOfAdd = parseInt(x.elements[0].value);
    var doc = new jsPDF();

    //--------------------------------------- User Data --------------------------------------

    var exp1_1 = "Freelance";
    var exp1_2 = "(Working for clients)";
    var exp1_3 = "Jul 2020 - Present";
    var exp1_4 = "Front-end Web Developer";
    var exp1_5 = "Blah blah blah blah blah blah blah blah blah Discussing and turning client's ideas into visual problems, designing and developing their website. Worked mainly with HTML, CSS, Javascript and Bootstrap.";
    var exp2_1 = "Freelance";
    var exp2_2 = "(Working for clients)";
    var exp2_3 = "Jul 2020 - Present";
    var exp2_4 = "Front-end Web Developer";
    var exp2_5 = "Blah blah blah blah blah blah blah blah blah Discussing and turning client's ideas into visual problems, designing and developing their website. Worked mainly with HTML, CSS, Javascript and Bootstrap.";
    var exp3_1 = "Freelance";
    var exp3_2 = "(Working for clients)";
    var exp3_3 = "Jul 2020 - Present";
    var exp3_4 = "Front-end Web Developer";
    var exp3_5 = "Blah blah blah blah blah blah blah blah blah Discussing and turning client's ideas into visual problems, designing and developing their website. Worked mainly with HTML, CSS, Javascript and Bootstrap.";

    var edu1_1 = "Information Technology, Bachelor's Degree";
    var edu1_2 = "Vietnam National University - University of Science";
    var edu1_3 = "2019 - 2023";
    var edu1_4 = "Coursework includes one of the majors: computer science, software engineering, data science, computer network. Enthusiastically lead group projects in subjects including mathematics, programming technique.";
    var edu2_1 = "Information Technology, Bachelor's Degree";
    var edu2_2 = "Vietnam National University - University of Science";
    var edu2_3 = "2019 - 2023";
    var edu2_4 = "Coursework includes one of the majors: computer science, software engineering, data science, computer network. Enthusiastically lead group projects in subjects including mathematics, programming technique.";
    var edu3_1 = "Information Technology, Bachelor's Degree";
    var edu3_2 = "Vietnam National University - University of Science";
    var edu3_3 = "2019 - 2023";
    var edu3_4 = "Coursework includes one of the majors: computer science, software engineering, data science, computer network. Enthusiastically lead group projects in subjects including mathematics, programming technique.";

    var awa1_1 = "IT Talent 2019";
    var awa1_2 = "Competition";
    var awa1_3 = "Sep 2019";
    var awa1_4 = "Role: Team Leader";
    var awa1_5 = "Consolation Prize";
    var awa1_6 = "Teamworking, applying technology knowledge into environmental issue. Our solution: Plastic waste Management System with mobile app technology.";
    var awa2_1 = "IT Talent 2019";
    var awa2_2 = "Competition";
    var awa2_3 = "Sep 2019";
    var awa2_4 = "Role: Team Leader";
    var awa2_5 = "Consolation Prize";
    var awa2_6 = "Teamworking, applying technology knowledge into environmental issue. Our solution: Plastic waste Management System with mobile app technology.";
    var awa3_1 = "IT Talent 2019";
    var awa3_2 = "Competition";
    var awa3_3 = "Sep 2019";
    var awa3_4 = "Role: Team Leader";
    var awa3_5 = "Consolation Prize";
    var awa3_6 = "Teamworking, applying technology knowledge into environmental issue. Our solution: Plastic waste Management System with mobile app technology.";

    var add1_1 = "Information Technology, Bachelor's Degree";
    var add1_2 = "2019 - 2023";
    var add1_3 = "Coursework includes one of the majors: computer science, software engineering, data science, computer network. Enthusiastically lead group projects in subjects including mathematics, programming technique.";
    var add2_1 = "Information Technology, Bachelor's Degree";
    var add2_2 = "2019 - 2023";
    var add2_3 = "Coursework includes one of the majors: computer science, software engineering, data science, computer network. Enthusiastically lead group projects in subjects including mathematics, programming technique.";
    var add3_1 = "Information Technology, Bachelor's Degree";
    var add3_2 = "2019 - 2023";
    var add3_3 = "Coursework includes one of the majors: computer science, software engineering, data science, computer network. Enthusiastically lead group projects in subjects including mathematics, programming technique.";

    //--------------------------------------- Processing --------------------------------------

    //Temp value
    var numOfExp = 2;
    var numOfEdu = 1;
    var numOfAwa = 1;
    var numOfAdd = 1;

    //Color Theme
    var rgb_r = 0;
    var rgb_g = 25;
    var rgb_b = 35;
    //Line
    doc.setLineWidth(0.5);
    doc.setDrawColor(200, 200, 200);
    var yTransLine = 6;
    //Basic Elements
    doc.setLineHeightFactor(1.5);
    var leading = 6;
    var yTransTitle = 2;
    var alignment = "justify";
    //Padding & MaxWidth
    var leftSide = 8;
    var maxWidthSide = 51;
    var leftMain = 67;
    var leftMain2 = 107;
    var maxWidthMain = 130;
    var maxWidthMain1 = 36;
    var maxWidthMain2 = 92;
    //Shift
    var shiftContact = 20;
    var shiftSkill = 110;
    var shiftHeader = 20;

    //Side
    doc.setFillColor(rgb_r, rgb_g, rgb_b);
    doc.rect(0, 0, 60, 300, "F");

    //Contact
    if (true) {
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(16);
        doc.setFontStyle("bold");
        doc.text("CONTACT", leftSide, shiftContact);
        doc.setFontStyle("normal");
        doc.setFontSize(12);
        doc.text("Phone", leftSide, shiftContact + 2 * leading);
        doc.setFontSize(11);
        doc.text("(+84)849283959", leftSide, shiftContact + 3 * leading);
        doc.setFontSize(12);
        doc.text("Mail", leftSide, shiftContact + 5 * leading);
        doc.setFontSize(11);
        doc.text("quangbao.co@gmail.com", leftSide, shiftContact + 6 * leading, { maxWidth: maxWidthSide });
        doc.setFontSize(12);
        doc.text("LinkedIn: ", leftSide, shiftContact + 8 * leading);
        doc.setFontSize(11);
        doc.text("linkedin.com/in/buiquangbao", leftSide, shiftContact + 9 * leading, { maxWidth: maxWidthSide });
        doc.setFontSize(12);
        doc.text("Personal Website", leftSide, shiftContact + 11 * leading);
        doc.setFontSize(11);
        doc.text("buiquangbao.github.io", leftSide, shiftContact + 12 * leading, { maxWidth: maxWidthSide });
    }

    //Skill
    if (true) {
        doc.setFontSize(16);
        doc.setFontStyle("bold");
        doc.text("TOP SKILLS", leftSide, shiftSkill);
        doc.setFontStyle("normal");
        doc.setFontSize(14);
        doc.setTextColor(255, 255, 255);
        doc.text("Web Development", leftSide, shiftSkill + 2 * leading);
        doc.setFontSize(11);
        doc.setTextColor(160, 160, 160);
        doc.text("HTML, CSS, Javascript, Bootstrap", leftSide, shiftSkill + 3 * leading, { maxWidth: maxWidthSide });
        doc.setFontSize(14);
        doc.setTextColor(255, 255, 255);
        doc.text("App Development", leftSide, shiftSkill + 6 * leading);
        doc.setFontSize(11);
        doc.setTextColor(160, 160, 160);
        doc.text("Dartlang, Flutter SDK, Firebase", leftSide, shiftSkill + 7 * leading, { maxWidth: maxWidthSide });
        doc.setFontSize(14);
        doc.setTextColor(255, 255, 255);
        doc.text("Graphic Design", leftSide, shiftSkill + 10 * leading);
        doc.setFontSize(11);
        doc.setTextColor(160, 160, 160);
        doc.text("Adobe Illustrator, Davinci Resolve", leftSide, shiftSkill + 11 * leading, { maxWidth: maxWidthSide });
    }

    //Header
    if (true) {
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(24);
        doc.setFontStyle("bold");
        doc.text("Bui Quang Bao", leftMain, shiftHeader);
        doc.setFontStyle("normal");
        doc.setFontSize(12);
        doc.text("App & Web Developer, UI/UX Designer ", leftMain, shiftHeader + 1 * leading);
        doc.text("Ho Chi Minh City, Vietnam", leftMain, shiftHeader + 2 * leading);
    }

    //Experience
    var shiftExperience = 45;
    //Exp1
    if (numOfExp >= 1) {
        doc.line(leftMain, shiftExperience - yTransLine, leftMain + 25, shiftExperience - yTransLine);
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.setFontStyle("bold");
        doc.text("EXPERIENCE", leftMain, shiftExperience + yTransTitle);
        doc.setFontStyle("normal");
        var shiftExp1 = 0;
        doc.setFontSize(14);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(exp1_1, leftMain, shiftExperience + shiftExp1 + 2 * leading, { maxWidth: maxWidthMain1 });
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        doc.text(exp1_2, leftMain, shiftExperience + shiftExp1 + 3 * leading, { maxWidth: maxWidthMain1 });
        doc.setTextColor(100, 100, 100);
        doc.text(exp1_3, leftMain, shiftExperience + shiftExp1 + 4 * leading, { maxWidth: maxWidthMain1 });
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(exp1_4, leftMain2, shiftExperience + shiftExp1 + 2 * leading);
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        doc.text(exp1_5, leftMain2, shiftExperience + shiftExp1 + 3 * leading, { maxWidth: maxWidthMain2, align: alignment });
    }
    doc.text("error error error error error error error error error error error", 1000, 1000, { maxWidth: maxWidthMain2, align: alignment });
    //Exp2
    if (numOfExp >= 2) {
        var shiftExp2 = 0;
        doc.setFontSize(14);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(exp2_1, leftMain, shiftExperience + shiftExp2 + 8 * leading, { maxWidth: maxWidthMain1 });
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        doc.text(exp2_2, leftMain, shiftExperience + shiftExp2 + 9 * leading, { maxWidth: maxWidthMain1 });
        doc.setTextColor(100, 100, 100);
        doc.text(exp2_3, leftMain, shiftExperience + shiftExp2 + 10 * leading, { maxWidth: maxWidthMain1 });
        doc.setFontSize(14);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(exp2_4, leftMain2, shiftExperience + shiftExp2 + 8 * leading);
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        doc.text(exp2_5, leftMain2, shiftExperience + shiftExp2 + 9 * leading, { maxWidth: maxWidthMain2, align: alignment });
    }
    //Exp3
    if (numOfExp >= 3) {
        var shiftExp2 = 0;
        doc.setFontSize(14);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(exp3_1, leftMain, shiftExperience + shiftExp2 + 14 * leading, { maxWidth: maxWidthMain1 });
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        doc.text(exp3_2, leftMain, shiftExperience + shiftExp2 + 15 * leading, { maxWidth: maxWidthMain1 });
        doc.setTextColor(100, 100, 100);
        doc.text(exp3_3, leftMain, shiftExperience + shiftExp2 + 16 * leading, { maxWidth: maxWidthMain1 });
        doc.setFontSize(14);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(exp3_4, leftMain2, shiftExperience + shiftExp2 + 14 * leading);
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        doc.text(exp3_5, leftMain2, shiftExperience + shiftExp2 + 15 * leading, { maxWidth: maxWidthMain2, align: alignment });
    }


    //Education
    var shiftEducation = shiftExperience;
    if (numOfExp == 1) {
        shiftEducation += 55;
    } else if (numOfExp == 2) {
        shiftEducation += 91;
    } else if (numOfExp == 3) {
        shiftEducation += 126;
    }
    if (numOfEdu >= 1) {
        doc.line(leftMain, shiftEducation - yTransLine, leftMain + 25, shiftEducation - yTransLine);
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(16);
        doc.setFontStyle("bold");
        doc.text("EDUCATION", leftMain, shiftEducation + yTransTitle);
        doc.setFontStyle("normal");
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(edu1_1, leftMain, shiftEducation + 2 * leading);
        doc.text(edu1_2, leftMain, shiftEducation + 3 * leading);
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(edu1_3, leftMain, shiftEducation + 4 * leading);
        doc.setTextColor(0, 0, 0);
        doc.text(edu1_4, leftMain, shiftEducation + 5 * leading, { maxWidth: maxWidthMain, align: alignment });
    }
    if (numOfEdu >= 2) {
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(edu2_1, leftMain, shiftEducation + 9 * leading);
        doc.text(edu2_2, leftMain, shiftEducation + 10 * leading);
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(edu2_3, leftMain, shiftEducation + 11 * leading);
        doc.setTextColor(0, 0, 0);
        doc.text(edu2_4, leftMain, shiftEducation + 12 * leading, { maxWidth: maxWidthMain, align: alignment });
    }
    if (numOfEdu >= 3) {
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(edu3_1, leftMain, shiftEducation + 16 * leading);
        doc.text(edu3_2, leftMain, shiftEducation + 17 * leading);
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(edu3_3, leftMain, shiftEducation + 18 * leading);
        doc.setTextColor(0, 0, 0);
        doc.text(edu3_4, leftMain, shiftEducation + 19 * leading, { maxWidth: maxWidthMain, align: alignment });
    }


    //Award
    var shiftAward = shiftEducation;
    if (numOfEdu == 1) {
        shiftAward += 57;
    } else if (numOfEdu == 2) {
        shiftAward += 97;
    } else if (numOfEdu == 3) {
        shiftAward += 137;
    }
    if (numOfAwa >= 1) {
        doc.line(leftMain, shiftAward - yTransLine, leftMain + 25, shiftAward - yTransLine);
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.setFontStyle("bold");
        doc.text("AWARDS", leftMain, shiftAward + yTransTitle);
        doc.setFontStyle("normal");
        doc.setFontSize(14);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(awa1_1, leftMain, shiftAward + 2 * leading, { maxWidth: maxWidthMain1 });
        doc.text(awa1_2, leftMain, shiftAward + 3 * leading, { maxWidth: maxWidthMain1 });
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(awa1_3, leftMain, shiftAward + 4 * leading, { maxWidth: maxWidthMain1 });
        doc.setTextColor(0, 0, 0);
        doc.text(awa1_4, leftMain, shiftAward + 5 * leading, { maxWidth: maxWidthMain1 });
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(awa1_5, leftMain2, shiftAward + 2 * leading);
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        doc.text(awa1_6, leftMain2, shiftAward + 3 * leading, { maxWidth: maxWidthMain2, align: alignment });
    }
    doc.text("error error error error error error error error error error error", 1000, 1000, { maxWidth: maxWidthMain2, align: alignment });
    if (numOfAwa >= 2) {
        doc.setFontSize(14);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(awa2_1, leftMain, shiftAward + 7 * leading, { maxWidth: maxWidthMain1 });
        doc.text(awa2_2, leftMain, shiftAward + 8 * leading, { maxWidth: maxWidthMain1 });
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(awa2_3, leftMain, shiftAward + 9 * leading, { maxWidth: maxWidthMain1 });
        doc.setTextColor(0, 0, 0);
        doc.text(awa2_4, leftMain, shiftAward + 10 * leading, { maxWidth: maxWidthMain1 });
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(awa2_5, leftMain2, shiftAward + 7 * leading);
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        doc.text(awa2_6, leftMain2, shiftAward + 8 * leading, { maxWidth: maxWidthMain2, align: alignment });
    }
    doc.text("error error error error error error error error error error error", 1000, 1000, { maxWidth: maxWidthMain2, align: alignment });
    if (numOfAwa >= 3) {
        doc.setFontSize(14);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(awa3_1, leftMain, shiftAward + 12 * leading, { maxWidth: maxWidthMain1 });
        doc.text(awa3_2, leftMain, shiftAward + 13 * leading, { maxWidth: maxWidthMain1 });
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(awa3_3, leftMain, shiftAward + 14 * leading, { maxWidth: maxWidthMain1 });
        doc.setTextColor(0, 0, 0);
        doc.text(awa3_4, leftMain, shiftAward + 15 * leading, { maxWidth: maxWidthMain1 });
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(awa3_5, leftMain2, shiftAward + 12 * leading);
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        doc.text(awa3_6, leftMain2, shiftAward + 13 * leading, { maxWidth: maxWidthMain2, align: alignment });
    }


    //Additional
    var shiftAdditional = shiftAward;
    if (numOfAwa == 1) {
        shiftAdditional += 45;
    } else if (numOfAwa == 2) {
        shiftAdditional += 75;
    } else if (numOfAwa == 3) {
        shiftAdditional += 104;
    }
    if (numOfAdd >= 1) {
        doc.line(leftMain, shiftAdditional - yTransLine, leftMain + 25, shiftAdditional - yTransLine);
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(16);
        doc.setFontStyle("bold");
        doc.text("ADDITIONAL", leftMain, shiftAdditional + yTransTitle);
        doc.setFontStyle("normal");
        doc.setFontSize(14);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(add1_1, leftMain, shiftAdditional + 2 * leading);
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(add1_2, leftMain, shiftAdditional + 3 * leading);
        doc.setTextColor(0, 0, 0);
        doc.text(add1_3, leftMain, shiftAdditional + 4 * leading, { maxWidth: maxWidthMain, align: alignment });
    }
    if (numOfAdd >= 2) {
        doc.setFontSize(14);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(add2_1, leftMain, shiftAdditional + 8 * leading);
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(add2_2, leftMain, shiftAdditional + 9 * leading);
        doc.setTextColor(0, 0, 0);
        doc.text(add2_3, leftMain, shiftAdditional + 10 * leading, { maxWidth: maxWidthMain, align: alignment });
    }
    if (numOfAdd >= 3) {
        doc.setFontSize(14);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(add3_1, leftMain, shiftAdditional + 14 * leading);
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(add3_2, leftMain, shiftAdditional + 15 * leading);
        doc.setTextColor(0, 0, 0);
        doc.text(add3_3, leftMain, shiftAdditional + 16 * leading, { maxWidth: maxWidthMain, align: alignment });
    }






    //Save file
    doc.save('Test.pdf');
}

