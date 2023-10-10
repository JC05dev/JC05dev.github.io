document.addEventListener("DOMContentLoaded", function() {
    // Get the current URL from the window's location
    var incorrectUrl = window.location.href;

    // Display the incorrect URL
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "Diese URL existiert nicht: " + incorrectUrl;
});
