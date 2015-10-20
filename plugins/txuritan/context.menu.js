$(document).ready(function() {
	
	context.init({preventDoubleContext: false});
	
	context.attach('.context-menu', [
		{
			header: 'Options'
		},
		{
			text: 'Open', href: '#'
		},
		{
			text: 'Open in new Window', href: '#'
		},
		{
			divider: true
		},
		{
			text: 'Copy', href: '#'
		},
		{
			text: 'Dafuq!?', href: '#', action: function(e)
			{
				e.preventDefault();
				context.destroy('html');
				alert('html contextual menu destroyed!');
			}
		}
	]);
});
