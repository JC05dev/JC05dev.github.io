document.addEventListener("DOMContentLoaded", function() {
    // Get the incorrect URL from the referrer
    var incorrectUrl = document.referrer;

    // Display the incorrect URL
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "Diese URL existtiert nicht: " + incorrectUrl;
});
