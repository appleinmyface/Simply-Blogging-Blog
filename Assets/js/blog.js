//formatting of each blog post

document.addEventListener('DOMContentLoaded', function () {
    const postsContainer = document.getElementById('posts-container');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    if (blogPosts.length > 0) {
        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';

            postElement.innerHTML = `
                <h3 class="post-title">${post.title}</h3>
                <p class="post-content">${post.content}</p>
                <p class="post-author">Posted by: ${post.username}</p>
            `;

            postsContainer.appendChild(postElement);
        });
    } else {
        postsContainer.innerHTML = '<p>No blog posts available.</p>';
    }
});

document.getElementById('back-button').addEventListener('click', function () {
    window.location.href = 'index.html';
});
