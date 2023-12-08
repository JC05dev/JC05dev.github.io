// Import translations
import { mainTranslations } from '.Translations.js';
import { aboutMeTranslations } from './translation_About_Me.js';

console.log('Imports successful');

// Combine translations from both files into a single object
const translations = {
    aboutMe: aboutMeTranslations,
    main: mainTranslations,
};

console.log('Translations:', translations);

// Function to change language
function changeLanguage(language) {
    localStorage.setItem('selectedLanguage', language);
    currentLanguage = language;
    document.documentElement.lang = language;
    const incorrectUrl = window.location.href;
    translatePage(language);
    highlightSelectedLanguage(language);
    if (!is404Page()) {
    playSound(0.4);
    }
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
let currentLanguage = storedLanguage || 'en';

// Initial translation
translatePage(currentLanguage);

// Event listener for initial highlighting
document.addEventListener('DOMContentLoaded', function() {
    highlightSelectedLanguage(currentLanguage);
});

// Function to check if the current page is the 404 page
function is404Page() {
    // Check for the presence of the errorMessage element
    return document.getElementById('errorMessage') !== null;
}

function getSoundFilePath() {
    // Check the current location and construct the path accordingly
    const currentPath = window.location.pathname;
    
    // If the current location is in the 'pages' folder or a subfolder of 'pages'
    if (currentPath.includes('/pages/')) {
        return '../assets/sounds/interface-124464.mp3';
    } else {
        return 'assets/sounds/interface-124464.mp3';
    }
}
function playSound(volume) {
    var audio = new Audio(getSoundFilePath());
    audio.volume = volume || 1.0;
    audio.play();
}