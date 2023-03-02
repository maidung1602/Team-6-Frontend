const admin = require('firebase-admin');
const serviceAccount = require('./jschallenge-29ca9-firebase-adminsdk-4pzop-8dd8485978.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://jschallenge-29ca9.firebaseio.com'
});


module.exports = admin;