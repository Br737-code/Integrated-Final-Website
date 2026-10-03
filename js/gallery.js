/* ===== MEMBER 3: GALLERY IMAGE MODAL / LIGHTBOX (add to js/script.js) ===== */

document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return; // only run on gallery.html

    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    const thumbs = Array.from(document.querySelectorAll('.gallery-thumb'));

    let currentIndex = 0;
    let lastFocused = null;

    function showImage(index) {
        // wrap around at both ends
        currentIndex = (index + thumbs.length) % thumbs.length;
        const thumb = thumbs[currentIndex];
        lightboxImg.src = thumb.dataset.full;
        lightboxImg.alt = thumb.querySelector('img').alt;
        lightboxCaption.textContent = thumb.dataset.caption;
    }

    function openLightbox(index) {
        lastFocused = document.activeElement;
        showImage(index);
        lightbox.showModal();      // native modal: traps focus, Esc closes
        closeBtn.focus();
    }

    function closeLightbox() {
        lightbox.close();
    }

    thumbs.forEach(function (thumb, index) {
        thumb.addEventListener('click', function () {
            openLightbox(index);
        });
    });

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', function () { showImage(currentIndex - 1); });
    nextBtn.addEventListener('click', function () { showImage(currentIndex + 1); });

    // Click on the dark backdrop closes the lightbox
    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox) closeLightbox();
    });

    // Arrow keys move between images
    lightbox.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (event.key === 'ArrowRight') showImage(currentIndex + 1);
    });

    // Return focus to the thumbnail that opened the lightbox (Esc, X or backdrop)
    lightbox.addEventListener('close', function () {
        if (lastFocused) {
            setTimeout(function () {
                lastFocused.focus();
            }, 0);
        }
    });
});
