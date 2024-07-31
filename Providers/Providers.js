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







const providersData = {
    'solar-providers': [
        { name: 'SunPower', location: 'North America', energyType: 'Solar', services: 'Installation, Maintenance', rating: 4.9, profile: 'https://www.sunpower.com/' },
        { name: 'JA Solar', location: 'Asia', energyType: 'Solar', services: 'Installation, Maintenance', rating: 4.7, profile: 'https://www.jasolar.com/' },
        { name: 'Q CELLS', location: 'Europe', energyType: 'Solar', services: 'Consultation', rating: 4.8, profile: 'https://www.q-cells.com/' }
    ],
    'wind-providers': [
        { name: 'Vestas', location: 'Europe', energyType: 'Wind', services: 'Installation, Maintenance', rating: 4.5, profile: 'https://www.vestas.com/' },
        { name: 'GE Renewable Energy', location: 'North America', energyType: 'Wind', services: 'Maintenance', rating: 4.6, profile: 'https://www.ge.com/renewableenergy/' },
        { name: 'Siemens Gamesa', location: 'Asia', energyType: 'Wind', services: 'Consultation', rating: 4.4, profile: 'https://www.siemensgamesa.com/' }
    ],
    'hydro-providers': [
        { name: 'Andritz Hydro', location: 'South America', energyType: 'Hydro', services: 'Consultation, Maintenance', rating: 4.7, profile: 'https://www.andritz.com/hydro-en/' },
        { name: 'Voith Hydro', location: 'North America', energyType: 'Hydro', services: 'Installation', rating: 4.6, profile: 'https://voith.com/en/hydro.html' },
        { name: 'GE Hydro', location: 'Europe', energyType: 'Hydro', services: 'Maintenance', rating: 4.5, profile: 'https://www.ge.com/renewableenergy/hydro' }
    ],
    'efficiency-solutions': [
        { name: 'Energy Star', location: 'North America', energyType: 'Energy Efficiency', services: 'Consultation', rating: 4.9, profile: 'https://www.energystar.gov/' },
        { name: 'EcoHome', location: 'Europe', energyType: 'Energy Efficiency', services: 'Installation', rating: 4.8, profile: 'https://www.ecohome.net/' },
        { name: 'Green Building Council', location: 'Asia', energyType: 'Energy Efficiency', services: 'Consultation', rating: 4.7, profile: 'https://www.gbca.org.au/' }
    ],
    'ev-charging-stations': [
        { name: 'ChargePoint', location: 'North America', energyType: 'EV Charging', services: 'Installation, Maintenance', rating: 4.8, profile: 'https://www.chargepoint.com/' },
        { name: 'EVBox', location: 'Europe', energyType: 'EV Charging', services: 'Installation', rating: 4.7, profile: 'https://www.evbox.com/' },
        { name: 'Blink Charging', location: 'Asia', energyType: 'EV Charging', services: 'Consultation', rating: 4.6, profile: 'https://blinkcharging.com/' }
    ],
    'building-materials': [
        { name: 'Green Building Store', location: 'Europe', energyType: 'Building Materials', services: 'Consultation', rating: 4.9, profile: 'https://www.greenbuildingstore.co.uk/' },
        { name: 'Earth-Friendly Materials', location: 'North America', energyType: 'Building Materials', services: 'Installation', rating: 4.8, profile: 'https://earthfriendlymaterials.com/' },
        { name: 'BioHome', location: 'Asia', energyType: 'Building Materials', services: 'Consultation, Installation', rating: 4.7, profile: 'https://www.biohome.com/' }
    ]
};

function showProviderCategory(categoryId) {
    document.querySelectorAll('.provider-category').forEach(category => {
        category.style.display = 'none';
    });

    const category = document.getElementById(categoryId);
    category.style.display = 'block';

    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(categoryId + '-tab').classList.add('active');

    displayProviders(categoryId);
}

function applyFilters() {
    const searchValue = document.getElementById('search-input').value.toLowerCase();
    const locationFilter = document.getElementById('location-filter').value;
    const energyTypeFilter = document.getElementById('energy-type-filter').value;
    const servicesFilter = document.getElementById('services-filter').value;
    const ratingFilter = parseFloat(document.getElementById('rating-filter').value) || 0;

    document.querySelectorAll('.provider-category').forEach(category => {
        category.querySelectorAll('.provider').forEach(provider => {
            const providerName = provider.querySelector('h3').textContent.toLowerCase();
            const providerLocation = provider.getAttribute('data-location');
            const providerEnergyType = provider.getAttribute('data-energy-type');
            const providerServices = provider.getAttribute('data-services');
            const providerRating = parseFloat(provider.getAttribute('data-rating'));

            const isMatching = 
                (searchValue === '' || providerName.includes(searchValue)) &&
                (locationFilter === '' || providerLocation === locationFilter) &&
                (energyTypeFilter === '' || providerEnergyType === energyTypeFilter) &&
                (servicesFilter === '' || providerServices.includes(servicesFilter)) &&
                (ratingFilter === 0 || providerRating >= ratingFilter);

            provider.style.display = isMatching ? 'block' : 'none';
        });
    });
}

function displayProviders(categoryId) {
    const container = document.getElementById(categoryId);
    container.innerHTML = '';

    providersData[categoryId].forEach(provider => {
        const providerDiv = document.createElement('div');
        providerDiv.className = 'provider';
        providerDiv.setAttribute('data-location', provider.location);
        providerDiv.setAttribute('data-energy-type', provider.energyType);
        providerDiv.setAttribute('data-services', provider.services);
        providerDiv.setAttribute('data-rating', provider.rating);

        providerDiv.innerHTML = `
            <h3>${provider.name}</h3>
            <p>Location: ${provider.location}</p>
            <p>Energy Type: ${provider.energyType}</p>
            <p>Services: ${provider.services}</p>
            <p>Rating: ${provider.rating} Stars</p>
            <a href="${provider.profile}" target="_blank">View Profile</a>
        `;

        container.appendChild(providerDiv);
    });

    applyFilters(); // Apply filters to newly added providers
}

// Initialize by showing the solar providers tab
showProviderCategory('solar-providers');
