const checkbox = document.getElementById("checkbox");
const label = document.getElementById("label");
const header = document.getElementById("header");
const projectSection = document.getElementById("PROJECTS");
const blogSection = document.getElementById("BLOGS");
const aboutSection = document.getElementById("ABOUT");
const lineBreak = document.querySelectorAll("sectionBorderBottom");
const profileImg = document.getElementById("profileImg");

checkbox.addEventListener("change", () => {
    header.classList.toggle("headerDark");
    label.classList.toggle("labelDark");
    projectSection.classList.toggle("contentDark");
    blogSection.classList.toggle("contentDark");
    aboutSection.classList.toggle("contentDark");
    lineBreak.classList.toggle("sectionBorderBottomDark");
    profileImg.classList.toggle("profileImgDark");
})