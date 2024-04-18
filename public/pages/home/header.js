function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");

    const arrowIcon = document.getElementById("arrowIcon");
    dropdownContent.classList.toggle("show-dropdown");
    arrowIcon.src = dropdownContent.classList.contains("show-dropdown") ? "/public/assets/arrow-up.svg" : "/public/assets/setadown.png";
}

// window.onclick = function(event) {
//     if (!event.target.matches('.selected-option')) {
//         const dropdowns = document.getElementsByClassName("dropdown-content");
//         let i;
//         for (i = 0; i < dropdowns.length; i++) {
//             const openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }