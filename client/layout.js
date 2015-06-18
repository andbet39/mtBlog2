/**
 * Created by andreaterzani on 29/05/15.
 */

Template.layout1.events({

    'submit .login-form':function(event){
        event.preventDefault();

        var email = event.target.email.value;
        var password = event.target.password.value;

        Meteor.loginWithPassword(email,password,function(err){
            console.log(err);
        });

    },
    'click .logout':function(event){
        event.preventDefault();

        Meteor.logout();
    }
});