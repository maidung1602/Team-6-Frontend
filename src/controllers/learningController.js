const express = require('express');
const { render } = require('ejs');

class learningController
{
    lesson(req, res){
        res.render('multiple_choice');
    }

    end(req, res){
        res.render('end');
    }

    learning(req, res){
        res.render('learning');
    }
}

module.exports = new learningController();