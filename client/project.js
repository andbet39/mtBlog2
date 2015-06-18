/**
 * Created by andreaterzani on 29/05/15.
 */
Meteor.subscribe("prjs");



Template.project_list.helpers({
    projects: function() {
        return Projects.find();
    }
});


UI.registerHelper('indexedArray', function(context, options) {
    if (context) {
        return context.map(function(item, index) {
            item._index = index + 1;
            return item;
        });
    }
});

Template.project.events({

    "submit .form-task": function(event) {
    event.preventDefault();

        var title = event.target.title.value;
        var description = event.target.description.value;

        var task = this.tasks;

        task.push({'title':title,
                    'created':new Date(),
                    'description':description
        });


        Projects.update(this._id,{  $set:{  tasks:task}});

        event.target.title="";
        event.target.description="";
    }

});
