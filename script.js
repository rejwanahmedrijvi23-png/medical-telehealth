
function handleRegister() {
    const name = document.getElementById("reg-name").value;
    const email = document.getElementById("reg-email").value;
    const phone = document.getElementById("reg-phone").value;
    const password = document.getElementById("reg-password").value;
    const terms = document.getElementById("reg-terms").checked;

    if (name === "" || email === "" || phone === "" || password === "") {
        alert("Please fill in all the details!");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long!");
        return;
    }

    if (!terms) {
        alert("Please agree to our Terms & Privacy Policy!");
        return;
    }

    alert("Registration Successful, " + name + "! Redirecting to Login...");
    window.location.href = "login.html"; 
}


function checkLogin() {
    const email = document.getElementById("login-email").value;
    const pass = document.getElementById("login-password").value;

    if (email !== "" && pass !== "") {
        alert("Login Successful! Redirecting to Dashboard...");
        window.location.href = "dashboard.html";
    } else {
        alert("Please enter both email and password!");
    }
}




function bookAppointment() {
    
    const dateInput = document.getElementById("appointment-date").value;

    if (dateInput === "") {
        alert("Please select a date first!");
    } else {
        
        alert("Success! Your appointment is booked for: " + dateInput);
        
        window.location.href = "dashboard.html";
    }
}

function startMeeting() {
    
    let ready = confirm("The doctor is waiting. Are you ready to join the video call?");
    
    if (ready) {
        
        alert("Connecting to Secure Server... Please wait.");
        
        
        setTimeout(function() {
            alert("Success! You are now in the meeting room with Dr. Sarah Ali.");
        }, 1500); 
    }
}



document.addEventListener('DOMContentLoaded', function() {
    
    const filterBtn = document.querySelector('button.apply-filters') || 
                      Array.from(document.querySelectorAll('button')).find(el => el.textContent.toLowerCase().includes('apply'));

    if (filterBtn) {
        filterBtn.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            
            alert("Filtering in progress... We are finding the best providers for your selection!");
            
            console.log("Filter action triggered on Providers page.");
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const sendBtn = Array.from(document.querySelectorAll('button')).find(el => el.textContent.trim() === 'Send Message');

    if (sendBtn) {
        sendBtn.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            
            const inputs = document.querySelectorAll('input, textarea');
            let allFilled = true;

            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    allFilled = false;
                }
            });

            if (allFilled) {
                alert("Thank you! Your message has been sent successfully.");
            } else {
                alert("Please fill in all the fields before sending your message.");
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const paginationButtons = document.querySelectorAll('.pagination a, .pagination button'); 
    
    paginationButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            alert("This is a demo version. More provider profiles will be available in the full release!");
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const updateBtn = Array.from(document.querySelectorAll('button')).find(el => el.textContent.includes('Update Profile'));

    if (updateBtn) {
        updateBtn.addEventListener('click', function(event) {
            event.preventDefault();
            alert("Profile updated successfully! Your changes have been saved.");
            console.log("Profile update triggered.");
        });
    }
});