function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");

    const arrowIcon = document.getElementById("arrowIcon");
    dropdownContent.classList.toggle("show-dropdown");
    arrowIcon.src = dropdownContent.classList.contains("show-dropdown") ? "/public/assets/arrow-up.svg" : "/public/assets/setadown.png";
}