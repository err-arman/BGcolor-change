// /*
//     Genarate for RGB Color
// */
// window.onload = () => {
//   main();
// };
// let output = document.getElementById('output')
// function main() {
//   let root = document.getElementById("root");
//   let btn = document.getElementById("button");

//   btn.addEventListener("click", function () {
//     let bg = genarateRGBcolor();
//       root.style.background = bg;
//       output.value = bg;
//   });
// }

// function genarateRGBcolor() {
//   let x = Math.floor(Math.random() * 255 + 1);
//   let y = Math.floor(Math.random() * 255 + 1);
//   let z = Math.floor(Math.random() * 255 + 1);
//   return `rgb(${x}, ${y}, ${z})`;
// }

// genarateRGBcolor();


// Genarate for HEXADECIMAL COLOR


window.onload = () => { 
    main()
}
let output = document.getElementById('output')
function main() {
    let roottwo = document.getElementById('root');
    let btn = document.getElementById('button');
    let copyBtn = document.getElementById('copy-btn');
    btn.addEventListener('click', function () { 
        let bg = genarateHexaColor();
        roottwo.style.background = bg;
        output.value = bg
    })
    copyBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(output.value);
        showCopyItem(output.value)
    })
}


function genarateHexaColor() {
    let a = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);
    let c = Math.floor(Math.random() * 255 + 1);
    return `#${a.toString(16)}${b.toString(16)}${c.toString(16)}`
}
genarateHexaColor();

// copy the color code


function showCopyItem(msg) { 
    let div = document.createElement('div');
    div.innerHTML = msg;
    div.className = 'test';

    document.body.appendChild(div);
}










