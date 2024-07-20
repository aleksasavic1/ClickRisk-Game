const changeUsername = () => {
    let un1 = document.querySelector("#username1").value;
    let un2 = document.querySelector("#username2").value;

    let displayUN1 = document.querySelector(".displayUN1");
    let displayUN2 = document.querySelector(".displayUN2");

    if(un1 === "" || un2 === "") {
        alert("Username cannot be empty!!!");
    } else {
        displayUN1.innerText = un1;
        displayUN2.innerText = un2;
    }
}


const click_ = btn => {
    let parentElement = btn.parentElement;
    let pointsField = parentElement.querySelector(".points");
    let points = pointsField.innerText;
    points = parseInt(points);

    let grandparentElement = parentElement.parentElement;


    let overlay1 = grandparentElement.querySelector(".overlay1");
    let overlay2 = grandparentElement.querySelector(".overlay2");

    let displayWinner = document.querySelector(".winner");


    let randomNumber = Math.floor(Math.random() * 2 + 1);

    if(randomNumber === 1) {
        points += 10;
        
    } else {
        points = 0;

        if(overlay1.style.display === "none") {
            overlay1.style.display = "flex";
            overlay2.style.display = "none";
        } else {
            overlay1.style.display = "none";
            overlay2.style.display = "flex";
        }
    }


    points = parentElement.querySelector(".points").innerText = points;

    let username = parentElement.querySelector(".username").innerText;

    if(points === 40) {
        pointsField.style.color = "#a4a423";
    }

    if(points === 50) {
        displayWinner.style.display = "flex";
        let name = displayWinner.querySelector("h2");
        name.innerText = `The winner is ${username}!`;
    }
}


const confirm = btn => {
    let parentElement = btn.parentElement;
    let grandparentElement = parentElement.parentElement;

    let overlay1 = grandparentElement.querySelector(".overlay1");
    let overlay2 = grandparentElement.querySelector(".overlay2");

    if(overlay1.style.display === "none") {
        overlay1.style.display = "flex";
        overlay2.style.display = "none";
    } else {
        overlay1.style.display = "none";
        overlay2.style.display = "flex";
    }
}


const reset = () => {
    let displayWinner = document.querySelector(".winner");
    displayWinner.style.display = "none";

    let user1 = document.querySelector(".user1");
    let user2 = document.querySelector(".user2");

    user1.querySelector(".points").innerText = "0";
    user2.querySelector(".points").innerText = "0";

    let overlay1 = document.querySelector(".overlay1");
    let overlay2 = document.querySelector(".overlay2");

    overlay1.style.display = "none";
    overlay2.style.display = "flex";

}

const start = () => {
    document.querySelector(".overlay").style.display = "none";
}
