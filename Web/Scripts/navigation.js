var Navigation = function() {

	var selectNavOption = function(cssClass) {
		var button = $(cssClass);
		console.log(button);
        	button.attr('background', '#009688');
        	button.attr('color', '#ffffff');
        	button.find('a').attr('color', '#ffffff');
	}; 

	return {
        InitHome: function () {
        	selectNavOption('.home');
        },
        InitVolunteers: function () {
            selectNavOption('.volunteers');
        },
        InitCommunities: function () {
            selectNavOption('.communities');
        },
        InitProfile: function () {
            selectNavOption('.profile');
        },
        InitEvents: function () {
            selectNavOption('.events');
        }
    }
}();