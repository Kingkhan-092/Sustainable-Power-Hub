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



// Function to show the login form
function showLogin() {
    document.getElementById('login-tab').classList.add('active');
    document.getElementById('signup-tab').classList.remove('active');
    document.querySelector('.login-form-container').style.display = 'block';
    document.querySelector('.signup-form-container').style.display = 'none';
}

// Function to show the signup form
function showSignup() {
    document.getElementById('signup-tab').classList.add('active');
    document.getElementById('login-tab').classList.remove('active');
    document.querySelector('.login-form-container').style.display = 'none';
    document.querySelector('.signup-form-container').style.display = 'block';
}

// Set initial state to show login form
document.addEventListener('DOMContentLoaded', function() {
    showLogin();
});

// Function to handle form submission and show the pop-up
function handleSubmit(event, formType) {
    event.preventDefault();
    document.getElementById('popup-message').innerText = formType + " Successful!";
    document.getElementById('popup-modal').style.display = 'flex';
}

// Function to close the pop-up
function closePopup() {
    document.getElementById('popup-modal').style.display = 'none';
}
