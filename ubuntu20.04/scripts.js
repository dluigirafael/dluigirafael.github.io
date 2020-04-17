function border(id) {


    if (document.getElementById(id).style.borderBottom === "") {
        document.getElementById(id).style.borderBottom = "solid #FF4623 2.5px"
    } else {
        document.getElementById(id).style.borderBottom = "";
    }

    if (id === "clock") {
        document.getElementById("status").style.borderBottom = "";
    }
    if (id === "status") {
        document.getElementById("clock").style.borderBottom = "";
    }

}


function clock() {

    let today = new Date();
    let date = today.getDate();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November ", "December "];
    let month = months[today.getMonth()]
    let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", ]
    let day = weekdays[today.getDay() - 1]
    let year = today.getFullYear()
    let hour = today.getHours();
    let minute = today.getMinutes();
    if (minute < 10) {
        minute = "0" + minute
    };

    document.getElementById('time').innerHTML = ` ${month.substr(0, 3)} ${date}&nbsp;&nbsp; ${hour}:${minute}`;
    document.getElementById('day').innerHTML = day;
    document.getElementById('month').innerHTML = `${month} ${date} ${year}`

    setTimeout(clock, 30000);


}

function show(id, display) {

    if (document.getElementById(id).style.display === "") {
        document.getElementById(id).style.display = display;
    } else {
        document.getElementById(id).style.display = "";
    }

    if (id == "arrow1") {
        document.getElementById("arrow2").style.display = "";
        document.getElementById("powerOptions").style.display = "";
    }

    if (id == "arrow2") {
        document.getElementById("arrow1").style.display = "";
        document.getElementById("notifications").style.display = "";
    }
}

function expand() {
    if (document.getElementById("powerOptions").style.height == "30%") {
        document.getElementById("powerOptions").style.height = "";
        document.getElementById("networkSettings").style.display = "";
        
    } else {
        document.getElementById("powerOptions").style.height = "30%";
        document.getElementById("networkSettings").style.display = "block";
        document.getElementById("powerSettings").style.display = "";
        
        
    }
}

function expandPower(){
    if (document.getElementById("powerSettings").style.display == ""){

        document.getElementById("powerSettings").style.display = "block";
        document.getElementById("powerOptions").style.height = "";
        document.getElementById("networkSettings").style.display = "";
        
        
    }
    else{
        document.getElementById("powerSettings").style.display = "";
    }

        
}



function arrowRotate(id,moving) {
    let arrow = document.getElementById(id);
    let status = window.getComputedStyle(document.getElementById(moving)).getPropertyValue('display')

    if (status == "block") {
        arrow.style.borderColor = "#ffffff transparent transparent transparent";
        arrow.style.borderWidth = " 8.7px 5px 0 5px";

    } else {
        arrow.style.borderWidth = "5px 0 5px 8.7px";
        arrow.style.borderColor = "transparent transparent transparent #ffffff";
    }
  

}

function offline() {
    let target = document.getElementsByClassName("offline");
    let status = target[0].src;


    if (status.includes("wired")) {
        target[0].src = "./img/network-offline-symbolic.svg";
        target[1].src = "./img/network-offline-symbolic.svg";
        document.getElementById("networkText").innerHTML =" Wired Off"
       
    } else {
       
        target[0].src = "./img/network-wired-symbolic.svg";
        target[1].src = "./img/network-wired-symbolic.svg";
        document.getElementById("networkText").innerHTML =" Wired Connected"
    }

}
