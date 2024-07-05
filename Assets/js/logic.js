//dark and light themes

document.getElementById('theme-toggle').addEventListener('click', function () {
    const currentTheme = document.body.getAttribute('data-theme');
    document.body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
});
