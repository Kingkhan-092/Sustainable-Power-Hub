// Typing effect for hero section
const phrases = [
    "Empowering Sustainable Energy for All",
    "Harnessing the Sun's Power",
    "Wind for a Cleaner Future",
    "Lighting the Way to a Greener Tomorrow",
    "Solar Solutions for Everyone",
    "Renewable Energy for a Brighter Future"
];

let currentPhraseIndex = 0; // Index of the current phrase being typed
let currentLetterIndex = 0; // Index of the current letter being typed
let currentText = ''; // Current text being displayed in the typing effect
const typingElement = document.querySelector('.typing'); // Element where text will be typed

// Function to type out the current phrase
function type() {
    if (currentLetterIndex < phrases[currentPhraseIndex].length) {
        currentText += phrases[currentPhraseIndex].charAt(currentLetterIndex); // Add the next letter to the text
        typingElement.textContent = currentText; // Update the text content
        currentLetterIndex++;
        setTimeout(type, 30); // Delay before typing the next letter
    } else {
        setTimeout(erase, 2000); // Wait before starting to erase the text
    }
}

// Function to erase the current phrase
function erase() {
    if (currentLetterIndex > 0) {
        currentText = currentText.slice(0, -1); // Remove the last letter from the text
        typingElement.textContent = currentText; // Update the text content
        currentLetterIndex--;
        setTimeout(erase, 20); // Delay before erasing the next letter
    } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to the next phrase
        setTimeout(type, 500); // Wait before typing the next phrase
    }
}

// Start the typing effect when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    type();
});


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

// On scroll effect for hero section
const heroContent = document.querySelector('.hero-content'); // Select the hero content element

// Function to handle scroll event and adjust hero content position
function handleHeroScroll() {
    const scrollPosition = window.scrollY; // Get the vertical scroll position
    heroContent.style.transform = `translateY(-${scrollPosition * 0.3}px)`; // Move hero content based on scroll position
}

// Listen for scroll events and call handleHeroScroll function
window.addEventListener('scroll', handleHeroScroll);

// Initial call to set the initial position based on initial scroll
handleHeroScroll();

// Function to expand and reveal hidden resources
function expandResources() {
    var hiddenResources = document.querySelectorAll('.educational-resources .resource.hidden');
    hiddenResources.forEach(function(resource) {
        resource.classList.remove('hidden'); // Remove hidden class to reveal resources
    });

    // Hide the "see more" button after revealing resources
    var seeMoreButton = document.getElementById('see-more-button');
    seeMoreButton.style.display = 'none';
}

// Function to toggle visibility and state based on button click
function toggleVisibility() {
    expandResources(); // Expand if currently collapsed
}

// Initialize carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const carouselContent = document.querySelector('.carousel-content'); // Select the carousel content
    const items = document.querySelectorAll('.carousel-item'); // Select all carousel items
    const totalItems = items.length; // Get the total number of items
    let currentIndex = 0; // Index of the currently displayed item
    
    // Create and append control buttons for the carousel
    const prevBtn = document.createElement('button');
    const nextBtn = document.createElement('button');
    prevBtn.classList.add('carousel-control', 'prev');
    nextBtn.classList.add('carousel-control', 'next');
    prevBtn.innerHTML = '&lt;'; // Previous button symbol
    nextBtn.innerHTML = '&gt;'; // Next button symbol
    document.querySelector('.carousel-container').appendChild(prevBtn); // Add previous button to the container
    document.querySelector('.carousel-container').appendChild(nextBtn); // Add next button to the container

    // Function to update the carousel display based on current index
    function updateCarousel() {
        const offset = -currentIndex * 100; // Calculate the offset for the current item
        carouselContent.style.transform = `translateX(${offset}%)`; // Apply the transform to display the current item
    }

    // Function to show the next slide
    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalItems; // Move to the next item
        updateCarousel(); // Update the display
    }

    // Function to show the previous slide
    function showPreviousSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Move to the previous item
        updateCarousel(); // Update the display
    }

    // Event listeners for carousel control buttons
    prevBtn.addEventListener('click', function() {
        showPreviousSlide();
    });

    nextBtn.addEventListener('click', function() {
        showNextSlide();
    });

    // Initialize carousel display
    updateCarousel();
    
    // Automatically change slides every 5 seconds
    const autoSlideInterval = setInterval(showNextSlide, 5000);

    // Function to reset the auto-slide interval if the user manually changes slides
    function resetAutoSlide() {
        clearInterval(autoSlideInterval); // Clear the existing interval
        setInterval(showNextSlide, 5000); // Start a new interval
    }

    // Reset auto-slide interval on manual slide change
    prevBtn.addEventListener('click', resetAutoSlide);
    nextBtn.addEventListener('click', resetAutoSlide);
});
