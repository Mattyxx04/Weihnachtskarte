const name = getNameFromUrl() || "Mama und Papa!";

const nameEle = document.getElementById("name");

createNameSpans(name);

const letterEles = document.querySelectorAll(".letter");

console.log(letterEles);

lightUpName(1);

function createNameSpans(name) {
    let nameArray = name.split("");
    let htmlString = "";
    nameArray.forEach((letter, index) => {
        htmlString += `<span class="letter" id="letter-${index}">${letter}</span>`;
    });
    nameEle.innerHTML = htmlString;
}

function lightUpName(n){
    let lenght = letterEles.length;
    for(let i = 0; i < lenght; i++){
        let ele = letterEles[i];
        ele.className = (n + i) % 2 == 0 ? "green" : "red";
    }

    setTimeout(function() {
        lightUpName(n+1);
    }, 500);
}

function getNameFromUrl() {
    const querySring = window.location.search;
    const urlParams = new URLSearchParams(querySring);
    let urlName = urlParams.get("name");
    return urlName;  
}
