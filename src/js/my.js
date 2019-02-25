function bg(e) {
    document.getElementById('bg').style.backgroundImage = "";
    if (e == 1) {
        document.getElementById('bg').style.backgroundImage = "url('https://api.ixiaowai.cn/api/api.php')";
    }
    if (e == 2) {
        document.getElementById('bg').style.backgroundImage = "url('https://api.ixiaowai.cn/mcapi/mcapi.php')";
    }
    if (e == 3) {
        document.getElementById('bg').style.backgroundImage = "url('http://api.805ds.com/dmapi/api.php')";
    }
    
}
