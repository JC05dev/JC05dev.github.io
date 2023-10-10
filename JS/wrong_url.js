document.addEventListener("DOMContentLoaded", function() {
    // Get the incorrect URL from the referrer
    var incorrectUrl = window.location.href;

    // Display the incorrect URL
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "Diese URL existtiert nicht: " + incorrectUrl;
});
