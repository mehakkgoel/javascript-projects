const clock = document.querySelector('#clock');
let date = new Date();

setInterval(function()  {
    let date = new Date();
// console.log(date.toLocaleTimeString()); //in this the time will be shown when the site is run
// so we need something to constantly update the time that is set interval
//it updates it every second till site is open

clock.innerHTML = date.toLocaleTimeString();
}, 1000);
