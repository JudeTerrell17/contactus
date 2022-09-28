function resetform() {
document.getElementById('contactinfo').reset();
}
function validateform() {
var x = document.forms["contactinfo"]["fname"].value;
if (x == "") {
alert("First name must be filled out");
return false;
}


}
