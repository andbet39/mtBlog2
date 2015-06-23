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
        onBeforeAction: function(){
            var     CSS1 = IRLibLoader.load('http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css', {
                success: function(){ console.log('CSS1  LOADED'); },
                error: function(){ console.log('CSS1 ERROR CALLBACK'); }
            });

            var CSS3  = IRLibLoader.load('/bower_components/medium-editor/dist/css/themes/default.css', {
                success: function(){ console.log('CSS3 LOADED'); },
                error: function(){ console.log('CSS3 ERROR CALLBACK'); }
            });
            var CSS3  = IRLibLoader.load('/bower_components/medium-editor/dist/css/medium-editor.min.css', {
                success: function(){ console.log('CSS3 LOADED'); },
                error: function(){ console.log('CSS3 ERROR CALLBACK'); }
            });

            var g = IRLibLoader.load('/bower_components/jquery/dist/jquery.min.js', {
                success: function(){ console.log('G LOADED'); },
                error: function(){ console.log('G ERROR CALLBACK'); }
            });

            var f = IRLibLoader.load('/bower_components/medium-editor/dist/js/medium-editor.min.js', {
                success: function(){ console.log('F LOADED'); },
                error: function(){ console.log('F ERROR CALLBACK'); }
            });

            if(g.ready() && f.ready()){
              var a= IRLibLoader.load('/bower_components/handlebars/handlebars.runtime.min.js', {
                    success: function(){ console.log('A LOADED'); },
                    error: function(){ console.log('A ERROR CALLBACK'); }
                });

                var b = IRLibLoader.load('/bower_components/blueimp-file-upload/js/vendor/jquery.ui.widget.js', {
                    success: function(){ console.log('B  LOADED'); },
                    error: function(){ console.log('B ERROR CALLBACK'); }
                });
                var c = IRLibLoader.load('/bower_components/blueimp-file-upload/js/jquery.iframe-transport.js', {
                    success: function(){ console.log('C LOADED'); },
                    error: function(){ console.log('C ERROR CALLBACK'); }
                 });

                var d = IRLibLoader.load('/bower_components/jquery-sortable/source/js/jquery-sortable-min.js', {
                    success: function(){ console.log('D LOADED'); },
                    error: function(){ console.log('D ERROR CALLBACK'); }
                });

                if( b.ready() && d.ready() && c.ready() ) {
                    var e = IRLibLoader.load('/bower_components/blueimp-file-upload/js/jquery.fileupload.js', {
                        success: function(){ console.log('E LOADED'); },
                        error: function(){ console.log('E ERROR CALLBACK'); }
                    });
                    if (e.ready()) {

                        var l = IRLibLoader.load('/bower_components/medium-editor-insert-plugin/dist/js/medium-editor-insert-plugin.min.js', {
                            success: function(){ console.log('L LOADED'); },
                            error: function(){ console.log('L ERROR CALLBACK'); }
                        });
                        var CSS2  = IRLibLoader.load('/bower_components/medium-editor-insert-plugin/dist/css/medium-editor-insert-plugin.min.css', {
                            success: function(){ console.log('CSS2 LOADED'); },
                            error: function(){ console.log('CSS2 ERROR CALLBACK'); }
                        });


                        if(l.ready() && CSS2.ready()){
                            this.next();
                        }
                    }

                }
            }
        }
});


