// ============================================
// YOUR PROJECT JAVASCRIPT
// ============================================

// ============================================
// HELPER FUNCTIONS
// Reusable functions used throughout the app
// ============================================

/* Filters the browser list based on search input from the user */
function filterBrowsers(searchTerm) {
    const browserItems = document.querySelectorAll('.browser-item');
    let visibleCount = 0;

    // Loop through each browser item and check if it matches the search
    browserItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        const searchText = searchTerm.toLowerCase();

        // Show or hide based on whether the search term is found
        if (text.includes(searchText)) {
            item.classList.remove('hidden');
            visibleCount++;
        } else {
            item.classList.add('hidden');
        }
    });

    // Update the counter to show how many browsers are being displayed
    updateBrowserCounter(visibleCount, browserItems.length);
}

/* Updates the text that shows how many browsers are displayed */
function updateBrowserCounter(visible, total) {
    const counter = document.querySelector('.browser-counter');
    if (visible === total) {
        counter.textContent = `Showing ${visible} browsers`;
    } else {
        counter.textContent = `Showing ${visible} of ${total} browsers`;
    }
}

/* Toggles dark mode on and off, saving the preference to browser storage */
function toggleDarkMode() {
    const body = document.body;

    // Switch the dark mode class on the body element
    body.classList.toggle('dark-mode');

    // Save the user's preference so it persists when they return
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);

    // Update the button text to show the current state
    updateDarkModeButton();
}

/* Updates the button text to match whether dark mode is on or off */
function updateDarkModeButton() {
    const button = document.querySelector('.dark-mode-toggle');
    const isDarkMode = document.body.classList.contains('dark-mode');
    button.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
}


// ============================================
// INITIALIZATION
// Set everything up when the page loads
// ============================================

/* When the page loads, set up all the interactive features */
document.addEventListener('DOMContentLoaded', function() {
    // Restore dark mode preference from previous visit
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
        updateDarkModeButton();
    }

    // Set up the search box to filter browsers as the user types
    const searchBox = document.querySelector('.search-box');
    searchBox.addEventListener('input', function(event) {
        filterBrowsers(event.target.value);
    });

    // Set up the dark mode toggle button
    const darkModeButton = document.querySelector('.dark-mode-toggle');
    darkModeButton.addEventListener('click', toggleDarkMode);

    console.log('Project initialized successfully!');
});
