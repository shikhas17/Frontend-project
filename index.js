let sideBar = document.querySelector(".side-bar-container")
let navToggle = document.querySelector(".navToggle");
let remove = document.querySelector(".remove");
let login = document.querySelector(".login");
let searchbar = document.querySelector(".searchbar");
let searchbarcontent = document.querySelector(".searchbarcontent");
let removeSearchBar = document.querySelector(".removeSearchBar");
let button = document.querySelector(".button");
let paragraph = document.querySelector(".p-english");
let languageContainer = document.querySelector(".language-container");
let leftArrow = document.querySelector(".left-arrow")

navToggle.addEventListener("click", () => {
  sideBar.classList.add("active");
  sideBar.classList.add("dimmed-background");
}
);

remove.addEventListener("click", () => {
  sideBar.classList.remove("active");
  sideBar.classList.remove("dimmed-background")
});


login.addEventListener("click", () => {
   window.open("file:///C:/Users/bhavi/classroom/project.html/Clone/signup.html")
})

searchbar.addEventListener("click", () => {
  searchbarcontent.classList.add("open");
})

removeSearchBar.addEventListener("click", () => {
  searchbarcontent.classList.remove("open");
})

button.addEventListener("click", () => {
  window.open("https://en.uptodown.com/android/communication")
})


paragraph.addEventListener("click", () => {
  languageContainer.classList.add("overlay");
  
})

leftArrow.addEventListener("click", () => {
  languageContainer.classList.remove("overlay");
  console.log("click")
})