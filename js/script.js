document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname;
  
    // Popup for Eid holidays
    let message = "";
    if (currentPage.includes("RetroCafe.html")) {
      message = "Retro Cafe will be closed for Eid holidays and will reopen after the allotted holiday timings as per usual.";
    } else if (currentPage.includes("SouthEdgeCafe.html")) {
      message = "South Edge Cafe will be closed for Eid holidays and will reopen after the allotted holiday timings as per usual.";
    } else if (currentPage.includes("CoffeeLounge.html")) {
      message = "Coffee Lounge will be closed for Eid holidays and will reopen after the allotted holiday timings as per usual.";
    }
  
    if (message) {
      const modal = document.createElement("div");
      modal.id = "custom-popup";
      modal.innerHTML = `
        <div class="popup-content">
          <img src="resources/eid-mubarak.gif" alt="Eid Mubarak" class="popup-image" />
          <p>${message}</p>
          <button id="close-popup">Okay, got it!</button>
        </div>
      `;
      document.body.appendChild(modal);
  
      const closeButton = document.getElementById("close-popup");
      closeButton.addEventListener("click", function () {
        modal.style.display = "none";
      });
    }
  
    // Banner for working hours
    const banner = document.getElementById("welcome-banner");
    const bannerMessage = banner.querySelector("p");
  
    // Get the current system time
    const now = new Date();
    const currentHour = now.getHours();
  
    // Define working hours (10 AM to 10 PM)
    const openingHour = 10;
    const closingHour = 22;
  
    // Check if the current time is within working hours
    if (currentHour >= openingHour && currentHour < closingHour) {
      bannerMessage.textContent = "Welcome to NUST Eats! Our Cafes are open for you to explore our delicious campus dining options.";
    } else {
      bannerMessage.textContent = "Welcome to NUST Eats! Our Cafes are currently closed :( Our working hours are 10 AM - 10 PM, so please check back later.";
    }
  
    // Close banner functionality
    const closeBannerButton = document.getElementById("close-banner");
    closeBannerButton.addEventListener("click", function () {
      banner.style.display = "none";
    });
  });