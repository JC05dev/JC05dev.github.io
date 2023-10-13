// Function to change language
function changeLanguage(language) {
    localStorage.setItem('selectedLanguage', language);
    currentLanguage = language;
    const incorrectUrl = window.location.href;
    translatePage(language);
    highlightSelectedLanguage(language);
}

// Function to translate the page content
function translatePage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        //console.log(`Translating key: ${key}`);
        if (translations[language] && translations[language][key]) {
            element.innerText = translations[language][key];
        } else {
            //console.log(`Translation not found for key: ${key}`);
        }
    });
        // Special handling for errorMessage
    const errorMessage = document.getElementById("errorMessage");
    if (errorMessage) {
        errorMessage.textContent = translations[language]['errorMessage'] + window.location.href;
    }
}


// Function to highlight the selected language
function highlightSelectedLanguage(language) {
    const buttons = document.querySelectorAll('#language-switcher button');

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const selectedButton = document.querySelector(`#language-switcher button[data-language="${language}"]`);
    
    if (selectedButton) {
        selectedButton.classList.add('active');
    }

    //console.log(`Selected language: ${language}`);
}



// Get the selected language from localStorage
const storedLanguage = localStorage.getItem('selectedLanguage');

// Set the default language or use the stored language
let currentLanguage = storedLanguage || 'de';

// Initial translation
translatePage(currentLanguage);

// Event listener for initial highlighting
document.addEventListener('DOMContentLoaded', function() {
    highlightSelectedLanguage(currentLanguage);
});