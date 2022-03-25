let name = '';
let value = '';

let city = document.getElementById("cityList");
city.addEventListener('change', () => {
    value = city.value;

    getText();

});

function getText() {
    const options = document.querySelectorAll('option');
    let selectedIndex = city.selectedIndex;

    Array.from(options).forEach((element, index) => {
        if (index == selectedIndex) {
            name = element.innerText;
        }
    })
}


let time;
let hours;
let mins, seconds;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {



    time = convertTZ(name == '' ? 'Bombay' : name, value == '' ? '+5.5' : value);
    let dateTime = time.split(',');

    let dateArray = dateTime[0].split('/');
    document.getElementById('month').innerText = dateArray[0] < 10 ? '0' + dateArray[0] : dateArray[0];
    document.getElementById('date').innerText = dateArray[1] < 10 ? '0' + dateArray[1] : dateArray[1];
    document.getElementById('year').innerText = dateArray[2]
    let timeArray = dateTime[1].split(':');
    console.log(dateTime[1]);
    console.log(timeArray);
    document.getElementById('hrs').innerText = timeArray[0]
    document.getElementById('mins').innerText = timeArray[1]
    document.getElementById('sec').innerText = timeArray[2].split(' ')[0];
    document.getElementById('AP').innerText = timeArray[2].split(' ')[1];

    let utcDate = new Date();
    var utcHrs = utcDate.getUTCHours() == 0 ? 12 : (utcDate.getUTCHours() > 12 ? utcDate.getUTCHours() - 12 : utcDate.getUTCHours());
    var utcMins = utcDate.getUTCMinutes() < 10 ? '0' + utcDate.getUTCMinutes() : utcDate.getUTCMinutes();
    var utcSec = utcDate.getUTCSeconds() < 10 ? '0' + utcDate.getUTCSeconds() : utcDate.getUTCSeconds();
    var utcAP = utcDate.getUTCHours() < 12 ? 'AM' : 'PM';

    document.getElementById('utcHrs').innerText = utcHrs;
    document.getElementById('utcMins').innerText = utcMins;
    document.getElementById('utcSecs').innerText = utcSec;
    document.getElementById('utcAP').innerText = utcAP;
}, 1000)

function convertTZ(city, offset) {
    // console.log( offset);
    document.getElementById('currentCity').innerHTML = `<b>${city}</b>`;
    //get current date object
    let date = new Date();

    //get utc time by adding local timezone offset in msec

    let utc = date.getTime() + (date.getTimezoneOffset() * 60000);

    //create new date object for different city using supplied offset

    let newDate = new Date(utc + (3600000 * offset));
    //console.log(3600000 * offset);
    return newDate.toLocaleString();

}







