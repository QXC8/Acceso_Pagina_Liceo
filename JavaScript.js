const username = document.getElementById("username")
const password = document.getElementById("password")
const button = document.getElementById("button")

const CorrectUsername = "Admin"
const CorrectPassword = "123"

button.addEventListener("click", (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value 
    }
    console.log(data)
})

button.addEventListener("click", (e) => {

if (username.value === CorrectUsername && password.value === CorrectPassword) {
    window.location.href = "https://liceomartadonoso.cl";
} else {
    alert("Usuario o contraseña incorrectos");
}

});


