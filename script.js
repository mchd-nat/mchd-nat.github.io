function displayAbout() {
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("portfolioTag").classList.remove("active");
    document.getElementById("other").style.display = "none";
    document.getElementById("otherTag").classList.remove("active");

    document.getElementById("about").style.display = "block";
    document.getElementById("aboutTag").classList.add("active");
}

function displayPortfolio() {
    document.getElementById("about").style.display = "none";
    document.getElementById("aboutTag").classList.remove("active");
    document.getElementById("other").style.display = "none";
    document.getElementById("otherTag").classList.remove("active");

    document.getElementById("portfolio").style.display = "block";
    document.getElementById("portfolioTag").classList.add("active");
}

function displayOther() {
    document.getElementById("about").style.display = "none";
    document.getElementById("aboutTag").classList.remove("active");
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("portfolioTag").classList.remove("active");

    document.getElementById("other").style.display = "block";
    document.getElementById("otherTag").classList.add("active");
}

function activate(e) {
    e.getElementById(e).classList.add("active");
}
