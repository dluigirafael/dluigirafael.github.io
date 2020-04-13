function border(id) {

    if (document.getElementById(id).style.borderBottom === "") {
        document.getElementById(id).style.borderBottom = "solid aqua 2px"
    }
    else{
    document.getElementById(id).style.borderBottom = "";
    }
}

