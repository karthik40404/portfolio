function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.querySelector(".main-content").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.querySelector(".main-content").style.marginLeft = "0";
}
function toggleDetails(card) {
    card.classList.toggle("open");
}
