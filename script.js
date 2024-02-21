document.addEventListener("DOMContentLoaded", () => {
  // Get all elements with the class 'btn'
  const buttons = document.querySelectorAll(".btn");

  // Loop through each button and attach click event listener
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Hide the sidebar-container
      const sidebarContainer = document.querySelector(".sidebar-container");
      sidebarContainer.style.display = "none";

      // Show the sidebar-container-js
      const sidebarContainerJS = document.querySelector(
        ".sidebar-container-js"
      );
      sidebarContainerJS.style.display = "flex";
    });
  });
});

// Get the button with the class 'red-btn'
const cancelButton = document.querySelector(".red-btn");

// Add click event listener to the cancel button
cancelButton.addEventListener("click", () => {
  // Hide the sidebar-container-js
  const sidebarContainerJS = document.querySelector(".sidebar-container-js");
  sidebarContainerJS.style.display = "none";

  // Show the sidebar-container
  const sidebarContainer = document.querySelector(".sidebar-container");
  sidebarContainer.style.display = "flex";
});
