function showPage(page) {
    const pages = document.querySelectorAll(".container");
    pages.forEach((p, index) => {
        p.style.display = (index + 1 === page) ? "block" : "none";
    });
}

document.querySelector("#next-btn").addEventListener("click", () => {
    window.location.href = "page2.html";
});