// ================= EVENT APPLICATION FORM =================

// Get the form
const eventForm = document.getElementById("eventForm");

// Get message area
const message = document.getElementById("message");

// Get phone input
const phoneInput = document.getElementById("phone");

// Get team name input
const teamName = document.getElementById("teamName");


// ================= PHONE NUMBER VALIDATION =================

phoneInput.addEventListener("input", function () {

    // Allow only numbers
    this.value = this.value.replace(/[^0-9]/g, "");

});


// ================= FORM SUBMISSION =================

eventForm.addEventListener("submit", function (event) {

    // Stop the page from refreshing
    event.preventDefault();


    // Get form values
    const fullName = document.getElementById("fullName").value.trim();

    const studentId = document.getElementById("studentId").value.trim();

    const course = document.getElementById("course").value;

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const selectedEvent = document.getElementById("event").value;

    const participation =
        document.querySelector(
            'input[name="participation"]:checked'
        );

    const interest =
        document.getElementById("interest").value.trim();

    const terms =
        document.getElementById("terms").checked;


    // ================= BASIC VALIDATION =================

    if (fullName.length < 3) {

        showError("Please enter a valid full name.");

        return;
    }


    if (studentId.length < 4) {

        showError("Please enter a valid Student ID.");

        return;
    }


    if (course === "") {

        showError("Please select your course.");

        return;
    }


    // ================= EMAIL VALIDATION =================

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        showError("Please enter a valid email address.");

        return;
    }


    // ================= PHONE VALIDATION =================

    if (phone.length !== 10) {

        showError("Phone number must contain exactly 10 digits.");

        return;
    }


    // ================= EVENT VALIDATION =================

    if (selectedEvent === "") {

        showError("Please select an event.");

        return;
    }


    // ================= PARTICIPATION VALIDATION =================

    if (!participation) {

        showError("Please select your participation type.");

        return;
    }


    // ================= TEAM VALIDATION =================

    if (
        participation.value === "Team" &&
        teamName.value.trim() === ""
    ) {

        showError("Please enter your team name.");

        return;
    }


    // ================= INTEREST VALIDATION =================

    if (interest.length < 10) {

        showError(
            "Please provide at least 10 characters explaining your interest."
        );

        return;
    }


    // ================= TERMS VALIDATION =================

    if (!terms) {

        showError(
            "Please confirm that the information provided is correct."
        );

        return;
    }


    // ================= SUCCESS =================

    message.textContent =
        "✓ Application submitted successfully!";

    message.style.backgroundColor = "#E8F5E9";
    message.style.color = "#2E7D32";

    message.style.border =
        "1px solid #2E7D32";


    // Show submitted information in console
    console.log("Event Application Submitted");

    console.log("Name:", fullName);
    console.log("Student ID:", studentId);
    console.log("Course:", course);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Event:", selectedEvent);
    console.log(
        "Participation:",
        participation.value
    );


    // Reset form after successful submission
    setTimeout(function () {

        eventForm.reset();

    }, 1500);

});


// ================= ERROR FUNCTION =================

function showError(errorMessage) {

    message.textContent = "✕ " + errorMessage;

    message.style.backgroundColor = "#FFEBEE";

    message.style.color = "#C62828";

    message.style.border =
        "1px solid #C62828";
}


// ================= RESET MESSAGE =================

eventForm.addEventListener("reset", function () {

    message.textContent = "";

    message.style.backgroundColor = "";

    message.style.color = "";

    message.style.border = "";

});