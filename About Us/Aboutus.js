//Hero section image change
document.addEventListener("DOMContentLoaded", function() {
    const hero = document.querySelector(".hero"); // Select the hero section
    const heroImages = [
        '/img/image1.jpg',
        '/img/image2.jpg',
        '/img/image3.jpg',
        '/img/image4.jpg',
        '/img/image5.jpg',
        '/img/image6.avif',
        '/img/image6.jpg',
        '/img/image7.jpg',
        '/img/image8.jpg',
        '/img/image9.jpg',
        '/img/image10.jpg',
        '/img/image11.webp',
        '/img/image12.jpg',
        '/img/image13.jpg',
        '/img/image14.jpg',
        '/img/image15.jpg',
        '/img/image16.jpg',
        '/img/image17.jpg',
        '/img/image18.jpg',
        '/img/image19.jpg',
        '/img/image20.jpg'
    ];
    
    let currentHeroImageIndex = -1; // Initialize with an invalid index

    // Function to get a random index
    function getRandomIndex() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * heroImages.length);
        } while (newIndex === currentHeroImageIndex); // Ensure the new index is not the same as the current one
        return newIndex;
    }

    // Function to change the background image
    function changeHeroBackgroundImage() {
        currentHeroImageIndex = getRandomIndex(); // Get a new random index
        hero.style.backgroundImage = `url(${heroImages[currentHeroImageIndex]})`; // Update the background image
    }

    // Change background image every 5 seconds with a transition effect
    setInterval(() => {
        hero.style.transition = 'background-image 1s ease'; // Apply transition effect
        changeHeroBackgroundImage(); // Change the image

        // Remove the transition effect after 1 second
        setTimeout(() => {
            hero.style.transition = 'none';
        }, 1000);
    }, 5000);
});







// Function to start counting up to the target number with scaling effect
function countUp(element) {
    const target = +element.getAttribute('data-target');
    let count = 0;
    const speed = 150; // Adjust speed (lower is slower)
    const scaleValue = 1.1; // Scaling factor after reaching target

    const updateCount = () => {
        const inc = Math.ceil(target / speed);
        if (count < target) {
            count += inc;
            element.innerText = count;
            setTimeout(updateCount, 1);
        } else {
            element.innerText = target;
            element.style.transform = `scale(${scaleValue})`;
        }
    };

    updateCount();
}

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle counting up and scaling when stats section is scrolled into view
function handleCountUp() {
    const stats = document.querySelectorAll('.impact-statistics .count');
    let countUpTriggered = false;

    const countUpStats = () => {
        if (!countUpTriggered) {
            stats.forEach(stat => {
                countUp(stat);
            });
            countUpTriggered = true;
        }
    };

    const checkStatsInView = () => {
        stats.forEach(stat => {
            if (isInViewport(stat)) {
                countUpStats();
            }
        });
    };

    // Check initially on page load
    checkStatsInView();

    // Check again on scroll
    window.addEventListener('scroll', checkStatsInView);
}

// Initialize counting up and scaling when stats section is scrolled into view
handleCountUp();
