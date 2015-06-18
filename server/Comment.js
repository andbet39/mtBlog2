/**
 * Created by andbet39 on 18/06/15.
 */
Meteor.publish("comments",function(){
    return Comments.find();
});

