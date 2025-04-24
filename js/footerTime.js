function updateTimestamp() {
    const now = new Date();
    const timestamp = now.toLocaleString(); // You can customize the format
    document.getElementById("timestamp").textContent = ` ${timestamp}`;
  }

  // Update every second
  setInterval(updateTimestamp, 1000);

  // Initialize immediately
  updateTimestamp();