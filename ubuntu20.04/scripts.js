function border(id) {

    if (document.getElementById(id).style.borderBottom === "") {
        document.getElementById(id).style.borderBottom = "solid aqua 2px"
    } else {
        document.getElementById(id).style.borderBottom = "";
    }
}

 function clock() {

    let today = new Date();
    let date = today.getDate();
    let months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
    let month = months[today.getMonth()]
    let hour = today.getHours();
    let minute= today.getMinutes();
    if (minute < 10) {minute = "0" + i};

    document.getElementById('clock').innerHTML = ` ${month} ${date}&nbsp;&nbsp; ${hour}:${minute}`;
    setTimeout(clock, 30000);

}
