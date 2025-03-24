let form = document.querySelector("form");
let drive = document.querySelector("#drive");
let plane = document.querySelector("#plane");
let publicTransport = document.querySelector("#public");
let electricity = document.querySelector("#electricity");
let diet = document.querySelector("#diet");
let localFood = document.querySelector("#local");

// When the form is submitted, calculate the carbon footprint
form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    // Initialize the footprint value
    let footprint = 0;

    // Convert input values to numbers (or '0' if empty)
    let driveValue = parseFloat(drive.value) || 0;
    let planeValue = parseFloat(plane.value) || 0;
    let publicValue = parseFloat(publicTransport.value) || 0;
    let electricityValue = parseFloat(electricity.value) || 0;

    // transportation 
    footprint += driveValue * 0.2 * 52; // Car emissions per year
    footprint += planeValue * 0.25; // Plane emissions per year
    footprint += publicValue * 0.1 * 52; // Public transport per year

    // Energy usage 
    footprint += electricityValue * 12 * 0.85; // Yearly electricity usage

    // Different diets
    let dietEmissions = {
        "meat": 3000,
        "balanced": 2000,
        "vegetarian": 1500,
        "pescatarian": 1700,
        "vegan": 1000
    };
    footprint += dietEmissions[diet.value] || 0;

    // locally sourced food 
    let localFoodImpact = {
        "rarely": 0,
        "sometimes": -100,
        "often": -300,
        "always": -500
    };
    footprint += localFoodImpact[localFood.value] || 0;

    alert("Your yearly carbon footprint is approximately " + Math.round(footprint) + " kg of CO2!");
});
