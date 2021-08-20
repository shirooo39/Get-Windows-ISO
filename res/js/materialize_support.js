document.addEventListener('DOMContentLoaded', function() 
{
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems, {edge:'left'});
});

document.addEventListener('DOMContentLoaded', function() 
{
	var elems = document.querySelectorAll('.collapsible');
	var instances = M.Collapsible.init(elems, {accordion:'true'});
});

document.addEventListener('DOMContentLoaded', function() 
{
	var elems = document.querySelectorAll('.tabs');
	var instances = M.Tabs.init(elems, {select:'tab-1'});
});