// Materialize CSS Sidenav
document.addEventListener('DOMContentLoaded', function() 
{
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems, {edge:'left'});
});

// Materialize CSS Accordion
document.addEventListener('DOMContentLoaded', function() 
{
	var elems = document.querySelectorAll('.collapsible');
	var instances = M.Collapsible.init(elems, {accordion:'true'});
});

// Materialize CSS Tabs
document.addEventListener('DOMContentLoaded', function() 
{
	var elems = document.querySelectorAll('.tabs');
	var instances = M.Tabs.init(elems, {select:'tab-1'});
});

// W3S SCroll to Top
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	mybutton.style.display = "block";
} else {
	mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 