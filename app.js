const checkbox = document.getElementById("checkbox");
const label = document.getElementById("label");
const header = document.getElementById("header");
const projectSection = document.getElementById("PROJECTS");
const blogSection = document.getElementById("BLOGS");
const aboutSection = document.getElementById("ABOUT");
const lineBreak = document.querySelectorAll("sectionBorderBottom");
const profileImg = document.getElementById("profileImg");
const aboutTitle = document.getElementById("about-title");
const aboutDescription = document.getElementById("about-description");
const viewAllProjects = document.getElementById("viewAllProjects");
const viewAllBlogs = document.getElementById("viewAllBlogs");
const blog = document.getElementById("blog");
const project = document.getElementById("project");


checkbox.addEventListener("change", () => {
    header.classList.toggle("headerDark");
    label.classList.toggle("labelDark");
    projectSection.classList.toggle("contentDark");
    blogSection.classList.toggle("contentDark");
    aboutSection.classList.toggle("contentDark");
    //lineBreak.classList.toggle("sectionBorderBottomDark");
    profileImg.classList.toggle("profileImgDark");
    aboutTitle.classList.toggle("aboutTitleDark");
    aboutDescription.classList.toggle("aboutDescriptionDark");
    viewAllProjects.classList.toggle("viewAllProjectsDark");
    viewAllBlogs.classList.toggle("viewAllBlogsDark");
    blog.classList.toggle("blogDark");
    project.classList.toggle("projectDark");
})