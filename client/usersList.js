Template.usersList.helpers ({
	sending: function() {
		return Session.equals('sending', this._id);
	},
	users: function() {
		return Meteor.users.find({_id: { $ne: Meteor.userId()}}, {sort: {username: 1}});
	}
});

Template.usersList.events({
	'dblclick': function() {
		Session.set('sending', this._id);
	},
	'keydown': function(event) {
		if (event.which == 13) { // = ENTER
			var content = document.getElementById('message').value;
			if (content != '') {
				Messages.insert({
					content: content,
					senderId: Meteor.userId(),
					recepientId: Session.get('sending'),
					date: Date.now()
				});
			}
			Session.set('sending', null);
		}
	}
});