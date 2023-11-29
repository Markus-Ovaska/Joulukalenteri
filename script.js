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

//let today = new Date();
//let today1 = today.getDate();



document.addEventListener("DOMContentLoaded", function() {
    var today = new Date();
    var dayOfWeek = today.getDay();
    var table = document.getElementById("table"); 

    // Assuming your table has a consistent structure, you may need to adjust this loop
    for (var i = 0; i < table.rows.length; i++) {
      var row = table.rows[i];
      var cell = row.cells[dayOfWeek];

      if (cell) {
        cell.classList.add("current-day");
      }
    }
  }
  );