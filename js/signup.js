let formSignUp = document.getElementById('formSignUp')
formSignUp.addEventListener("submit", function(event) {
    
    event.preventDefault();

    let fullName = document.getElementById('YourName').value;
    let Username = document.getElementById('Username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let isExisting = users.some(user => user.email === email)
    
    if(isExisting) {
        alert("Email has been registered! Please enter another email ")
    } else  {
        users.push({fullName,Username,email,password,avatar:"https://cdn.dribbble.com/userupload/13395641/file/original-e3f3aadeee5438aaaf1369f815814271.png?resize=1504x1128"})
        
        localStorage.setItem("users", JSON.stringify(users))
        alert("Successful registration!!")
    
        window.location.href = '/signin.html'
       
    }
})
 