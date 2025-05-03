const animatedButton = document.getElementById('animatedButton');
const animatedImageContainer = document.getElementById('animatedImageContainer');
const themeSelect = document.getElementById('theme');
const body = document.body;

// Function to store user preference for theme
function storeThemePreference(theme) {
    localStorage.setItem('userTheme', theme);
}

// Function to retrieve user preference for theme
function getThemePreference() {
    return localStorage.getItem('userTheme');
}

// Function to apply the saved theme
function applySavedTheme() {
    const savedTheme = getThemePreference();
    if (savedTheme) {
        body.classList.toggle('dark-theme', savedTheme === 'dark');
        themeSelect.value = savedTheme;
    }
}

// Apply saved theme on page load
applySavedTheme();

// Event listener for theme selection
themeSelect.addEventListener('change', (event) => {
    const selectedTheme = event.target.value;
    storeThemePreference(selectedTheme);
    applySavedTheme(); // Re-apply the theme to update styles
});

// Trigger animation on button click
animatedButton.addEventListener('click', () => {
    animatedButton.classList.add('animate-pulse');
    // Remove the class after the animation to allow it to trigger again
    setTimeout(() => {
        animatedButton.classList.remove('animate-pulse');
    }, 1000); // Duration of the pulse animation
});

// Trigger animation on image hover
animatedImageContainer.addEventListener('mouseenter', () => {
    animatedImageContainer.classList.add('zoom-in');
});

animatedImageContainer.addEventListener('mouseleave', () => {
    animatedImageContainer.classList.remove('zoom-in');
});