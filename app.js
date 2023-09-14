function buttonsNew (){
    if (arr.length == 1){
        const buttonGet = document.createElement("button");
        buttonGet.innerText = "get pics!";
        buttonGet.id = "button-get";
        const current = document.getElementById('numbers');
        current.appendChild(buttonGet);
        buttonGet.addEventListener('click', function() {
            alert("pics in your cart!");
        })

        const buttonGet2 = document.createElement("button");
        buttonGet2.innerText = "reset";
        buttonGet2.id = "button-reset";
        const current2 = document.getElementById('numbers');
        current2.appendChild(buttonGet2);
    }
}

function buttonsRemove (){
    const reset = document.getElementById("button-reset");
    reset.addEventListener('click', function() {
        arr = [];
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

const make = document.getElementsByTagName('img');
for (let i=0; i<make.length; i++){
    make[i].addEventListener('mouseover', function(){
        make[i].classList.add('scale');
    });
    make[i].addEventListener('transitionend', function(){
        make[i].classList.remove('scale');
    });
}

let arr = [];
let a = "";
for (let i=0; i<make.length; i++){
    make[i].addEventListener('click', function(){
        a=this.id; 
        arr.push(a);
        let setArr = new Set(arr);
        let arrNew = [...setArr];
        let divNum = document.getElementById("picNum");
        divNum.innerHTML = "you choose: " + arrNew.toString();
        buttonsNew();
        buttonsRemove();
    }) 
}