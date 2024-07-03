//will toggle dark and light mode
document.getElementById('toggleMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

//brings you from blog.html back to index.html
document.getElementById('backButton').addEventListener('click', function(){
    window.location.href = 'index.html';
})