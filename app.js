const checkbox = document.getElementById("checkbox");
const label = document.getElementById("label");
const header = document.getElementById("header");
const projectSection = document.getElementById("PROJECTS");
const blogSection = document.getElementById("BLOGS");
const aboutSection = document.getElementById("ABOUT");
const lineBreakOne = document.querySelector(".sectionBorderBottomOne");
const lineBreakTwo = document.querySelector(".sectionBorderBottomTwo");
const profileImg = document.getElementById("profileImg");
const aboutTitle = document.getElementById("about-title");
const aboutDescription = document.getElementById("about-description");
const viewAllProjects = document.getElementById("viewAllProjects");
const viewAllBlogs = document.getElementById("viewAllBlogs");
const blog = document.getElementById("blog");
const project = document.getElementById("project");
const resume = document.querySelector(".resume_file");
const main = document.querySelector(".mainSection");

let burger = document.getElementById("burger");
let ul = document.getElementById("ul");
let link = document.getElementsByClassName("link");

burger.addEventListener("click", function(){
    ul.classList.toggle("open");
});

window.addEventListener('click', function(e){
    if (!document.getElementById('ul').contains(e.target) && (!document.getElementById('burger').contains(e.target))){
     ul.classList.remove("open"); //the same code you've used to hide the menu
  } 
})

// document.addEventListener("click", function(event) {
//     if (event.target.classList.contains("burger")) {
//       ul.classList.toggle("open");
//     } else if (event.target.classList.contains("link")) {
//       ul.classList.remove("show");
//     }
//   });

// window.addEventListener("click", function(e){
//     if(e.target.id !== "burger" && e.target.id !== "ul"){
//         // console.log("true correct");
//         ul.classList.remove("open");
//     }
// });



checkbox.addEventListener("change", () => {
    header.classList.toggle("headerDark");
    label.classList.toggle("labelDark");
    projectSection.classList.toggle("contentDark");
    blogSection.classList.toggle("contentDark");
    aboutSection.classList.toggle("contentDark");
    profileImg.classList.toggle("profileImgDark");
    aboutTitle.classList.toggle("aboutTitleDark");
    aboutDescription.classList.toggle("aboutDescriptionDark");
    viewAllProjects.classList.toggle("viewAllProjectsDark");
    viewAllBlogs.classList.toggle("viewAllBlogsDark");
    blog.classList.toggle("blogDark");
    project.classList.toggle("projectDark");
    resume.classList.toggle("resume_fileDark");
    main.classList.toggle("mainSectionDark");
    lineBreakOne.classList.toggle("sectionBorderBottomOneDark");
    lineBreakTwo.classList.toggle("sectionBorderBottomTwoDark");
})
