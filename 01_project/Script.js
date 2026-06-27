function closeSideBar() {
    document.getElementById("leftSideBar")
            .classList.add("hide");

    document.getElementById("menuIcon")
            .style.display = "block";
}

function openSideBar() {
    document.getElementById("leftSideBar")
            .classList.remove("hide");

    document.getElementById("menuIcon")
            .style.display = "none";
}