if (Meteor.isClient) {
var Swiper = new Swipe(['menu', 'all', 'add']);

Template.home.rendered = function() {
  Swiper.setInitialPage('all');
  Tracker.autorun(function() {
    if (Swiper.pageIs('menu')) {
      return Swiper.leftRight(null,'all');
    }
  });
  Tracker.autorun(function() {
    if (Swiper.pageIs('all')) {
      return Swiper.leftRight('menu', 'add');
    }
  });
  Tracker.autorun(function() {
    if (Swiper.pageIs('add')) {
      return Swiper.leftRight('all', null);
    }
  });
};

Template.home.helpers({
  Swiper: function() {
    return Swiper;
  }
});
Swiper.click('menu', '.next', function(e, t) {
  return Swiper.moveRight();
});
Swiper.click('all', '.next', function(e, t) {
  return Swiper.moveRight();
});
Swiper.click('add', '.previous', function(e, t) {
  return Swiper.moveLeft();
});
Swiper.click('all', '.previous', function(e, t) {
  return Swiper.moveLeft();
});
}