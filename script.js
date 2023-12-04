
function highlightCurrentDate() {
    var currentDate = new Date();
    var currentDay = currentDate.getDate();

    var allDays = document.getElementsByClassName('day');
    for (var i = 0; i < allDays.length; i++) {
        if (parseInt(allDays[i].innerText) === currentDay) {
            allDays[i].classList.add('highlighted');
        }
    }
}


function openPopup(day, content) {

    var currentDate = new Date();
    var currentDay = currentDate.getDate();

    if (day <= currentDay) {

        var popup = document.getElementById('popup');


        popup.innerHTML = content;


        popup.style.display = 'block';

        setTimeout(function () {
            popup.style.display = 'none';
        }, 4000);

    } else {
        alert("Ei vielä tänne hätähousu.");
    }
}


window.onload = function () {
    highlightCurrentDate();
};
