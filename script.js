const on = document.querySelector("#on");
    const off = document.querySelector("#off");
    function bulb_on(){
        document.getElementById('bulb').src='https://i.postimg.cc/6QyTynzr/bulb-on.png';
    }
    function bulb_off(){
        document.getElementById('bulb').src='https://i.postimg.cc/KjK1wL3c/bulb-off.png';
    }
 
    on.addEventListener('click',bulb_on);
    off.addEventListener('click',bulb_off);
