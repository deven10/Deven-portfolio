const checkbox = document.getElementById("checkbox");
const label = document.getElementById("label");
const header = document.getElementById("header");
checkbox.addEventListener("change", () => {
    header.classList.toggle("headerDark");
    label.classList.toggle("labelDark");
})