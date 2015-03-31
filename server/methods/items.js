Meteor.methods({
  'Items.insert': function (params) {
    return Items.insert(params);
  },
  'Items.clear': function () {
    Items.remove({});
    return 'all clear!';
  },
  'clickIt': function (itemId, clickVal) {
    Items.update(
    	{
    		_id: itemId
    	}, 
    	{
    		$inc: { clicks:clickVal },
			$set: {
					clickerId:Meteor.userId(), 
                	updatedAt:moment().toDate()
                  }
         },
         {
         	upsert: true
         }
    );
    return 'updated!';
  },
});
