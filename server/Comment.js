/**
 * Created by andbet39 on 18/06/15.
 */
Meteor.publish("comments",function(){
    return Comments.find();
});

Meteor.publish("userData", function () {
    return Meteor.users.find({},{fields: {'profile': 1, '_id': 1}});
});
