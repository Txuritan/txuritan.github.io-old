var menu1 =
	[{
		'Option 1':function(menuItem,menu)
		{
			alert("You clicked Option 1!");
		}
	},
	$.contextMenu.separator,
	{
		'Option 2':function(menuItem,menu)
		{
			alert("You clicked Option 2!");
		}
	}];
$(function() {
  $('.cmenu1').contextMenu(menu1,{theme:'vista'});
});