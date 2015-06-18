/**
 * Created by andbet39 on 18/06/15.
 */
Comments = new Mongo.Collection('comments');


Meteor.methods({
        addComment: function (comment) {

            console.log(comment);
            Comments.insert(comment);

        }}
);