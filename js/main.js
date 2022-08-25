import data from "./data.js";
const { result, atResult, resultContainer, atResultContainer, resultContainerText, dtBtn, hrBtn, ezBtn } = data;

let dtActivated = false;
let ezActivated = false;
let hrActivated = false;
let countDT = 0;
let countHR = 0;
let countEZ = 0;
let mainAR;

dtBtn.addEventListener("click", function() {
    if (countDT % 2 == 0) {
        dtActivated = true;
        resultContainer.style.display = "block";
        resultContainer.style.display = "flex";
        atResultContainer.style.display = "block";
        atResultContainer.style.display = "flex";
        calculate(mainAR);
    } else if (countDT % 2 == 1) {
        dtActivated = false;
        dtBtn.classList.remove("active");
        calculate(mainAR);
    }
    countDT++;
});

hrBtn.addEventListener("click", function() {
    if (countHR % 2 == 0) {
        hrActivated = true;
        resultContainer.style.display = "block";
        resultContainer.style.display = "flex";
        atResultContainer.style.display = "block";
        atResultContainer.style.display = "flex";
        calculate(mainAR);
    } else if (countHR % 2 == 1) {
        hrActivated = false;
        hrBtn.classList.remove("active");
        calculate(mainAR);
    }
    countHR++
});

ezBtn.addEventListener("click", function() {
    if (countEZ % 2 == 0) {
        ezActivated = true;
        resultContainer.style.display = "block";
        resultContainer.style.display = "flex";
        atResultContainer.style.display = "block";
        atResultContainer.style.display = "flex";
        calculate(mainAR);
    } else if (countEZ % 2 == 1) {
        ezActivated = false;
        ezBtn.classList.remove("active");
        calculate(mainAR);
    }
    countEZ++
});


document.getElementById("ar-input").addEventListener("keyup", function(event) {
    result.classList.remove("warning");
    resultContainerText.style.display = "block";
    mainAR = event.target.value;
    calculate(mainAR);
});

function show(ar) {
    result.textContent = ar;
}

function calculate(ar) {
    let msCount;

    if (dtActivated) {
        let dtResult;
        let ms;
        if (ar > 5) {
            ms = 200 + (11 - ar) * 100;
        } else {
            ms = 800 + (5 - ar) * 80;
        }

        if (ms < 300) {
            dtResult = 11
        } else if (ms < 1200) {
            dtResult = Math.round((11 - (ms - 300) / 150) * 100) / 100;
        } else {
            dtResult = Math.round((5 - (ms - 1200) / 120) * 100) / 100;
        }

        if (dtResult < 5) {
            msCount = 1200 - 600 * (dtResult - 5) / 5;
        } else if (dtResult === 5) {
            msCount = 1200;
        } else if (dtResult > 5) {
            msCount = 1200 - 750 * (dtResult - 5) / 5;
        }

        show(dtResult);

        dtBtn.classList.add("active");
        hrBtn.classList.remove("active");
        ezBtn.classList.remove("active");
    }

    if (hrActivated) {
        let hrResult;
        if (ar < 10 && ar >= 7.2) {
            hrResult = 10;
        } else {
            hrResult = (ar * 1.4).toFixed(1);
        }

        if (hrResult < 5) {
            msCount = 1200 - 600 * (hrResult - 5) / 5;
        } else if (hrResult === 5) {
            msCount = 1200;
        } else if (hrResult > 5) {
            msCount = 1200 - 750 * (hrResult - 5) / 5;
        }

        show(hrResult);
        hrBtn.classList.add("active");
        dtBtn.classList.remove("active");
        ezBtn.classList.remove("active");
    }

    if (hrActivated && dtActivated) {
        dtBtn.classList.add("active");
        hrBtn.classList.add("active");
        ezBtn.classList.remove("active");
        let hrResult;
        let dtResult;
        let dthrResult;
        if (ar < 10 && ar >= 7.2) {
            hrResult = 10;
        } else {
            hrResult = (ar * 1.4).toFixed(1);
        }
        let ms;
        if (hrResult > 5) {
            ms = 200 + (11 - hrResult) * 100;
        } else {
            ms = 800 + (5 - hrResult) * 80;
        }
        if (ms < 300) {
            dthrResult = 11
        } else if (ms < 1200) {
            dthrResult = Math.round((11 - (ms - 300) / 150) * 100) / 100;
        } else {
            dthrResult = Math.round((5 - (ms - 1200) / 120) * 100) / 100;
        }

        if (dthrResult < 5) {
            msCount = 1200 - 600 * (dthrResult - 5) / 5;
        } else if (dthrResult === 5) {
            msCount = 1200;
        } else if (dthrResult > 5) {
            msCount = 1200 - 750 * (dthrResult - 5) / 5;
        }

        show(dthrResult);
    }

    if (ezActivated) {
        ezBtn.classList.add("active");
        hrBtn.classList.remove("active");
        dtBtn.classList.remove("active");
        let ezResult;
        ezResult = (ar / 2).toFixed(1);

        if (ezResult < 5) {
            msCount = 1200 - 600 * (ezResult - 5) / 5;
        } else if (ezResult === 5) {
            msCount = 1200;
        } else if (ezResult > 5) {
            msCount = 1200 - 750 * (ezResult - 5) / 5;
        }

        show(ezResult);
    }

    if (ezActivated && dtActivated) {
        ezBtn.classList.add("active");
        dtBtn.classList.add("active");
        hrBtn.classList.remove("active");
        let ezResult;
        let ezdtResult;
        ezResult = (ar / 2).toFixed(1);
        let ms;
        if (ezResult > 5) {
            ms = 200 + (11 - ezResult) * 100;
        } else {
            ms = 800 + (5 - ezResult) * 80;
        }
        if (ms < 300) {
            ezdtResult = 11
        } else if (ms < 1200) {
            ezdtResult = Math.round((11 - (ms - 300) / 150) * 100) / 100;
        } else {
            ezdtResult = Math.round((5 - (ms - 1200) / 120) * 100) / 100;
        }

        if (ezdtResult < 5) {
            msCount = 1200 - 600 * (ezdtResult - 5) / 5;
        } else if (ezdtResult === 5) {
            msCount = 1200;
        } else if (ezdtResult > 5) {
            msCount = 1200 - 750 * (ezdtResult - 5) / 5;
        }

        show(ezdtResult);
    }

    if (ar > 10 || ar < 0) {
        show("!!! no-mod ars cannot reach above 10 or under 0, please try again !!!");
        result.classList.add("warning");
        resultContainerText.style.display = "none";
        atResult.style.display = "none";
    } else {
        result.classList.remove("warning");
        resultContainerText.style.display = "block";
        atResult.style.display = "block";
    }

    if (hrActivated && ezActivated) {
        show("!!! you cannot apply both hr and ez mods simultaneously !!!");
        hrBtn.classList.add("active");
        ezBtn.classList.add("active");
        result.classList.add("warning");
        resultContainerText.style.display = "none";
        atResult.style.display = "none";
        resultContainer.style.display = "flex";
        atResultContainer.style.display = "flex";
    } else {
        result.classList.remove("warning");
        resultContainerText.style.display = "block";
        atResult.style.display = "block";
    }

    atResult.textContent = `${msCount.toFixed(0)}ms`;
}