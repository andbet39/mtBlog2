/**
 * Created by andreaterzani on 13/06/15.
 */
Meteor.subscribe('posts');
Meteor.subscribe('comments');
Meteor.subscribe('userData');

var editor;

Template.post_list.helpers({
    posts: function() {
        return Posts.find();
    }
});

Template.comment.helpers({
   ownerInfo:function(){
       return Meteor.users.findOne(this.owner);
   },
    prova:function(){
        return {test:"VARIABILE DI PROVA"};
    }

});
Template.comment_list.helpers({

    comments:function(){
        return Comments.find({'post_id':this._id});
    }
});

Template.comment_form.events({
    'submit .comment_form': function (event) {

        event.preventDefault();
        console.log('add comment to : ' + this._id);


        var content = event.target.content.value;
        var comment = {'comment':content,
                       'post_id':this._id,
                       'owner': Meteor.userId(),
                       'created':new Date()};

        event.target.content.value="";

        Meteor.call('addComment',comment);


    }
});

Template.post.events({
   'click .save-button':function(event){
        event.preventDefault();
        var edit = editor.serialize();
        var post= {content:edit['element-0'].value};

        Meteor.call('updatePost',this._id,post)
   }

});

Template.post.rendered = function() {

    if (Meteor.userId()) {
        console.log('rendered');
        editor = new MediumEditor('.editable', {});
    }
    console.log(editor.serialize());
/*
    this.find('.editable').mediumInsert({
        editor: editor
    });*/
};