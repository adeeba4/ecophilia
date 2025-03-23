let walked = document.querySelector("#walk");
let bag = document.querySelector("#bags");
let recycled = document.querySelector("#recycle");
let off = document.querySelector("#turnOff");
let shower = document.querySelector("#shower");
let tree = document.querySelector("#tree");
let transport = document.querySelector("#transport");
let submit = document.querySelector("#submit");

let activities = [
    "Walked to work 🚶", 
    "Used reusable bags 🛍", 
    "Recycled properly ♻️", 
    "Turned off appliances when not in use 📴", 
    "Took a shorter shower 🚿", 
    "Planted a tree 🌳", 
    "Took public transport 🚌"
];
let points = [1, 1, 2, 1, 2, 5, 4];
let totalPoints = 0;
let checked = [];

if (walked) walked.addEventListener("input", checkActivity);
if (bag) bag.addEventListener("input", checkActivity);
if (recycled) recycled.addEventListener("input", checkActivity);
if (off) off.addEventListener("input", checkActivity);
if (shower) shower.addEventListener("input", checkActivity);
if (tree) tree.addEventListener("input", checkActivity);
if (transport) transport.addEventListener("input", checkActivity);

if (submit) {
    submit.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        var activity = document.createElement("h2");
        activity.innerHTML = "Your eco-friendly activites of the day:";
        document.getElementById("tableContainer").appendChild(activity);
        // Create the table
        const table = document.createElement("table");
        const headerRow = document.createElement("tr");
        const headers = ["Activity", "Points"];
        headers.forEach(header => {
            const th = document.createElement("th");
            th.textContent = header;
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);
        
        // Add the checked activities and their points to the table
        checked.forEach((activity, index) => {
            const row = document.createElement("tr");
            const activityCell = document.createElement("td");
            activityCell.textContent = activity; // Display activity name
            row.appendChild(activityCell);

            const pointsCell = document.createElement("td");
            pointsCell.textContent = points[activities.indexOf(activity)]; // Get corresponding points
            row.appendChild(pointsCell);

            table.appendChild(row);
        });

        // Create and append the total points row
        const totalRow = document.createElement("tr");
        const totalActivity = document.createElement("td");
        totalActivity.textContent = "Total Points";
        totalRow.appendChild(totalActivity);

        const totalPointsCell = document.createElement("td");
        totalPointsCell.textContent = totalPoints; // Display total points
        totalRow.appendChild(totalPointsCell);
        table.appendChild(totalRow);

        // Replace the existing table or append a new one
        const existingTable = document.querySelector("table");
        if (existingTable) {
            existingTable.replaceWith(table); // Replace existing table if present
        } else {
            document.getElementById("tableContainer").appendChild(table); // Append the new table if no existing one
        }
    });
}

function checkActivity() {
    totalPoints = 0; 
    checked = []; // Clear checked array
    const checkboxes = [walked, bag, recycled, off, shower, tree, transport];
    
    checkboxes.forEach((checkbox, index) => {
        if (checkbox && checkbox.checked) {
            totalPoints += points[index]; // Add points for checked activity
            checked.push(activities[index]); // Add the activity to checked array
        }
    });
}
