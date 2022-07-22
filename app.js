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


// Random color Show in backgound
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


