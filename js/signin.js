let formSignIn = document.getElementById('formSignIn')

formSignIn.addEventListener("submit", function(event) {
    
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let auth = users.some(user => user.email === email && user.password === password)
    
    if(auth) {
        
        let currentuser = users.find((user)=> user.email === email && user.password === password)
        localStorage.setItem("currentuser",JSON.stringify(currentuser))
        alert("Successful registration!!")
        window.location.href = 'cycle.html'
    } else  {
        
    alert("Please re-enter your email and password") 
       

    } 
})
