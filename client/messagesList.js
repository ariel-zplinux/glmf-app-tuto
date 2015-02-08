Template.messagesList.helpers({
	messages: function() {
		return Messages.find();
	},
	sender: function() {
		return Meteor.users.findOne(this.senderId).username;
	},
	recepient: function() {
		return Meteor.users.findOne(this.recepientId).username;
	}
});
