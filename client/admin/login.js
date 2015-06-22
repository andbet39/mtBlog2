/**
 * Created by andreaterzani on 19/06/15.
 */
Template.login.events({
    'submit .login-form': function (event) {
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        console.log('login form event');

        Meteor.loginWithPassword(email,password,function(err){
            if(!err) {
                Router.go('/admin');
            }
        });
    },
    'click .btn-facebook':function(event){
        event.preventDefault();
        Meteor.loginWithFacebook(function(err){
            if(!err) {
                Router.go('/admin');
            }
        });
    },
    'click .btn-register':function(event){
        event.preventDefault();

                Router.go('/register');
    }
});
