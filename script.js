function openPopup(day, content) {
    // Check if the clicked day is the current day
    var currentDate = new Date();
    var currentDay = currentDate.getDate();


    if (day <= currentDay) {
        // Get the popup element
        var popup = document.getElementById('popup');

        // Set the content of the popup
        popup.innerHTML = content;

        // Display the popup
        popup.style.display = 'block';

        // You can customize this function further, e.g., to close the popup after a certain time
    } else {
        alert("Ei vielä tänne hätähousu.");
    }
}
