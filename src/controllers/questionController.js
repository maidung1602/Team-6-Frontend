'use strict';
const db = require('../../db');
const firestore = db.firestore();

const {returnLes} = require('../../public/js/temp.js');
console.log(getAllUrlParams(returnLes()));

const addQuestion = async (req, res, next) =>
{
    
    try {
        
        const data = req.body;
        await firestore.collection('feat').doc('question')
            .collection('lesson01').doc('1.5').set(data);
        res.send('save question');
    } catch (error) {
        res.status(404).send(error.message);
    }
};

const getQuestion = async (req, res, next) =>
{
   
    try {
        const data =
            await firestore.collection('feat').doc('question').collection('hiragana').get();


        if (data.empty) {
            res.status(404).send('no question');
        } else {

            data.forEach(doc =>
            {
                if (doc.id == '1.3') {
                    const question = doc.data();
                    res.send(question);
                }
            });



        }
    } catch (error) {
        res.status(404).send(error.message);
    }
};

function getAllUrlParams(url) {
    // get query string from url (optional) or window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    // we'll store the parameters here
    var obj = {};

    // if query string exists
    if (queryString) {

        // stuff after # is not part of query string, so get rid of it
        queryString = queryString.split('#')[0];

        // split our query string into its component parts
        var arr = queryString.split('&');

        for (var i = 0; i < arr.length; i++) {
            // separate the keys and the values
            var a = arr[i].split('=');

            // set parameter name and value (use 'true' if empty)
            var paramName = a[0];
            var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

            // (optional) keep case consistent
            paramName = paramName.toLowerCase();
            if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

            // if the paramName ends with square brackets, e.g. colors[] or colors[2]
            if (paramName.match(/\[(\d+)?\]$/)) {

                // create key if it doesn't exist
                var key = paramName.replace(/\[(\d+)?\]/, '');
                if (!obj[key]) obj[key] = [];

                // if it's an indexed array e.g. colors[2]
                if (paramName.match(/\[\d+\]$/)) {
                    // get the index value and add the entry at the appropriate position
                    var index = /\[(\d+)\]/.exec(paramName)[1];
                    obj[key][index] = paramValue;
                } else {
                    // otherwise add the value to the end of the array
                    obj[key].push(paramValue);
                }
            } else {
                // we're dealing with a string
                if (!obj[paramName]) {
                    // if it doesn't exist, create property
                    obj[paramName] = paramValue;
                } else if (obj[paramName] && typeof obj[paramName] === 'string'){
                    // if property does exist and it's a string, convert it to an array
                    obj[paramName] = [obj[paramName]];
                    obj[paramName].push(paramValue);
                } else {
                    // otherwise add the property
                    obj[paramName].push(paramValue);
                }
            }
        }
    }

    return obj;
}


module.exports = {
    addQuestion,
    getQuestion,
};
