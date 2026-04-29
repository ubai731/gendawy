document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let formData = new FormData(this);

    fetch("php/connection.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.text())
    .then(data => {
        console.log(data);
        document.getElementById("result").innerText = data;
        setTimeout(function(e) {
            // ✅ فقط إذا نجح
            if (data.includes("Account Created")) {
                window.location.href = '../index.html';
            }
        }, 2000)
    })
    .catch(err => {
        console.log("ERROR:", err);
    });
});