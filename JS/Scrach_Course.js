async function check_login() {
    let data = await fetch("../php/check_login.php");
    let res = await data.text();

    let btn1 = document.getElementById("center");
    let btn2 = document.getElementById("in");
    let btn3 = document.getElementById("up");
    let res1 = await fetch("../php/username.php");
    let data1 = await res1.text();

    if(res === "true"){
        console.log("User is Logged in");
        btn3.href = "#";
        btn3.innerHTML = data1;
        btn2.style.visibility = "hidden";
    }else{
        console.log("User is Loggen out");
        btn1.style.visibility = "hidden";
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