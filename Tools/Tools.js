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



// Function to show the selected tool
function showTool(toolId) {
    // Remove 'active' class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Hide all tool contents
    document.querySelectorAll('.tool').forEach(tool => {
        tool.style.display = 'none';
    });
    
    // Add 'active' class to the clicked tab
    document.getElementById(toolId + '-tab').classList.add('active');
    
    // Show the selected tool
    document.getElementById(toolId).style.display = 'block';
}

// Set initial state to show Energy Savings Calculator
document.addEventListener('DOMContentLoaded', function() {
    showTool('energy-savings-calculator');
});

// Show and hide loading spinner
function showLoading() {
    document.getElementById('loadingSpinner').style.display = 'block';
}

function hideLoading() {
    document.getElementById('loadingSpinner').style.display = 'none';
}

// Validate Energy Savings form
function validateEnergySavingsForm() {
    const currentUsage = document.getElementById('currentUsage').value;
    const savingsRate = document.getElementById('savingsRate').value;
    
    if (currentUsage <= 0 || savingsRate < 0 || savingsRate > 100) {
        alert('Please enter valid values for current usage and savings rate.');
        return false;
    }
    return true;
}

// Calculate monthly energy savings
function calculateEnergySavings() {
    if (!validateEnergySavingsForm()) return;

    showLoading();

    // Simulate a delay for loading spinner (remove if not needed)
    setTimeout(() => {
        try {
            const currentUsage = document.getElementById('currentUsage').value;
            const savingsRate = document.getElementById('savingsRate').value;
            const savings = (currentUsage * (savingsRate / 100)).toFixed(2);

            document.getElementById('savingsResult').innerText = `You can save ${savings} kWh per month.`;
            
            renderSavingsChart(currentUsage, savings);

        } catch (error) {
            console.error('Error calculating savings:', error);
        } finally {
            hideLoading(); // Ensure spinner hides even if an error occurs
        }
    }, 100); // Adjust timeout as needed
}

// Render chart for energy savings
function renderSavingsChart(currentUsage, savings) {
    const ctx = document.getElementById('savingsChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Current Usage', 'Estimated Savings'],
            datasets: [{
                label: 'kWh',
                data: [currentUsage, savings],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    document.getElementById('savingsChart').style.display = 'block';
}

// Calculate ROI based on investment, savings, and time period
function calculateROI() {
    showLoading();
    
    const initialCost = parseFloat(document.getElementById('initialCost').value);
    const monthlySavings = parseFloat(document.getElementById('monthlySavings').value);
    const months = parseFloat(document.getElementById('months').value);

    if (isNaN(initialCost) || isNaN(monthlySavings) || isNaN(months) || initialCost <= 0 || months <= 0) {
        alert('Please enter valid numbers for all fields.');
        hideLoading();
        return;
    }

    const totalSavings = (monthlySavings * months).toFixed(2);
    const roiInDollars = (((totalSavings - initialCost) / initialCost) * 100).toFixed(2);

    // Convert ROI to INR (assuming 1 USD = 75 INR)
    const exchangeRate = 75;
    const roiInINR = (roiInDollars * exchangeRate).toFixed(2);

    document.getElementById('roiResult').innerText = `Your ROI is ${roiInINR} INR (${roiInDollars}% in USD).`;

    hideLoading();
}

// Calculate carbon footprint based on energy usage and emission factor
function calculateCarbonFootprint() {
    showLoading();
    
    const energyUsage = document.getElementById('energyUsage').value;
    const emissionFactor = document.getElementById('emissionFactor').value;
    const carbonFootprint = (energyUsage * emissionFactor).toFixed(2);
    
    document.getElementById('carbonFootprintResult').innerText = `Your carbon footprint is ${carbonFootprint} kg CO2 per month.`;
    
    hideLoading();
}
