// Write a function that is called when button is on index.html is clicked
function getWeather() {

    // Get the value of the city name from the input field
    const city = document.getElementById("city").value;
    // This is my open weather map api key
    const api_key = "80099347892f43d1cde8dc275f2be7b5"; 
    // This is the url for our resource API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    // Now we use the fetch method to get the weather data
    fetch(url)
        .then(response => response.json()) // Get a response object in json format
        // Return the weather data as a promise and then later render it into html
        .then(data => {
            // Get the element where to render the weather data
            const resultDiv = document.getElementById("result");
            // Change content of the element using innerHTML method
            resultDiv.innerHTML = `
                <h3>Current temperature in ${data.name}: ${data.main.temp}&deg;C</h3>
                <h4>Description: ${data.weather[0].description}</h4>
            `;
        })
        // Display an error message if there was an error while getting the weather data
        .catch(error => {
            console.error(error);
            alert("Error getting weather data! Please try again or try another city.");
        });
}