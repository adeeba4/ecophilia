document.addEventListener("DOMContentLoaded", function () {
    let drive = document.querySelector("#drive");
    let plane = document.querySelector("#plane");
    let publicTransport = document.querySelector("#public");
    let electricity = document.querySelector("#electricity");
    let diet = document.querySelector("#diet");
    let localFood = document.querySelector("#local");
    let form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let footprint = 0;
        
        // Transportation footprint (approximate values in kg CO2 per km)
        footprint += (drive.value ? parseFloat(drive.value) * 0.2 * 52 : 0); // Car emissions per year
        footprint += (plane.value ? parseFloat(plane.value) * 0.25 : 0); // Plane emissions per year
        footprint += (publicTransport.value ? parseFloat(publicTransport.value) * 0.1 * 52 : 0); // Public transport per year

        // Energy Usage
        footprint += (electricity.value ? parseFloat(electricity.value) * 12 * 0.85 : 0); // Yearly electricity usage

        // Diet choices (estimated kg CO2 per year)
        let dietValues = {
            "meat": 3000,
            "balanced": 2000,
            "vegetarian": 1500,
            "pescatarian": 1700,
            "vegan": 1000
        };
        footprint += diet.value ? dietValues[diet.value] : 0;

        // Local food impact reduction
        let localImpact = {
            "rarely": 0,
            "sometimes": -100,
            "often": -300,
            "always": -500
        };
        footprint += localFood.value ? localImpact[localFood.value] : 0;

        alert(`Your estimated yearly carbon footprint is approximately ${Math.round(footprint)} kg of CO2.`);
    });
});
