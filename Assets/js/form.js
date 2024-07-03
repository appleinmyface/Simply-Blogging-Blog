document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    //variables used for data and validation
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value
    const content = document.getElementById('content').value
    const errorMessage = document.getElementById('errorMessage');

    //if Valid it will add information to local storage
    if(username && title && content) {
        const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.push({username, title, content});
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
        window.location.href = 'blog.html';
    } else {
        errorMessage.classList.remove('hidden');
    }
});