document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    fetch("php/check.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `username=${username}&email=${email}&password=${password}`
    })
    .then(res => res.text())
    .then(data => {
        console.log(data);
        document.getElementById("msg").innerText = data;
    setTimeout(function(e) {
        // ✅ فقط إذا نجح
        if (data.includes("Login Success")) {
            window.location.href = '../index.html';
        }
    }, 2000)
    
    });
});