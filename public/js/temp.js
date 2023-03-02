function lesson() {
    location.assign('learning/lesson') 
}

function returnLes1() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.1&part=hiragana')
}
function returnLes2() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.2&part=hiragana')
}
function returnLes3() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.3&part=hiragana')
}
function returnLes4() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.4&part=hiragana')
}
function returnLes5() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.5&part=hiragana')
}

function returnLes6() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.1&part=bai1')
}
function returnLes7() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.2&part=bai1')
}
function returnLes8() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.3&part=bai1')
}
function returnLes9() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.4&part=bai1')
}
function returnLes10() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.5&part=bai1')
}

function returnLes11() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.1&part=midterm')
}
function returnLes12() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.2&part=midterm')
}
function returnLes13() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.3&part=midterm')
}
function returnLes14() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.4&part=midterm')
}
function returnLes15() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.5&part=midterm')
}
function returnLes16() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.1&part=bai2')
}
function returnLes17() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.2&part=bai2')
}
function returnLes18() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.3&part=bai2')
}
function returnLes19() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.4&part=bai2')
}
function returnLes20() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.5&part=bai2')
}
function returnLes21() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.1&part=bai3')
}
function returnLes22() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.2&part=bai3')
}
function returnLes23() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.3&part=bai3')
}
function returnLes24() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.4&part=bai3')
}
function returnLes25() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.5&part=bai3')
}
function returnLes26() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.1&part=kanji')
}
function returnLes27() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.2&part=kanji')
}
function returnLes28() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.3&part=kanji')
}
function returnLes29() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.4&part=kanji')
}
function returnLes30() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.5&part=kanji')
}
function returnLes31() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.1&part=final')
}
function returnLes32() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.2&part=final')
}
function returnLes33() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.3&part=final')
}
function returnLes34() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.4&part=final')
}
function returnLes35() {
    return new URL('http://localhost:7777/api/getquestions?q=test&id=1.5&part=final')
}



function returnLes() {
    return `${returnLes2()}`
}




module.exports = {returnLes}