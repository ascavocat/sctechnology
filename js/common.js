// Define your special page mappings
const pageMappings = {
    '/en/index.html': '/fr/index.html',
    '/fr/index.html': '/en/index.html',
    '/en/services.html': '/fr/services.html',
    '/fr/services.html': '/en/services.html',
    '/en/company.html': '/fr/company.html',
    '/fr/company.html': '/en/company.html',
    '/en/contact.html': '/fr/contact.html',
    '/fr/contact.html': '/en/contact.html'

};
// Function to handle dropdown changes
function handleDropdownChange(dropdown) {
    const selectedLang = dropdown.value;
    const currentPath = window.location.pathname;

    // Check if the current page has a special mapping
    if (pageMappings[currentPath]) {
        window.location.pathname = pageMappings[currentPath];
        return;
    }

    // If not a special mapping, proceed with general language switch logic
    if (selectedLang === "fr") {
        window.location.pathname = currentPath.replace("/en/", "/fr/");
    } else if (selectedLang === "en") {
        window.location.pathname = currentPath.replace("/fr/", "/en/");
    }
}

// Attach event listeners to both dropdowns
const langDropdownSmall = document.getElementById('langSelect2');
const langDropdownLarge = document.getElementById('langSelect');

if (langDropdownSmall) {
    langDropdownSmall.addEventListener('change', function() {
        handleDropdownChange(langDropdownSmall);
    });
}

if (langDropdownLarge) {
    langDropdownLarge.addEventListener('change', function() {
        handleDropdownChange(langDropdownLarge);
    });
}

// Logic to auto-redirect based on user preference in localStorage remains the same
window.addEventListener('DOMContentLoaded', (event) => {
    const userLang = localStorage.getItem("userLang");
    const currentPath = window.location.pathname;

    // Check if the current page has a special mapping
    if (pageMappings[currentPath]) {
        if ((userLang === "fr" && currentPath.startsWith("/en/")) || (userLang === "en" && currentPath.startsWith("/fr/"))) {
            window.location.pathname = pageMappings[currentPath];
            return;
        }
    }

    if (userLang === "fr" && currentPath.startsWith("/en/")) {
        window.location.pathname = currentPath.replace("/en/", "/fr/");
    } else if (userLang === "en" && currentPath.startsWith("/fr/")) {
        window.location.pathname = currentPath.replace("/fr/", "/en/");
    }
});