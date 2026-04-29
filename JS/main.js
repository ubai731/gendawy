document.getElementById("h1").innerHTML = "Welcome To Ubai Academy";

async function check_login() {
    let data = await fetch("../php/check_login.php");
    let res = await data.text();

    let btn_1 = document.getElementById("html");
    let btn_2 = document.getElementById("python");
    let btn_3 = document.getElementById("scratch");
    let btn1 = document.getElementById("center");
    let btn2 = document.getElementById("in");
    let btn3 = document.getElementById("up");
    let res1 = await fetch("../php/username.php");
    let data1 = await res1.text();

    if(res === "true"){
        console.log("User is Logged in");
        btn3.href = "#";
        btn3.innerHTML = data1;
        btn2.style.visibility = "hidden"
    }else{
        btn1.style.visibility = "hidden"
        btn_1.href = "gotologin.html";
        btn_2.href = "gotologin.html";
        btn_3.href = "gotologin.html";
    };
};

async function logout() {
    let res = await fetch("../php/logout.php");
    let data = await res.text();

    if (data === "done") {
        console.log("logout succesfully");
        window.location.reload();
    }
};

check_login();