var root = document.querySelector(':root');
var computedStyle = getComputedStyle(root);
var lightBackground = computedStyle.getPropertyValue("--white");
var darkBackground = computedStyle.getPropertyValue("--black");

function displayAbout() {
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("portfolioTag").classList.remove("active");
    document.getElementById("portfolioTag").classList.add("inactive");
    document.getElementById("other").style.display = "none";
    document.getElementById("otherTag").classList.remove("active");
    document.getElementById("otherTag").classList.add("inactive");

    document.getElementById("about").style.display = "block";
    document.getElementById("aboutTag").classList.add("active");
    document.getElementById("aboutTag").classList.remove("inactive");
}

function displayPortfolio() {
    document.getElementById("about").style.display = "none";
    document.getElementById("aboutTag").classList.remove("active");
    document.getElementById("aboutTag").classList.add("inactive");
    document.getElementById("other").style.display = "none";
    document.getElementById("otherTag").classList.remove("active");
    document.getElementById("otherTag").classList.add("inactive");

    document.getElementById("portfolio").style.display = "block";
    document.getElementById("portfolioTag").classList.add("active");
    document.getElementById("portfolioTag").classList.remove("inactive");
}

function displayOther() {
    document.getElementById("about").style.display = "none";
    document.getElementById("aboutTag").classList.remove("active");
    document.getElementById("aboutTag").classList.add("inactive");
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("portfolioTag").classList.remove("active");
    document.getElementById("portfolioTag").classList.add("inactive");

    document.getElementById("other").style.display = "block";
    document.getElementById("otherTag").classList.add("active");
    document.getElementById("otherTag").classList.remove("inactive");
}

function toggleTheme() {
    const darkmode_button = document.querySelector("#darkmode_toggle");
    const theme = document.querySelector("#theme_link");

    if (theme.getAttribute("href") == "light_mode.css") {
        console.log("dentro do if");
        theme.href = "dark_mode.css";
    } else {
        console.log("dentro do else");
        theme.href = "light_mode.css";
    }
}