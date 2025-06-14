// Add this script to improve SEO performance
document.addEventListener('DOMContentLoaded', function() {
    // Add alt text to images that might be missing it
    document.querySelectorAll('img:not([alt])').forEach(img => {
        img.alt = img.src.split('/').pop().split('.')[0].replace(/-/g, ' ');
    });

    // Add title attributes to links
    document.querySelectorAll('a:not([title])').forEach(link => {
        link.title = link.textContent.trim();
    });

    // Improve accessibility
    document.querySelectorAll('button:not([aria-label])').forEach(button => {
        button.setAttribute('aria-label', button.textContent.trim());
    });
}); 