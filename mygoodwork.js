let bars = document.querySelector(".hamburger i");
let nav = document.querySelector(".menu-container");
let home = document.querySelector(".home")
let ticket = document.querySelector(".ticket")
let monthly = document.querySelector(".monthly")
let free = document.querySelector(".free")
let vip = document.querySelector(".vip")
let left = document.querySelector(".left-icon");
let right = document.querySelector(".right-icon");
 let viewMore = document.querySelector(".view-more")
 let containerElevenWrapper = document.querySelector(".container-eleven-wrapper")


bars.addEventListener("click", function () {
    if (bars.classList.contains("fa-bars")) {
        bars.classList.add("fa-times");

        bars.classList.remove("fa-bars");
        nav.style.height = "40px";


    } else {
        bars.classList.add("fa-bars");
        bars.classList.remove("fa-times");
        nav.style.height = "0";



    }
})
console.log(nav)

home.addEventListener("click", () => {
    home.style.color = "green";
    home.style.border = "1px solid green"
    ticket.style.color = "white";
    monthly.style.color = "white";
    free.style.color = "white"
    vip.style.color = "white"
})

ticket.addEventListener("click", () => {
    ticket.style.color = "green";
    home.style.color = "white"
    monthly.style.color = "white";
    free.style.color = "white"
    vip.style.color = "white"
})

monthly.addEventListener("click", () => {
    monthly.style.color = "green";
    ticket.style.color = "white";
    home.style.color = "white"
    free.style.color = "white"
    vip.style.color = "white"
})

free.addEventListener("click", () => {
    free.style.color = "green";
    // free.style.textDecoration ="underline";
    monthly.style.color = "white";
    ticket.style.color = "white";
    home.style.color = "white";
    vip.style.color = "white";
})

vip.addEventListener("click", () => {
    vip.style.color = "green"
    free.style.color = "white"
    monthly.style.color = "white";
    ticket.style.color = "white";
    home.style.color = "white"
})


let sliderIndex = 0;
plusSlides();
function plusSlides() {
    let table = document.getElementsByClassName("slider-container")

    for (let i = 0; i < table.length; i++) {
        table[i].style.display = "none";
    }
    sliderIndex++;
    if (sliderIndex > table.length) { sliderIndex = 1 };
    table[sliderIndex - 1].style.display = "block";
    setTimeout(plusSlides, 10000)
}


left.addEventListener("click", function () {
    let table = document.getElementsByClassName("slider-container");
    sliderIndex += 1;
    if (sliderIndex > table.length) {
        sliderIndex = 1
    }

    for (let index = 0; index < table.length; index++) {
        table[index].style.display = "none";
    }

    table[sliderIndex - 1].style.display = "block";
})

right.addEventListener("click", function () {
    let table = document.getElementsByClassName("slider-container");
    sliderIndex -= 1;

    if (sliderIndex < 1) {
        sliderIndex = table.length
    }
    for (let index = 0; index < table.length; index++) {
        table[index].style.display = "none";
        table[sliderIndex - 1].style.display = "block";
    }
})

var countDownDate = new Date("July 1, 2022 15:37:25").getTime();
var x = setInterval(() => {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("time-out").innerHTML = days + "d" + " " + hours + "h" + " " + minutes + "m" + " " + seconds + "s";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time-out").innerHTML = "Inplay";
    }
}, 1000);


var countDownDates = new Date("oct 5, 2022 15:37:25").getTime();
var x = setInterval(() => {
    var now = new Date().getTime();
    var distance = countDownDates - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("time-out-one").innerHTML = days + "d" + " " + hours + "h" + " " + minutes + "m" + " " + seconds + "s";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time-out-one").innerHTML = "Inplay";
    }
}, 1000);


var countDownDatesOne = new Date("July 1, 2022 15:37:25").getTime();
var x = setInterval(() => {
    var now = new Date().getTime();
    var distance = countDownDatesOne - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("time-out-three").innerHTML = days + "d" + " " + hours + "h" + " " + minutes + "m" + " " + seconds + "s";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time-out-three").innerHTML = "Inplay";
    }
}, 1000);

var countDownDatesTwo = new Date("July 1, 2022 15:37:25").getTime();
var x = setInterval(() => {
    var now = new Date().getTime();
    var distance = countDownDatesTwo - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("time-out-two").innerHTML = days + "d" + " " + hours + "h" + " " + minutes + "m" + " " + seconds + "s";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time-out-two").innerHTML = "Inplay";
    }
}, 1000);


var countDownDatesTwo = new Date("July 1, 2022 15:37:25").getTime();
var x = setInterval(() => {
    var now = new Date().getTime();
    var distance = countDownDatesTwo - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("time-out-three").innerHTML = days + "d" + " " + hours + "h" + " " + minutes + "m" + " " + seconds + "s";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time-out-three").innerHTML = "Inplay";
    }
}, 1000);


const ticketAchieved = [
    {
        home: "liverpool",
        away: "chelsea",
        pick: "1",
        odd: "2.00",
        result: "2-0",
        status: "won",
        date: "10-12-2022",
    },  
    { 
        home: "liverpool",
        away: "chelsea",
        pick: "1",
        odd: "2.00",
        result: "2-0",
        status: "won",
        date: "10-12-2022",
    },   
    {
        home: "liverpool",
        away: "chelsea",
        pick: "1",
        odd: "2.00",
        result: "2-0",
        status: "won",
        date: "10-12-2022",
    },
    {    
        home: "liverpool",
        away: "chelsea",
        pick: "1",
        odd: "2.00",
        result: "2-0",
        status: "won",
        date: "10-12-2022",
    },
    {
        home: "liverpool",
        away: "chelsea",
        pick: "1",
        odd: "2.00",
        result: "2-0",
        status: "won",
        date: "10-12-2022",
    },
    {   
        home: "liverpool",
        away: "chelsea",
        pick: "1",
        odd: "2.00",
        result: "2-0",
        status: "won",
        date: "10-12-2022",
    }
];

const ticketAchievedOne = [
    {
        home: "liverpool",
        away: "cheresea",
        pick: "1",
        odd: "2.00",
        result: "2-0",
        status: "won",
        date: "10-12-2022",
    },  
    { 
        home: "liverpool",
        away: "chelsea",
        pick: "1",
        odd: "2.00",
        result: "2-0",
        status: "won",
        date: "11-12-2022",
    },   
    {
        home: "liverpool",
        away: "chelsea",
        pick: "1",
        odd: "2.00",
        result: "2-0",
        status: "won",
        date: "12-12-2022",
    },
    {    
        home: "liverpool",
        away: "chelsea",
        pick: "1",
        odd: "2.00",
        result: "2-0",
        status: "won",
        date: "10-12-2022",
    },
    {
        home: "liverpool",
        away: "chelsea",
        pick: "1",
        odd: "2.00",
        result: "2-0",
        status: "won",
        date: "10-12-2022",
    },
    {   
        home: "liverpool",
        away: "chelsea",
        pick: "1",
        odd: "2.00",
        result: "2-0",
        status: "won",
        date: "10-12-2022",
    }
];

let tableData = ticketAchieved.map((table)=>{
    return `
    <div class="container-ten">
    <table>
        <caption>TOTAL ODD: 150</caption>
        <tr>
            <th>date</th>
            <th>home</th>
            <th>away</th>
            <th>pick</th>
            <th>odd</th>
            <th>result</th>
            <th>status</th>
        </tr>
        <tr>
            <td>${table.date}</td>
            <td>${table.home}</td>
            <td>${table.away}</td>
            <td>${table.pick}</td>
            <td>${table.odd}</td>
            <td>${table.result}</td>
            <td class="status-won">${table.status}</td>
        </tr>
        <tr>
            <td>${table.date}</td>
            <td>${table.home}</td>
            <td>${table.away}</td>
            <td>${table.pick}</td>
            <td>${table.odd}</td>
            <td>${table.result}</td>
        <td class="status-won">${table.status}</td>
        </tr>
        <tr>
            <td>${table.date}</td>
            <td>${table.home}</td>
            <td>${table.away}</td>
            <td>${table.pick}</td>
            <td>${table.odd}</td>
            <td>${table.result}</td>
            <td class="status-won">${table.status}</td>
        </tr>
        <tr>
            <td>${table.date}</td>
            <td>${table.home}</td>
            <td>${table.away}</td>
            <td>${table.pick}</td>
            <td>${table.odd}</td>
            <td>${table.result}</td>
            <td class="status-won">${table.status}</td>
        </tr>
    </table>
</div>
    `
})

let containerTenWrapper = document.querySelector(".container-ten-wrapper")
containerTenWrapper.innerHTML = `${tableData.join(" ")}`;


let tableDateOne = ticketAchievedOne.map((table)=>{
    return `
    <div class="container-ten">
    <table>
        <caption>TOTAL ODD: 150</caption>
        <tr>
            <th>date</th>
            <th>home</th>
            <th>away</th>
            <th>pick</th>
            <th>odd</th>
            <th>result</th>
            <th>status</th>
        </tr>
        <tr>
            <td>${table.date}</td>
            <td>${table.home}</td>
            <td>${table.away}</td>
            <td>${table.pick}</td>
            <td>${table.odd}</td>
            <td>${table.result}</td>
            <td class="status-won">${table.status}</td>
        </tr>
        <tr>
            <td>${table.date}</td>
            <td>${table.home}</td>
            <td>${table.away}</td>
            <td>${table.pick}</td>
            <td>${table.odd}</td>
            <td>${table.result}</td>
        <td class="status-won">${table.status}</td>
        </tr>
        <tr>
            <td>${table.date}</td>
            <td>${table.home}</td>
            <td>${table.away}</td>
            <td>${table.pick}</td>
            <td>${table.odd}</td>
            <td>${table.result}</td>
            <td class="status-won">${table.status}</td>
        </tr>
        <tr>
            <td>${table.date}</td>
            <td>${table.home}</td>
            <td>${table.away}</td>
            <td>${table.pick}</td>
            <td>${table.odd}</td>
            <td>${table.result}</td>
            <td class="status-won">${table.status}</td>
        </tr>
    </table>
</div>
    `
})

let containerTwelve = document.querySelector(".container-twelve-wrapper");
let containerTwelves = document.querySelector(".container-twelve");
containerTwelves.innerHTML = tableDateOne.join(" ");

viewMore.addEventListener("click", ()=>{
    containerTwelve.style.display = "block";
    containerElevenWrapper.style.display = "none";
})


const freeTicket = [
    {
        home: "liverpool",
        away: "chelsea",
        pick: "1",
        odd: "2.00",
        result: "2-0",
        status: "won",
        date: "10-12-2022",
    },  
    { 
        home: "liverpool",
        away: "chelsea",
        pick: "1",
        odd: "2.00",
        result: "2-0",
        status: "won",
        date: "10-12-2022",
    },   
    {
        home: "liverpool",
        away: "chelsea",
        pick: "1",
        odd: "2.00",
        result: "2-0",
        status: "won",
        date: "10-12-2022",
    },
    {    
        home: "liverpool",
        away: "chelsea",
        pick: "1",
        odd: "2.00",
        result: "2-0",
        status: "won",
        date: "10-12-2022",
    },
    {
        home: "liverpool",
        away: "chelsea",
        pick: "1",
        odd: "2.00",
        result: "2-0",
        status: "won",
        date: "10-12-2022",
    },
    {   
        home: "liverpool",
        away: "chelsea",
        pick: "1",
        odd: "2.00",
        result: "2-0",
        status: "won",
        date: "10-12-2022",
    }
];

let freeTicketDisplay = freeTicket.map((table)=>{
    return`
            <div class="free-tips-container">
                <table>
                    <caption>total 0dd: 3.50</caption>
                    <tr>
                        <th>date</th>
                        <th>home</th>
                        <th>away</th>
                        <th>pick</th>
                        <th>odd</th>
                        <th>result</th>
                        <th>status</th>
                    </tr>
                    <tr>
                        <td>${table.date}</td>
                        <td>${table.home}</td>
                        <td>${table.away}</td>
                        <td>${table.pick}</td>
                        <td>${table.odd}</td>
                        <td>${table.result}</td>
                        <td class="status-won">${table.status}</td>
                    </tr>
                    <tr>
                        <td>${table.date}</td>
                        <td>${table.home}</td>
                        <td>${table.away}</td>
                        <td>${table.pick}</td>
                        <td>${table.odd}</td>
                        <td>${table.result}</td>
                        <td class="status-won">${table.status}</td>
                    </tr>
                    <tr>
                        <td>${table.date}</td>
                        <td>${table.home}</td>
                        <td>${table.away}</td>
                        <td>${table.pick}</td>
                        <td>${table.odd}</td>
                        <td>${table.result}</td>
                        <td class="status-won">${table.status}</td>
                    </tr>
                </table>
            </div>
    `
})

let freeTicketDisplayTips = document.querySelector(".container-fifteen-table-wrapper");
freeTicketDisplayTips.innerHTML = freeTicketDisplay.join(" ");