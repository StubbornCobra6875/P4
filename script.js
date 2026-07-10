// Mobile Menu Toggle

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// Dynamic Greeting

const greeting = document.getElementById("greeting");

if(greeting){
    const hour = new Date().getHours();

    if(hour < 12){
        greeting.textContent = "Good Morning!";
    }
    else if(hour < 18){
        greeting.textContent = "Good Afternoon!";
    }
    else{
        greeting.textContent = "Good Evening!";
    }
}

// Date & Time

const dateTime = document.getElementById("datetime");

if(dateTime){
    setInterval(() => {
        dateTime.textContent = new Date().toLocaleString();
    }, 1000);
}

// Contact Form Validation

const form = document.getElementById("contactForm");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const output = document.getElementById("formMessage");

        if(name === "" || email === "" || message === ""){
            output.textContent = "Please fill in all fields.";
            output.style.color = "red";
            return;
        }

        output.textContent = "Form submitted successfully!";
        output.style.color = "green";

        form.reset();
    });

}