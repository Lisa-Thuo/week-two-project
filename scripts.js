function getName() {
    var year = parseInt(document.getElementById("YY").value);
    var month =parseInt(document.getElementById("MM").value);
    var day = parseInt(document.getElementById("DD").value);
    var date = new Date();
    var dob = date.getDay();
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var Weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var dayIndex = Math.round((5*year/4)) + ((26*(month+1)/10)) + ((day) % 7);
    if (male.checked == false && female.checked == false) {
        alert("Specify your gender");
    }
    else if(year < 1  ){
        alert("please indicate a valid year");
    }
    else if (month < 1 || month > 12 || month == 2 && day > 29 ){
        alert("Please indicate a valid month!");
    }
    else if( day < 1 || day >31) {
        alert("Indicate a valid day");
    }
    else if (male.checked === true) {
        alert("Your name is" + maleNames[dob]);
    } else {
        alert("Your name is " + femaleNames[dob] );
    }

}