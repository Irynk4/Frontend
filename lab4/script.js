const elem5 = document.getElementById("elem5");
const elem6 = document.querySelector("#elem6");

if (elem5) {
    elem5.addEventListener("click", function () {
        this.classList.toggle("active-style-1");
    });
}

if (elem6) {
    elem6.addEventListener("click", function () {
        this.classList.toggle("active-style-2");
    });
}

const imgContainer = document.getElementById("image-container");
const btnAdd = document.getElementById("btn-add");
const btnZoomIn = document.getElementById("btn-zoom-in");
const btnZoomOut = document.getElementById("btn-zoom-out");
const btnDelete = document.getElementById("btn-delete");

const STEP = 50;
const MIN_WIDTH = 100;
const MAX_WIDTH = 1000;

btnDelete.addEventListener("click", function () {
    const currentImg = document.getElementById("city-img");
    if (currentImg) {
        currentImg.remove();
    }
});

btnAdd.addEventListener("click", function () {
    let currentImg = document.getElementById("city-img");
    if (!currentImg) {
        const newImg = document.createElement("img");
        newImg.id = "city-img";
        newImg.src = "f631c69b4bde1b4c4d58fe768b2d7216-1071x803.jpg";
        newImg.alt = "Фото міста Ансі";
        newImg.width = 500;

        const link = document.getElementById("city-link");
        if (link) {
            link.appendChild(newImg);
        } else {
            imgContainer.appendChild(newImg);
        }
    }
});

btnZoomIn.addEventListener("click", function () {
    const currentImg = document.getElementById("city-img");
    if (currentImg) {
        let currentWidth = currentImg.width || currentImg.clientWidth;
        if (currentWidth + STEP <= MAX_WIDTH) {
            currentImg.width = currentWidth + STEP;
        }
    }
});

btnZoomOut.addEventListener("click", function () {
    const currentImg = document.getElementById("city-img");
    if (currentImg) {
        let currentWidth = currentImg.width || currentImg.clientWidth;
        if (currentWidth - STEP >= MIN_WIDTH) {
            currentImg.width = currentWidth - STEP;
        }
    }
});