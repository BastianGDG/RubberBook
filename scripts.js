document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('postsContainer');
    const photoFiles = [
    "1d9ae450-d818-4f5c-b171-4f9ee44f4cb8.png",
    "1e81f54d-e5ee-488e-9a91-9978ba930af1.png",
    "3fbd845b-2d7f-4d71-a6eb-fd5e00b08e8c.png",
    "42e55303-4045-4b7b-a9bd-8b57a-d62abd1c4d0.png",
    "017dd731-dea4-45e0-85cb-00c570fcd1fe.png",
    "1879ad16-523a-4dcb-9342-9a3dcd98a6f9.png",
    "32caf5f8-ef9b-4d4b-9372-66d800fd6692.png",
    "45bc0e81-c051-400b-98f9-09f1fc489d5.png",
    "48c1b7c7-97fe-4a25-9734-250e93fe5111.png",
    "5139CC82-9CA5-4257-8FCA-445D34435.jpg",
    "98adacd5-78d4-42de-82e8-59f1fc8d32f9.png",
    "4b76d8a5-5e6e-43c9-b7a8-7e7c09d8f888.png",
    "ba7d2d4-0952-4ab1-9414-ab9ad7c3deec.png",
    "bbc4d5bf-d274-4625-a898-7f2092e4102b.png",
    "bcltWMU5.jpg",
    "ca3768ac-7360-436f-b311-873b04b0eeb9.png",
    "ca1a224-0538-43fc-8cc3-1f63f7110ed.png",
    "cb03438-0843-431e-8417-9ae31ef18fc1.png",
    "caption.webp",
    "cm-chat-media-a-video-1e9b18eb-9d37-45ad-8ce8-4ad8ce9a.png",
    "d950e40-26db-4259-ae57-595f17558c11.png",
    "download_image_1709025326419.png",
    "download_image_1709025326420.png",
    "download_image_1709025326183.png",
    "download_image_1709025326371.png",
    "download_image_1709025326140.png",
    "e48702a3-3bcf-418e-9e8a-ef6a362a508f.png",
    "Fanf_Rubber.png",
    "fotor-ai-202403314139.jpg",
    "fotor-ai-2024033124302.jpg",
    "GetImage.jpg",
    "GetImage(1).jpg",
    "hjuytgyfug.gif",
    "image(2).jpg",
    "image.jpg",
    "image.png",
    "image.web",
    "IB0igp7u.webp",
    "MegamindRubberEdition.gif",
    "MYj0eBDi.webp",
    "oGX78m1ij1.jpg",
    "PXL_202310081747357102.jpg",
    "PXL_20240123142424940.webp",
    "PXL_20240228143937428.jpg",
    "PXL_202403014133054.jpg",
    "Robbenheimer.png",
    "rubberDance.gif",
    "Rubbersn.png",
    "Screenshot_20240223-234457.png",
    "Screenshot_20240223-234516.png",
    "Snapchat-862411756.jpg",
    "Snapchat-101477090.jpg",
    "Snapchat-1133985661.webp",
    "Snapchat-1248245520.webp",
    "Snapchat-1537751639.jpg",
    "Snapchat-1843804950.jpg",
    "Snapchat-1865313439.webp",
    "Snapchat-2138001549.webp",
    "watermark.gif",
    "RubberSays.gif"
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
