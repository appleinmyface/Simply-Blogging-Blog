document.addEventListener('DOMContentLoaded', function(){
    const postContainer = document.getElementById('postContainer');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    blogPosts.forEach(post => {

        //creates div for each post
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        //creates h2 for each title
        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;

        //creates p for the content of each post
        const contentElement = document.createElement('p');
        authorElement.textContent = post.content;

        //creates another p for the Author
        const authorElement = document.createElement('p');
        authorElement.textContent = `Posted by: ${post.username}`;

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);
        postElement.appendChild(authorElement);

        postElement.appendChild(postElement);
    });
})