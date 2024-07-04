document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('postsContainer');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  
    if (blogPosts.length === 0) {
      const noPostsMessage = document.createElement('p');
      noPostsMessage.textContent = 'No blog posts yet. Be the first to add one!';
      postsContainer.appendChild(noPostsMessage);
    } else {
      blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        
        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;
        
        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;
        
        const authorElement = document.createElement('p');
        authorElement.textContent = `Posted by: ${post.username}`;
        
        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);
        postElement.appendChild(authorElement);
        
        postsContainer.appendChild(postElement);
      });
    }
  });
  