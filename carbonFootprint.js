document.addEventListener("DOMContentLoaded", function () {
   
    let form = document.querySelector("form");
    let drive = document.querySelector("#drive");
    let plane = document.querySelector("#plane");
    let publicTransport = document.querySelector("#public");
    let electricity = document.querySelector("#electricity");
    let diet = document.querySelector("#diet");
    let localFood = document.querySelector("#local");

    // calculate the carbon footprint after user clicks "submit"
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        let footprint = 0;

        let driveValue = parseFloat(drive.value) || 0;
        let planeValue = parseFloat(plane.value) || 0;
        let publicValue = parseFloat(publicTransport.value) || 0;
        let electricityValue = parseFloat(electricity.value) || 0;

        //  transportation 
        footprint += driveValue * 0.2 * 52; 
        footprint += planeValue * 0.25; 
        footprint += publicValue * 0.1 * 52;

        // Energy usage
        footprint += electricityValue * 12 * 0.85; 

        // Diet types
        let dietEmissions = {
            "meat": 3000,
            "balanced": 2000,
            "vegetarian": 1500,
            "pescatarian": 1700,
            "vegan": 1000
        };
        footprint += dietEmissions[diet.value] || 0;

        // Locally sourced food
        let localFoodImpact = {
            "rarely": 0,
            "sometimes": -100,
            "often": -300,
            "always": -500
        };
        footprint += localFoodImpact[localFood.value] || 0;

        alert("Your yearly carbon footprint is approximately " + Math.round(footprint) + " kg of CO2!");
    });
});
