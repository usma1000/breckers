var rpm = 0;
var calculator = document.forms["calculator"];
var rpminput = calculator.elements["inputrpm"];

function getrpm()
{
    
    var sfm = calculator.elements["inputsfm"];
    var diameter = calculator.elements["inputdiameter"];
    
    if(sfm.value != "" && diameter.value != "" && diameter.value != 0)
    {
        rpm = (parseFloat(sfm.value) * 12) / (parseFloat(diameter.value) * Math.PI);
        document.getElementById('totalrpm').innerHTML = Math.round(rpm);
        rpminput.value = Math.round(rpm);
        getfeedrate();
    }
    return rpm;
}

function getfeedrate()
{
    var calculator = document.forms["calculator"];
    var ipr = calculator.elements["inputipr"];
    var feedrate = 0;
    
    if(ipr.value != "" && rpminput.value != "")
    {
        feedrate = (parseFloat(ipr.value) * rpm);
        document.getElementById('totalfeedrate').innerHTML = Math.round(feedrate * 10)/10;
    }
}

function getmm()
{
    var inch = calculator.elements["inputinch"];
    var mm = calculator.elements["inputmm"];
    
    mm.value = Math.round((inch.value * 25.4) * 10000)/10000;
}

function getinch()
{
    var inch = calculator.elements["inputinch"];
    var mm = calculator.elements["inputmm"];
    
    inch.value = Math.round((mm.value / 25.4) * 10000)/10000;
}