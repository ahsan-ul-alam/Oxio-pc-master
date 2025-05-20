// Hero Timer Start Here 
// Set initial time in seconds (10 hours)
    let totalSeconds = 10 * 60 * 60;

    function updateCountdown() {
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;

        // Update HTML elements
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

        if (totalSeconds > 0) {
            totalSeconds--;
        } else {
            clearInterval(timerInterval);
        }
    }

    // Call initially and then every 1 second
    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);

