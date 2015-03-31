function getRandomPosition() {
	var x = $(window).width() - 100;
	var y = $(window).height() - 100;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}

Template.home.rendered = function() {
	var pos = getRandomPosition();
	//var test = $('theButton');
	$('.theButton').css('position','absolute');
	$('.theButton').css('left', pos[0] + 'px');
	$('.theButton').css('top', pos[1] + 'px');
	//test.style.top = 50 + 'px';
	//test.style.left = 200 + 'px';
	//console.log(test);
};

Template.home.helpers({
  items: function() {
    return Items.find();
  },
  clicked: function() {
  	var pos = getRandomPosition();
    $('.theButton').css('position','absolute');
	$('.theButton').css('left', pos[0] + 'px');
	$('.theButton').css('top', pos[1] + 'px');
  	var myItem = Items.findOne({});
  	return myItem.clicks;
  }
});

Template.home.events({
  "click .theButton": function(e, tpl) {
    e.preventDefault();
    $(e.target).blur();
    //var pos = getRandomPosition();
    //$('.theButton').css('position','absolute');
	//$('.theButton').css('left', pos[0] + 'px');
	//$('.theButton').css('top', pos[1] + 'px');

	var myItem = Items.findOne({});
	var itemId;

	if(myItem)
		itemId = myItem._id;
	else
		itemId = '1';

	var clickVal = 1;

	Meteor.call('clickIt', itemId, clickVal, function(error, response) {
        if (error) {
          console.log(error.reason);
        }
        else
        {
          console.log(response);
        }
      });
  }
});
