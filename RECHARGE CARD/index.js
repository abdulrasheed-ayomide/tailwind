// GENERATE RANDOM NUMBER FOR RECHARGE CARD
let generateInput = document.getElementById('generateInp');
const generateNumber = () => {
    // alert("Code Generated successfully✅");
    let randomNum = Math.trunc(Math.random() * 12345678910114);
    generateInput.value = randomNum;
    // console.log(randomNum);

};

document.getElementById('generateBtn').addEventListener('click', generateNumber);

// empty array to store recharge cards
let rechargeCards = [];
let displayData = document.getElementById("display");
console.log(rechargeCards);

// RECHARGE PIN
const networkPins = {
    mtn: "*555*",
    "9mobile": "*313*",
    airtel: "*126*",
    glo: "*123*"
};


let network = document.getElementById("network");
let amount = document.getElementById("amount");

let saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", function () {
    // alert("Recharge Card Saved Successfully")

    let userNetwork = network.value;
    let userAmount = amount.value;
    let code = generateInput.value;
    let rechargePin = networkPins[network.value];
    let allCode = `${rechargePin}${code}#`;

    let allData = {
        network: userNetwork,
        amount: userAmount,
        rechargePin: rechargePin,
        fullCode: allCode,
        status: "unused",
        dateCreated: new Date().toLocaleString(),
        dateUsed: null
    }

    rechargeCards.push(allData);
    loopAllData()

    network.value = "";
    amount.value = "";
    generateInp.value = "";

})

function loopAllData() {
    displayData.innerHTML = ""; // clear before looping

    rechargeCards.forEach((perCard, index) => {
        displayData.innerHTML += `
        <tr class="border-b border-default hover:bg-neutral-secondary-soft transition">
            <td class="px-3 sm:px-6 py-2 sm:py-3">${index + 1}</td>
            <td class="px-3 sm:px-6 py-2 sm:py-3">${perCard.network}</td>
            <td class="px-3 sm:px-6 py-2 sm:py-3">${perCard.amount}</td>
            <td class="px-3 sm:px-6 py-2 sm:py-3">${perCard.rechargePin}</td>
            <td class="px-3 sm:px-6 py-2 sm:py-3">${perCard.fullCode}</td>
            <td class="px-3 sm:px-6 py-2 sm:py-3">
                <span class="px-2 py-1 rounded text-xs font-semibold
                    ${perCard.status === 'Used' 
                        ? 'bg-red-100 text-red-600' 
                        : 'bg-green-100 text-green-600'}">
                    ${perCard.status}
                </span>
            </td>
            <td class="px-3 sm:px-6 py-2 sm:py-3">${perCard.dateCreated}</td>
            <td class="px-3 sm:px-6 py-2 sm:py-3">${perCard.dateUsed || '-'}</td>
            <td class="px-3 sm:px-6 py-2 sm:py-3">
                <button class="border text-red-600 hover:underline text-xs" onclick="deleteBtn(${index})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });
}

function deleteBtn(i) {
    rechargeCards.splice(i, 1);
    loopAllData()
}

// RECHARGE CODE FUNCTION
let rechargePins = document.getElementById("rechargepin");
let rechargeCodeBtn = document.getElementById("rechargeBtn");

rechargeCodeBtn.addEventListener("click", function(){
let rechargeCodeInp = rechargePins.value;
alert("Code Recharged successfully✅ " + rechargeCodeInp)

})
