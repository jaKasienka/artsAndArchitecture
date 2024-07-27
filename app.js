class Picture {
    constructor(picName) {
        this.picName = picName;
    }
    output(){
        return this.picName;
    }
    // simulation of database-product-number:
    productNumber(){
        return Math.round(Math.random() * (99999 - 10000) + 10000);
    }
}

class Rendering extends Picture {
    constructor(picName, prgrm) {
        super(picName); 
        this.prgrm = prgrm;
    }
    output2(){
        return this.output() + ", " + this.prgrm;
    }
}


function buttonsNew (){
    const buttonGet = document.createElement("button");
    buttonGet.innerText = "get pics!";
    buttonGet.id = "button-get";
    const current = document.getElementById('numbers');
    if (!current){
        throw new Error ("Html-Div-Element not existing!");  
    }
    current.appendChild(buttonGet);
    buttonGet.addEventListener('click', function() {
        alert(countPics + " pic(s) and " + countRends + " rendering(s) in your cart!");
    })

    const buttonGet2 = document.createElement("button");
    buttonGet2.innerText = "reset";
    buttonGet2.id = "button-reset";
    const current2 = document.getElementById('numbers');
    if (!current2){
        throw new Error ("Html-Div-Element not existing!");  
    }
    current2.appendChild(buttonGet2);
}

let arr = [];

function buttonsRemove (){
    const reset = document.getElementById("button-reset");
    if (!reset){
        throw new Error ("reset Button not existing");
    }
    reset.addEventListener('click', function() {
        arr = [];
        countPics = 0;
        countRends = 0;
        let divNum = document.getElementById("picNum");
        divNum.innerHTML = "choose pictures by click: ";
        const get = document.getElementById("button-get");
        if (get && this.parentNode){
            get.parentNode.removeChild(get);
        }
        if (reset && this.parentNode){
            reset.parentNode.removeChild(reset);
        }
    })
}

try {
    // 2 for-loops for hovering and clicking in case of errors (performance?)
    const make = document.getElementsByTagName('img');

    // hovering and scaling images:
    for (let i=0; i<make.length; i++){
        make[i].addEventListener('mouseover', function(){
            make[i].classList.add('scale');
        });
        make[i].addEventListener('transitionend', function(){
            make[i].classList.remove('scale');
        });
    }

    countPics = 0;
    countRends = 0;
    let product = 0;
    let divNum = document.getElementById("picNum");
    divNum.innerHTML = "choose pictures by click: ";
    for (let i=0; i<make.length; i++){
        make[i].addEventListener('click', function(){
            
            // choose (click) images, put in array:
            arr.push(this.id);
            let setArr = new Set(arr);
            arr = [...setArr];
            let divNum = document.getElementById("picNum");
            if (!divNum){
                throw new Error ("Html-p-Element not existing!");  
            }
            divNum.innerHTML = "you choose: " + arr.toString();
            if (arr.length == 1){
                buttonsNew();
            }
            buttonsRemove();
            
            // count pictures and renderings:
            if (this.alt == ""){
                let pic = new Picture(this.id);
                countPics++;
                product = pic.productNumber();
                alert("Productnumber: " + product + " for more information scroll down!");
                console.log(pic.output());
            }
            else {
                let rend = new Rendering(this.id, this.alt);
                countRends++;
                product = rend.productNumber();
                alert("Productnumber: " + product + " for more information scroll down!");
                console.log(rend.output2());
            }
        }) 
    }
}
catch (error){
    console.error(error);
}