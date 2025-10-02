
// DARK / LIGHT MODE LOGIC

const toggleBtn = document.getElementById('theme-toggle');

// Load saved theme from localStorage
const savedMode = localStorage.getItem('theme');
if (savedMode) {
  document.body.classList.add(savedMode);
  if (toggleBtn) {
    toggleBtn.textContent = savedMode === 'dark-mode' ? '☀️ Light Mode' : '🌙 Dark Mode';
  }
} else {
  // Default to light mode
  document.body.classList.add('light-mode');
  if (toggleBtn) toggleBtn.textContent = '🌙 Dark Mode';
}

// Toggle function
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    if (document.body.classList.contains('light-mode')) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      toggleBtn.textContent = '☀️ Light Mode';
      localStorage.setItem('theme', 'dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      toggleBtn.textContent = '🌙 Dark Mode';
      localStorage.setItem('theme', 'light-mode');
    }
  });
}


// FETCH POSTS AND RENDER

fetch("post.json")
  .then(res => res.json())
  .then(posts => {

    // --- Check which page we are on ---
    if (document.getElementById("blog-container")) {
      // Homepage → Show all posts
      let container = document.getElementById("blog-container");

      posts.forEach(post => {
        // Load likes from localStorage if available
        let storedLikes = localStorage.getItem(`likes_${post.id}`);
        if (storedLikes !== null) post.likes = parseInt(storedLikes);

        let postHTML = `
          <article class="col-md-12 mb-4">
            <div class="card h-300 shadow-sm">
              <img src="${post.image}" class="card-img-top" alt="${post.title}">
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text text-muted">
                  <small>${post.author} | ${post.date} | ${post.readTime}</small>
                </p>
                <span class="badge bg-primary">${post.category}</span>
                <p class="card-text mt-2">${post.content.substring(0, 100)}...</p>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="post.html?id=${post.id}" class="btn btn-sm btn-primary">Read More</a>
                  <button class="btn btn-sm btn-outline-danger like-btn" data-id="${post.id}">
                    ❤️ Like (<span id="like-count-${post.id}">${post.likes}</span>)
                  </button>
                </div>
              </div>
            </div>
          </article>
        `;
        container.innerHTML += postHTML;
      });

    } else if (document.getElementById("post-container")) {
      // Post page → Show single post
      let urlParams = new URLSearchParams(window.location.search);
      let postId = urlParams.get("id");
      let post = posts.find(p => p.id == postId);

      if (post) {
        let storedLikes = localStorage.getItem(`likes_${post.id}`);
        if (storedLikes !== null) post.likes = parseInt(storedLikes);

        let postHTML = `
          <div class="card shadow-lg">
            <img src="${post.image}" class="card-img-top" alt="${post.title}">
            <div class="card-body">
              <h1 class="card-title">${post.title}</h1>
              <p class="card-text">${post.content}</p>
              <small class="text-muted">By ${post.author} | ${post.date} | ${post.readTime}</small>
              ${post.file ? `<p class="mt-3"><a href="${post.file}" target="_blank" class="btn btn-outline-secondary">Download File</a></p>` : ""}
              <p class="mt-3">
                <button class="btn btn-outline-danger like-btn" data-id="${post.id}">
                  ❤️ Like (<span id="like-count-${post.id}">${post.likes}</span>)
                </button>
              </p>
            </div>
          </div>
        `;
        document.getElementById("post-container").innerHTML = postHTML;
      } else {
        document.getElementById("post-container").innerHTML = `<p class="text-danger">Post not found!</p>`;
      }
    }

   // --- LIKE BUTTON ---
    document.addEventListener("click", function(e) {
      if (e.target && e.target.closest(".like-btn")) {
        e.preventDefault();
        let btn = e.target.closest(".like-btn");
        let postId = btn.getAttribute("data-id");
        let countSpan = document.getElementById(`like-count-${postId}`);

        // Update count
        let currentLikes = parseInt(countSpan.textContent);
        let newLikes = currentLikes + 1;
        countSpan.textContent = newLikes;

        // Save to localStorage
        localStorage.setItem(`likes_${postId}`, newLikes);
      }
    });

  })
  .catch(err => console.error("Error loading posts:", err));
