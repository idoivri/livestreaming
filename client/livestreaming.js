// if (Meteor.isClient) {
//   // counter starts at 0
//   Session.setDefault('counter', 0);

//   Template.hello.helpers({
//     counter: function () {
//       return Session.get('counter');
//     }
//   });

//   Template.hello.events({
//     'click button': function () {
//       // increment the counter when button is clicked
//       Session.set('counter', Session.get('counter') + 1);
//     }
//   });
// }

// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     // code to run on server at startup
//   });
// }

var promptBar;
var videosContainer;

Template.foo.events({
      // 'click #init-guest': function () {
      //     console.log("AHA-guest!!");
      //     this.disabled = true;
      //     initAdminOrGuest('guest');
      // },

      // 'click #init-admin': function () {
      //     console.log("AHA-admin!!");
      //     this.disabled = true;
      //     initAdminOrGuest('admin');
      // }
});


      