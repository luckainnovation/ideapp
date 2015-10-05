Router.route('/home',{name:'home', template: 'home'});
Router.route('/',{name:'start', template: 'startpage'});

if (Meteor.isClient) {
 
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
