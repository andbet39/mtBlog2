Router.configure({
    // the default layout
    layoutTemplate: 'layout1'
});



Router.route('/projects', function () {
    this.render('project_list');
});



Router.route('/register', function () {
    this.render('register');
});

Router.route('/home', function () {
    this.render('home');
});


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
Router.route('/post/:link', function () {
    var item = Posts.findOne({link: this.params.link});
    this.render('post', {data: item});
});