Meteor.publish("messages", function() {
	return Messages.find({ $or: [{senderId: this.userId}, {recepientId: this.userId}]}, {sort: {date: 1}});
})

Messages.allow({
	insert: function(userId, doc) {
		return (userId && doc.senderId === userId && doc.recepientId !== userId);
	}
});
