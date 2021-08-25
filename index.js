import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

document.querySelector(".button-1").onclick = click;

let travel = [
    { time: 26, city: "Minsk", cost: 10000 },
    { time: 27, city: "Moskva", cost: 11000 },
    { time: 28, city: "St. Petersburg", cost: 12000 },
    { time: 29, city: "Kazan", cost: 13000 },
    { time: 30, city: "Novosibirsk", cost: 14000 },
    { time: 31, city: "Sochi", cost: 15000 }
];

function click() {
    let name = document.querySelector(".i-1").value;
    let city = document.querySelector(".i-2").value;
    let time = document.querySelector(".i-3").value;

    const adults = travel.filter((item) => {
        if (item.time == time && item.city == city) {
            return true;
        }
        return false;
    });
    const closest = travel.reduce((prev, curr) => {
        return Math.abs(curr - time) < Math.abs(prev - time) ? curr : prev;
    });

    if (adults.length === 0) {
        document.querySelector(".out-1").textContent =
            "На это время нету такого тура.Вот ближайший следущий тур в этот время.";
        document.querySelector(".out-2").textContent = closest.city;
        document.querySelector(".out-3").textContent = closest.time;
        document.querySelector(".out-4").textContent = closest.cost;
    }
    if (adults.length === 1) {
        document.querySelector(".out-1").textContent =
            "Да, на это число есть такой город. Вот его стоймость. ";
        document.querySelector(".out-2").textContent = adults[0].cost;
    }
}