document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.querySelector(".login-form");

    loginForm.addEventListener("submit", function (event) {

        const studentId = document.querySelector('input[name="studentid"]').value.trim();
        const password = document.querySelector('input[name="password"]').value;

        // Student ID validation
        if (studentId === "") {
            alert("Please enter your Student ID.");
            event.preventDefault();
            return;
        }

        // Password must be exactly 6 characters
        if (password.length !== 6) {
            alert("Password must be exactly 6 characters long.");
            event.preventDefault();
            return;
        }

        // Password must contain at least one letter
        if (!/[A-Za-z]/.test(password)) {
            alert("Password must contain at least one letter.");
            event.preventDefault();
            return;
        }

        // Password must contain at least one number
        if (!/[0-9]/.test(password)) {
            alert("Password must contain at least one number.");
            event.preventDefault();
            return;
        }

        // Password should contain only letters and numbers
        if (!/^[A-Za-z0-9]+$/.test(password)) {
            alert("Password can contain only letters and numbers.");
            event.preventDefault();
            return;
        }

        // Login successful
        alert("Login successful! Redirecting to dashboard...");

    });
    

    });

});

});

});