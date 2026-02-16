document.addEventListener("DOMContentLoaded", () => {
    const formup = document.getElementById("Signup");
    const formin = document.querySelector(".sign-in");
    const passwordInput = document.getElementById("floatinginput-password-1");
    const togglePassword = document.getElementById("togglePassword");
   


    if (passwordInput && togglePassword) {
        togglePassword.addEventListener("click", () => {

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                togglePassword.classList.replace("bi-eye", "bi-eye-slash");
            } else {
                passwordInput.type = "password";
                togglePassword.classList.replace("bi-eye-slash", "bi-eye");
            }

        })
    }


    if (formup) {
        formup.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("floatinginput-name").value.trim();
            const Email1 = document.getElementById("floatinginput-email-1").value.trim();
            const Pw1 = passwordInput.value.trim();
            const userError = document.getElementById("userError");
            const emailError = document.getElementById("emailError");
            const passwordError = document.getElementById("passwordError");


            // Regex pattern(regular expressions pattern form)
            const namepattern = /^[A-Za-z ]{3,}$/;
            //  dhaks.uma@gamil.com
            const emailpattern = /^[A-Za-z0-9._%-+]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            //  passwordpattern
            const passwordpattern = /^[a-zA-Z0-9@$&*]{5,}$/;



            let isValid = true;

            if (!namepattern.test(name)) {
                userError.textContent = "invalid Username";
                isValid = false;

            }
            else {
                userError.textContent = "";
            }

            if (!emailpattern.test(Email1)) {
                emailError.textContent = "invalid Email Id";
                isValid = false;


            }
            else {
                emailError.textContent = "";
            }

            if (!passwordpattern.test(Pw1)) {
                passwordError.textContent = "invalid password pattern";
                isValid = false;


            }
            else {
                passwordError.textContent = "";
            }

            if (isValid) {

                localStorage.setItem("userEmail",Email1);
                localStorage.setItem("userPassword",Pw1);
                formup.reset();
            
                window.location.href = "login.html";
            }
           
        })
    }

    if (formin) {

        formin.addEventListener("submit", (e) => {
            e.preventDefault();

               console.log("Login submit triggered");
            const email = document.getElementById("floatinginput-email-2").value.trim();
            const password = document.getElementById("floatinginput-password-2").value.trim();
            const storedEmail = localStorage.getItem("userEmail");
            const storedPassword = localStorage.getItem("userPassword");
            

            
            if (!storedEmail || !storedPassword) {
                alert("No account found. Please signup first.");
                return;
            }

            if (email === storedEmail && password === storedPassword) {
                alert("Login Successful");
                formin.reset();
            window.location.href = "https://dhakshayani-manohar.github.io/api-fetch-assignment/";
            } else {
                alert("Invalid Credentials");
            }
             
            
        })
    }

})
