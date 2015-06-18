Posts = new Mongo.Collection('posts');


Meteor.methods({
    addPost: function (comment) {

        console.log('addPost method');

        Comments.insert(comment);

    }}
);