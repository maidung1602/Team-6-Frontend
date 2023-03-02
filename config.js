'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
    DATABASE_PORT,
    HOST,
    HOST_URL,
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
} = process.env;

assert(DATABASE_PORT, 'PORT must be');
assert(HOST, 'HOST must be');

module.exports = {
    port: DATABASE_PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig : {
        apiKey: apiKey,
        authDomain: authDomain,
        projectId: projectId,
        storageBucket: storageBucket,
        messagingSenderId: messagingSenderId,
        appId: appId
    }
};