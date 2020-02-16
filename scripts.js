function DayOfTheWeek() { ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )
var gender= prompt("Male or Female")
if(gender!="Male||Female")
console.log("Please indicate your gender")
var MM= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
alert ("Indicate your date of birth")
var DD= [1-31]
if (DD<0||DD>31) {
console.log("Please indicate a valid number")
}
if(MM<January||MM>December) {
    console.log("Please enter a valid month")
}
}



