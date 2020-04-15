function border(id) {


    if (document.getElementById(id).style.borderBottom === "") {
        document.getElementById(id).style.borderBottom = "solid #FF4623 2.5px"
    } else {
        document.getElementById(id).style.borderBottom = "";
    }

   if(id==="clock")
   {
    document.getElementById("status").style.borderBottom = "";
   }
   if(id==="status")
   {
    document.getElementById("clock").style.borderBottom = "";
   }
   
}


function clock() {

    let today = new Date();
    let date = today.getDate();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November ", "December "];
    let month = months[today.getMonth()]
    let weekdays=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",]
    let day = weekdays[today.getDay() -1]
    let year = today.getFullYear()
    let hour = today.getHours();
    let minute = today.getMinutes();
    if (minute < 10) {
        minute = "0" + minute
    };

    document.getElementById('time').innerHTML = ` ${month.substr(0, 3)} ${date}&nbsp;&nbsp; ${hour}:${minute}`;
    document.getElementById('day').innerHTML  = day;
    document.getElementById('month').innerHTML  = `${month} ${date} ${year}`

    setTimeout(clock, 30000);


}

function show(id , display) {
    
    if (document.getElementById(id).style.display === "") {
        document.getElementById(id).style.display = display;
    } else {
        document.getElementById(id).style.display = "";
    }
    
    if(id =="arrow1")
        {
            document.getElementById("arrow2").style.display = "";
            document.getElementById("powerOptions").style.display = "";
        }
    
     if(id =="arrow2")
        {
            document.getElementById("arrow1").style.display = "";
            document.getElementById("notifications").style.display = "";
        }
}

