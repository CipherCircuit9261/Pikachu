// Smooth scroll functionality to scroll to sections
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
    });
}

// Gallery Hover Effect - Enlarges the image when hovering
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach((image) => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.05)';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

// Optional: Adding a lightbox effect for gallery images
const lightbox = document.createElement('div');
lightbox.style.position = 'fixed';
lightbox.style.top = '0';
lightbox.style.left = '0';
lightbox.style.width = '100vw';
lightbox.style.height = '100vh';
lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
lightbox.style.display = 'none';
lightbox.style.justifyContent = 'center';
lightbox.style.alignItems = 'center';
lightbox.style.zIndex = '1000';
lightbox.style.cursor = 'pointer';
document.body.appendChild(lightbox);

const lightboxImage = document.createElement('img');
lightbox.appendChild(lightboxImage);

galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImage.src = image.src;
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
