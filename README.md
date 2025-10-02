# Responsive Personal Blog Website

A clean, responsive personal blog template built using **HTML, CSS, and JavaScript** (with optional Bootstrap).  
Designed for writers who need a simple platform to publish and manage posts dynamically.

---

## **Project Description**

Writers need a simple, responsive platform to publish and manage posts. Traditional CMS platforms can be too complex for basic blogging needs.  
This project builds a clean, mobile-friendly blog template with posts rendered dynamically from **JSON** or local data.  

Key features:
- Responsive design (mobile, tablet, desktop)
- Dynamic post rendering using JSON data
- Dark/Light mode toggle
- Interactive like buttons with persistent storage (localStorage)
- About page with profile and contact buttons
- Footer and navbar consistent across pages
- Blog cards with hover animation

responsive-personal-blog/
│
├── index.html                # Homepage with list of blog posts
├── post.html                 # Single post page
├── about.html                # About Me page
├── styles.css                # Custom styles (dark/light mode, cards, buttons)
├── script.js                 # Handles dynamic rendering & dark/light mode
├── post.json                 # Sample blog posts data (JSON format)
├── images/                   # Folder for images
│   └── profile.jpg           # Profile picture
│   └── post1.jpg             # Example post image
│   └── post2.jpg
├── files/
│    └── file1.pdf            # Downloadable file in the blog
├── README.md                 # Project documentation
└── LICENSE (optional)        # License file


---

## **Features**

1. **Home Page**
   - Lists all posts dynamically
   - Cards show title, author, date, read time, category, and snippet
   - 'Read More' button links to individual post

2. **Post Page**
   - Displays full post content
   - Includes likes and optional downloadable file
   - Dynamic rendering using `post.json`

3. **About Page**
   - Profile picture, description, and contact links
   - Social buttons with consistent style (LinkedIn, GitHub, LeetCode, Email)

4. **Dark/Light Mode**
   - Toggle button in the navbar
   - Dark mode: solid black background
   - Light mode: animated gradient background
   - Mode persists across pages using localStorage

5. **Responsive Design**
   - Mobile-first layout using Bootstrap's grid system
   - Cards and buttons adapt to screen size
   - Navbar collapses into a hamburger menu on small screens

---

## **Installation & Usage**

1. Clone the repository:

```bash
git clone https://github.com/yourusername/responsive-personal-blog.git
cd responsive-personal-blog
