  // Function to calculate and display remaining time
  function updateCountdown() {
    var endDate = new Date("March 25, 2024 00:00:00"); // Target date
    var now = new Date(); // Current date and time
    var timeDiff = endDate.getTime() - now.getTime(); // Time difference in milliseconds

    if (timeDiff <= 0) {
      document.getElementById('countdown').innerHTML = "Countdown expired";
      return;
    }

    // Calculate remaining days, hours, minutes, and seconds
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Display remaining time in the HTML element
    document.getElementById('countdown').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // Update the countdown every second
    setTimeout(updateCountdown, 1000);
  }

  // Call the function to start the countdown
  updateCountdown();