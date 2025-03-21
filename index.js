const URL = "http://api.weatherapi.com/v1/current.json?key=ac893f61324343e5923105704251903&q=London&aqi=yes";

const btn = document.querySelector("button");
const msg = document.querySelector(".msg");

const facts = async () => {
    let promise = await fetch(URL);  // Fetch API data
    console.log(promise);  // Logs Response object

    let data = await promise.json(); // Convert to JSON
    console.log(data);  // Logs full JSON data

    msg.innerText = data.current.condition.text; // Display weather condition
};

btn.addEventListener("click", facts);
