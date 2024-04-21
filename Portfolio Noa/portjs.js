const stopspin = document.getElementById("stopspin");
const iconspin = document.getElementById("iconspin");

stopspin.addEventListener("mouseover", () => {
    iconspin.style.animationName = "none";
})

stopspin.addEventListener("mouseleave", () => {
    iconspin.style.animationName = "right";
})

/* stopspin end*/

