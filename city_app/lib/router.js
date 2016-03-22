Router.configure({
  layoutTemplate: 'appLayout'
})

Router.route('/', {
  template: 'home',
  waitOn: function() {
    return Meteor.subscribe('nearbyPlaces', Session.get('bottomLeft'), Session.get('topRight'))
  },
  data: function () { return Places.find() }
})