
function MyClock() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    document.getElementById('js-clock').innerText = h + ':' + m + ':' + s;
   
}

setInterval( MyClock, 1000 );
//setTimeout( MyClock, 1000 );