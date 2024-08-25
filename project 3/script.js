let countdownInterval;
let targetDate;

function startTimer() {
    clearInterval(countdownInterval);
    const datetimeInput = document.getElementById('datetime-input');
    targetDate = new Date(datetimeInput.value).getTime();

    if (isNaN(targetDate)) {
        alert('Please enter a valid date and time.');
        return;
    }

    countdownInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('timer').innerHTML = "EXPIRED";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}