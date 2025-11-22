const link = document.querySelectorAll("nav a");
const currentPage = windows.location.pathname.split("/").pop();
link.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behaviour: "smooth"
        });
    });
});

document.getElementById("year").textContent = new Date().getFullYear();