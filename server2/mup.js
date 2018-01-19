  module.exports = {
  servers: {
    one: {
      host: 'ec2-35-158-27-53.eu-central-1.compute.amazonaws.com',
      username: 'ubuntu',
      "pem": "./private/bitlerWebApp.pem"
    }
  },
  meteor: {
    name: 'bitler',
    path: '/Users/bartelverkruijssen/Google Drive/Talqs/Talqs General/development/bitler/Website',
    servers: {
      one: {}
    },
    docker: {
      // change to 'kadirahq/meteord' if your app is not using Meteor 1.4
      image: 'abernix/meteord:node-8.4.0-base'
    },
    buildOptions: {
      serverOnly: true
    },
    env: {
      ROOT_URL: 'https://bitler.co',
      MONGO_URL: 'mongodb://biterSoft:dh48dfu932jkldsf23!dsfjhk432s@ds145230.mlab.com:45230/bitler'
    },
    deployCheckWaitTime: 60,
    enableUploadProgressBar: true
  },
};
