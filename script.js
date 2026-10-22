
function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    const result = document.getElementById("result");

    if (!dobInput) {
        result.textContent = "Please select your date of birth.";
        return;
    }

    const dob = new Date(dobInput + "T00:00:00");
    const today = new Date();

    if (dob > today) {
        result.textContent = "Date of birth cannot be in the future.";
        return;
    }

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;

        const previousMonthDays = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days += previousMonthDays;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = `
        <h3>Your Age Is:</h3>
        <strong>${years}</strong> Years<br>
        <strong>${months}</strong> Months<br>
        <strong>${days}</strong> Days
    `;
}

