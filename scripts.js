document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('postsContainer');
    const photoFiles = [
        'photo1.jpg',
        'photo2.jpg',
        'photo3.jpg',
        // Add more filenames as needed
    ];

    photoFiles.forEach((photo, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        
        postElement.innerHTML = `
            <h4><i class="fas fa-user-circle"></i> User ${index + 1}</h4>
            <img src="media/${photo}" alt="Post Image">
            <div class="post-actions">
                <span class="like-counter">0 Likes</span>
                <i class="fas fa-thumbs-up" onclick="toggleLike(this)"></i>
                <i class="fas fa-comment" onclick="toggleComments(this)"></i>
                <i class="fas fa-share"></i>
            </div>
            <div class="comments" style="display: none;">
                <div class="comment">
                    <input type="text" placeholder="Add a comment...">
                    <button onclick="addComment(this)">Post</button>
                </div>
            </div>
        `;
        
        postsContainer.appendChild(postElement);
    });
});

function toggleLike(icon) {
    const likeCounter = icon.parentElement.querySelector('.like-counter');
    let count = parseInt(likeCounter.textContent.split(' ')[0]);
    if (icon.classList.contains('liked')) {
        count--;
        icon.classList.remove('liked');
    } else {
        count++;
        icon.classList.add('liked');
    }
    likeCounter.textContent = `${count} Likes`;
}

function toggleComments(icon) {
    const commentsSection = icon.parentElement.nextElementSibling;
    if (commentsSection.style.display === 'none' || commentsSection.style.display === '') {
        commentsSection.style.display = 'block';
    } else {
        commentsSection.style.display = 'none';
    }
}

function addComment(button) {
    const commentInput = button.previousElementSibling;
    const commentText = commentInput.value.trim();
    if (commentText) {
        const commentsSection = button.closest('.comments');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = commentText;
        commentsSection.insertBefore(newComment, commentInput.parentElement);
        commentInput.value = '';
    }
}
