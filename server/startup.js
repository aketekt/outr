Meteor.startup(() => {
  if (Shouts.find().count() === 0) {
    const shouts = [{
      'content': 'Dubstep-Free Zone',
      'location': 'Fast just got faster with Nexus S.'
    }];

    shouts.forEach((shout) => {
      Shouts.insert(shout)

    });

  }

});
