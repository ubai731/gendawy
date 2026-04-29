var c = document.getElementById("c");
// if you want to print something on the screen type println("your text");
function println(x) {
    document.writeln(x);
}
function print(x){
     document.write(x);
}
function game(count) {
    var count = Number(document.getElementById("stcu").value);
    count++;
    if (count == 1) {
        c.innerHTML = "You Clicked Me" + count + " Time";
    } else {
        c.innerHTML = "You Clicked Me " + count + " Times";
    }
    document.getElementById("stcu").value = count;
};  

function secretvis() {
    document.getElementById("cha").classList.add("cha");
}

function clch() {
    document.getElementById("stcu").classList.add("mm");
    document.getElementById("l").classList.add("mm");
    document.getElementById("i").classList.add("mm");
    document.getElementById("c").classList.add("mm");
    document.getElementById("bh").classList.add("mm");
    document.getElementById("gu").remove();
    document.getElementById("e").remove();
    document.getElementById("cha").remove();
}
function che() {
    document.getElementById("cha").classList.add("cho");
}
function chh() {
    var bh = document.getElementById("bh");
    bh.innerHTML = "tara tata";
    bh.style.color = "navy";
}
function chi() {
    var bh = document.getElementById("bh");
    bh.innerHTML = "...???";
    bh.style.color = "black";
}
const mu = document.getElementById("mumo");
let isDraging = false;
mu.addEventListener("mousedown", ()=> {
    isDraging = true;
});
document.addEventListener("mouseup", ()=> {
    isDraging = false;
});
document.addEventListener("mousemove", (e)=> {
    if (isDraging == true) {
        mu.style.left = e.clientX + "px";
        mu.style.top = e.clientY + "px";
    }
});
function showresult() {
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    var result = n1 + n2;
    alert("The Result is: " + result);
}
function forlop() 
{
    var stnu = Number(document.getElementById("stnu").value);
    var cunu = Number(document.getElementById("cunu").value);
    var x;
    var zero = 0;
    var jpnu = Number(document.getElementById("jpnu").value);
    var cu = 0;
    var prosec = 2500;
    try {
        for (x=stnu;x<=cunu;x+=jpnu) {
            console.log("The Number is: " + x);
            cu += 1;
            if (cu == 1000 && x == zero){
                console.log("Alert Entered In Infinite Loop Entring Protection Loop In You Entred Seconds !!!");
                setTimeout(() => {
                    console.log("Protection Loop Activated");
                    console.log("Exited The Loop");
                }, prosec);
                break;
            }
        }
    }
    catch (err) {
        document.getElementById("errshow").innerHTML = "A Main Protection Loop Have Error: " + err;
        if (cu == 1000 && x == zero){
            console.log("Alert Entered In Infinite Loop Entring Protection Loop In You Entred Seconds !!!");
            setTimeout(() => {
                console.log("Protection Loop Activated");
                console.log("Exited The Loop");
            }, prosec);
        }else{
            console.log("The Main Protection Loop Failed To Work runing Backup Protection Now !!!");
            console.log("Backup Protection Loop Failed To Work Close This Tab Now !!! or your divice will crash");
        }
    }
    finally {
        
    }
}
function picdate() {
    var dt = new Date();
    println("The Date Is: "+dt);
}
function addelement() {
    var e1 = document.createElement("h1");
    document.getElementById("i").appendChild(e1);
    e1.innerHTML = "See I am added by JS (JavaScript) Sooooo Click Me To Remove Me !!!";
    e1.onclick = () => {
        e1.remove();
    }
}
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

check_login();