function validate(){
    var day = Number(document.getElementById("day").value);
    var month=  Number ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"](document.getElementById("month").value);
    var year = Number(document.getElementById("year").value);
    var century = Number(document.getElementById("century").value);
    var genderSelected = document.getElementsByName("gender");
    function genderPicked() {
        for (var gender of genderSelected) {
            if (gender.checked){
                return gender.value;
            }
        }
    }
    var genderValue = genderPicked();
    function dayValid () {
        if (day < 1 || day > 31) {
            alert("Please put a valid day")
            return false;
        } else{
            return true;
        }
    }
    function monthValid () {
        if (month < 1 || month > 12) {
            alert ("Please put a valid month");
            return false;
        } else{
            return true;
        }
    }

    var dayIndex = Math.round(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day) % 7);
   
 var akanName;
    if (genderValue === "male") {
        switch(dayIndex) {
                case 0:
            akanName = "Kwasi";
            alert("Your name is Kwasi");
            break;
            case 1:
            akanName = "Kwadwo";
            alert("your name is Kwadwo");
            break;
            case 2:
            akanName = "Kwabena";
            alert("Your Akan name is Kwabena");
            break;
            case 3:
            akanName = "Kwaku";
            alert("Your Akan name is Kwaku");
            break;
            case 4:
            akanName = "Yaw";
            alert("Your Akan name is Yaw");
            break;
            case 5:
            akanName = "Kofi";
            alert("Your Akan name is Kofi");
            break;
            case 6:
            akanName = "Kwame";
            alert("Your Akan name is Kwame");
            break;
            default:
            akanName = "Please input the correct details!"
            alert("Please input the correct details!");
        }
    } else if (genderValue = "female") {
        switch(dayIndex) {
                case 0:
                akanName = "Akosua";
                alert("Your Akan name is Akosua");
                break;
                case 1:
                akanName = "Adwoa";
                alert("Your Akan name is Adwoa");
                break;
                case 2:
                akanName = "Abenaa";
                alert("Your Akan name is Abenaa");
                break;
                case 3:
                akanName = "Akua";
                alert("Your Akan name is Akua");
                break;
                case 4:
                akanName = "Yaa";
                alert("Your Akan name is Yaa");
                break;
                case 5:
                akanName = "Afua";
                alert("Your Akan name is Afua");
                break;
                case 6:
                akanName = "Ama";
                alert("Your Akan name is Ama");
                break;
                default:
                akanName = "Please input the correct details!"
                alert("Please input the correct details!");
            }
    } else {
                alert("Please try again with the correct data.");
    }
}




