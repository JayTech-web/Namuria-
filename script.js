// Get the login and register buttons
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');

// Get the login and dashboard sections
const loginSection = document.getElementById('login-register');
const dashboardSection = document.getElementById('dashboard');

// Hardcoded credentials for testing
const validUsername = 'testuser';
const validPassword = 'password123';

// Add event listener for the login button
loginBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === '' || password === '') {
        alert('Please fill in both fields.');
    } else if (username === validUsername && password === validPassword) {
        // Simulate a successful login
        alert(`Welcome, ${username}!`);
        
        // Hide the login section and show the dashboard
        loginSection.style.display = 'none';
        dashboardSection.style.display = 'block';

        // Populate categories
        populateCategories();
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

// Function to populate categories
function populateCategories() {
    const categoriesList = document.getElementById('categories');
    const categories = ['Science', 'Chemistry', 'Engineering'];

    categories.forEach(category => {
        const listItem = document.createElement('li');
        listItem.textContent = category;
        listItem.addEventListener('click', () => {
            alert(`You selected: ${category}`);
            // Here you can add functionality to show more options related to the selected category
        });
        categoriesList.appendChild(listItem);
    });
}

// Add event listener for the register button (currently does nothing)
registerBtn.addEventListener('click', () => {
    alert('Registration functionality is not implemented yet.');
});