


let code;


let FromSelectElement = document.getElementById("from");

for (each in countryList) {
    let op = document.createElement("option");
    op.innerText = each;
    FromSelectElement.appendChild(op)

}

let toSelectElement = document.getElementById("to");

for (each in countryList) {
    let op = document.createElement("option");
    op.innerText = each;
    toSelectElement.appendChild(op);
}



function getCountryCode(str) {
    let countryCode = document.getElementById(str).options;
    return countryCode[countryCode.selectedIndex].innerText.toLowerCase();
}




function changeFlag(event) {
    let flagCode = event.value;
    let code = countryList[flagCode];
    let flagURL = `https://flagsapi.com/${code}/flat/64.png`;


    event.parentElement.querySelector("img").src = flagURL;






}

FromSelectElement.addEventListener("change", (event) => {
    changeFlag(event.target);


});


toSelectElement.addEventListener("change", (event) => {
    changeFlag(event.target);


});



// let exchangeURL = "https://2024-03-06.currency-api.pages.dev/v1/currencies/eur.json"







let button = document.getElementById("get-exchange-rate");


async function getExchangeInfo(URL,fromCountryCode, toCountryCode){
    let response = await fetch(URL);
    let data = await response.json();
    let amount = document.getElementById("amount").value

    let finalAmount = Math.round(amount* data[fromCountryCode][toCountryCode] * 100)/100;

    document.getElementById("final-amount").innerText = `${amount} ${fromCountryCode.toUpperCase()} = ${finalAmount} ${toCountryCode.toUpperCase()}`;






}
function processExchange(){
    let exchangeURL = "https://2024-03-06.currency-api.pages.dev/v1/currencies/";
    let toCountryCode = getCountryCode("to");
    let fromCountryCode = getCountryCode("from");
    // console.log(`${toCountryCode}, ${fromCountryCode}`);
    let URL = `${exchangeURL}${fromCountryCode}.json`;
    getExchangeInfo(URL, fromCountryCode, toCountryCode);


}

button.addEventListener("click", (event) => {
    event.preventDefault();

    processExchange();

    



    

});


window.addEventListener("load", ()=> {
    processExchange();

})
