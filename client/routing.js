Router.configure({
    // the default layout
    layoutTemplate: 'blogLayout'
});



Router.route('/projects',function(){
    this.render('project_list');
});



Router.route('/register', function () {
    this.layout('blankLayout');
    this.render('register');
});

Router.route('/login', function () {
    this.layout('blankLayout');
    this.render('login');
});


Router.route('/admin', function(){
        if(Meteor.userId()){
            this.layout('adminLayout');
            this.render('admin');
        }else{
            console.log('user no logged');
            Router.go('/login');
        }
    }
);



Router.route('/project/:_id', function () {
    var item = Projects.findOne({_id: this.params._id});
    this.render('project', {data: item});
});

Router.route('/newpost', function () {
   this.render('newPost');
});


Router.route('/', function () {
    this.render('post_list');
});
Router.route('/post/:link',{
        path:'/post/:link',
        template:'post',
        data:function() {
            return Posts.findOne({link: this.params.link});
        },
        waitOn: function() {
        return IRLibLoader.load('http://cdn.jsdelivr.net/medium-editor/latest/js/medium-editor.min.js');

        }
    });

    /*function () {
    var item = Posts.findOne({link: this.params.link});
    this.render('post', {data: item});
});*/
