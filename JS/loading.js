document.addEventListener("DOMContentLoaded", function() {
    // Show loading overlay on page load
    var loadingOverlay = document.getElementById("loadingOverlay");
    var loadingIcon = document.getElementById("loadingIcon");
    loadingOverlay.style.display = "flex";

    // Hide loading overlay after a delay
    setTimeout(function() {
        loadingOverlay.style.display = "none";
        loadingIcon.style.display = "none";
    }, 1500);
});
