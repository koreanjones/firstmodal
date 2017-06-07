
// Get the modal
var modal = document.querySelector('.modal');

// Get the button that opens the modal
var button = document.querySelector('.mainbutton');

// Get the <span> element that closes the modal
var logo = document.getElementsByClassName("logo")[0];


button.onclick = function(){
	modal.style.display = "block";

}
logo.onclick = function (){
	modal.style.display = "none";
}
