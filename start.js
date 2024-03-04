    let iconPlus = document.querySelectorAll(".plus");
    let iconMinus = document.querySelectorAll(".minus");
    let displayText = document.querySelectorAll(".display");

    iconPlus.forEach((plus, index) => {
        plus.addEventListener("click", () => {
            displayText[index].style.display = "block";
            iconMinus[index].style.display = "block";
            iconPlus[index].style.display = "none";
        });
    });

    iconMinus.forEach((minus, index) => {
        minus.addEventListener("click", () => {
            displayText[index].style.display = "none";
            iconMinus[index].style.display = "none";
            iconPlus[index].style.display = "block";
        });
    });
