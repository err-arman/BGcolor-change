// /*
//     Genarate for RGB Color
// */
// window.onload = () => {
// main();
// };
// let output = document.getElementById('output')
// function main() {
// let root = document.getElementById("root");
// let btn = document.getElementById("button");

// btn.addEventListener("click", function () {
//     let bg = genarateRGBcolor();
//       root.style.background = bg;
//       output.value = bg;
// });
// }

// function genarateRGBcolor() {
// let x = Math.floor(Math.random() * 255 + 1);
// let y = Math.floor(Math.random() * 255 + 1);
// let z = Math.floor(Math.random() * 255 + 1);
// return `rgb(${x}, ${y}, ${z})`;
// }

// genarateRGBcolor();


// Genarate for HEXADECIMAL COLOR


// window.onload = () => {
//     main()
// }
// let output = document.getElementById('output')
// function main() {
//     let roottwo = document.getElementById('root');
//     let btn = document.getElementById('button');
//     let copyBtn = document.getElementById('copy-btn');
//     btn.addEventListener('click', function () {
//         let bg = genarateHexaColor();
//         roottwo.style.background = bg;
//         output.value = bg
//     })
//     copyBtn.addEventListener('click', function () {
//         navigator.clipboard.writeText(output.value);
//         showCopyItem(output.value)
//     })
// }


// function genarateHexaColor() {
//     let a = Math.floor(Math.random() * 255 + 1);
//     let b = Math.floor(Math.random() * 255 + 1);
//     let c = Math.floor(Math.random() * 255 + 1);
//     return `#${a.toString(16)}${b.toString(16)}${c.toString(16)}`
// }
// genarateHexaColor();

// copy the color code


// function showCopyItem(msg) {
//     let div = document.createElement('div');
//     div.innerHTML = msg;
//     div.className = 'test';

//     document.body.appendChild(div);
// }


// Genarate RGB color....


// All variables in therer...
let root = document.getElementById('root');
let randomColorBtn = document.getElementById('random-color-btn');
let outputColorCode = document.getElementById('output');
let copybtn = document.getElementById('copy-btn');
let storeDataInLocalStorage = [];
let getData = localStorage.getItem('RGB_COLORS');

if (getData) {
    storeDataInLocalStorage = JSON.parse(getData);
    storeDataInLocalStorage.forEach(showCopyCode)
}


// Random color Show in ROOT backgound
randomColorBtn.addEventListener('click', function () {
    let colorCode = genarateRGBcolor();
    outputColorCode.value = colorCode;
    root.style.backgroundColor = colorCode;

})

//copy button EventListener...

copybtn.addEventListener('click', function () {
    showCopyCode(outputColorCode.value)
    storeDataInLocalStorage.push(outputColorCode.value);
    localStorage.setItem('RGB_COLORS', JSON.stringify(storeDataInLocalStorage))
})
// Show Copy item in bottom...
function showCopyCode(value) {
    let d = JSON.parse(getData)
    let createFooter = document.createElement('div');
    createFooter.id = 'footer';
    let createShowColoCode = document.createElement('div');
    createShowColoCode.id = 'showColorCode';
    createShowColoCode.style.color = 'white';
    createShowColoCode.innerHTML = value;
    let createBtn = document.createElement('button');
    createBtn.id = 'reloadBtn';
    createBtn.innerHTML = 'reloadBtn'
    let deleteItem = document.createElement('a');
    deleteItem.id = 'delete-item';
    deleteItem.href = "javascript:void(0)";
    deleteItem.innerHTML = 'X'
    createFooter.append(createShowColoCode, createBtn, deleteItem);
    document.body.append(createFooter);

    createBtn.addEventListener('click', function () {
        root.style.backgroundColor = value;
    })
    deleteItem.addEventListener('click', function () {
        removeColorFromLocalStorage(d)
        createFooter.remove(storeDataInLocalStorage);
    })
}

// Genarate Random RGB Color...
function genarateRGBcolor() {
    let x = Math.floor(Math.random() * 255 + 1);
    let y = Math.floor(Math.random() * 255 + 1);
    let z = Math.floor(Math.random() * 255 + 1);
    return `rgb(${x}, ${y}, ${z})`;
}

function removeColorFromLocalStorage(item) {
    let data = JSON.parse(getData);
    let newData = [];
    data.filter(function (el) {
        if (el != item) {
            newData.push(el);
       }
    })

    localStorage.setItem('RGB_COLORS', JSON.stringify(newData))
}
