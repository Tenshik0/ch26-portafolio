console.log("Hola desde un script externo");

function changeColorToRed(){
    const refName = document.getElementById("name");

    refName.style.color = "red";
}

const addH1 = (mensaje) =>{
    document.querySelector("#div").innerHTML = `<center><h1>${mensaje}</h1></center>`
};

function getNamePrintToDOM(   ){
    const name = prompt("Dime tu nombre");
    if(name === null || name === undefined){
        const text = `Hola anonimo, espero tengas un gran dia`;
        addH1(text);
    }else{
        const text = `Hola ${name}, espero tengas un gran dia`;
        addH1(text);
    }
}
getNamePrintToDOM();

function changeName(){
    getNamePrintToDOM();
}