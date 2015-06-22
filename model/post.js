Posts = new Mongo.Collection('posts');


Meteor.methods({
    addPost: function (comment) {

        console.log('addPost method');

        Comments.insert(comment);

    },
    updatePost:function(id,newPost){
        var post = Posts.findOne(id);
        post.content=newPost.content;
        post.updateAt= new Date();

        Posts.update(id,{$set: {content:newPost.content,updateAt:new Date()}});

    }}
);