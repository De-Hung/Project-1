const savedTheme = localStorage.getItem('theme');
const themeElement = document.getElementById('theme-sheet');

// If a theme was previously saved, apply it
if (savedTheme) {
    themeElement.setAttribute('href', savedTheme);
}

function toggleStyle() {
    let themeElement = document.getElementById('theme-sheet');
    let currentTheme = themeElement.getAttribute('href');
    let newTheme = '';

    // Swap the theme and save the new selection to localStorage
    if (currentTheme === 'style1.css') {
        newTheme = 'style2.css';
    } else {
        newTheme = 'style1.css';
    }

    themeElement.setAttribute('href', newTheme);
    localStorage.setItem('theme', newTheme); // This "remembers" the choice
}