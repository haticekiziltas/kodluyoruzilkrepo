let isim = prompt("Lütfen isminizi girin: ");
document.querySelector("#myName").innerHTML = isim;

function showTime() {
    const date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let day = date.getDay()


    switch (day) {
        case 1:
            day = "Pazartesi"
            break;
        case 2:
            day = "Salı"
            break;
        case 3:
            day = "Çarşamba"
            break;
        case 4:
            day = "Perşembe"
            break;
        case 5:
            day = "Cuma"
            break;
        case 6:
            day = "Cumartesi"
            break;
        default:
            day = "Pazar"
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds + " "+ day;
    document.querySelector("#myClock").innerHTML = time;
    document.querySelector("#myClock").textContent = time;
    setTimeout(showTime,1000);
}

showTime();
