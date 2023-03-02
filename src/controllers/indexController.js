const express = require('express');
const { render } = require('ejs');

class indexController
{
    home(req, res)
    {
        res.render('index');
    }

    document(req, res)
    {
        res.render('doc');
    }

    learning(req, res){
        res.render('learning');
    }
}

module.exports = new indexController();