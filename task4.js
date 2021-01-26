var cities = ["karachi", "lahore", "Islamabad", "Multan", "Hyderabad"]
var selectedCities = [];

selectedCities[0] = cities[4];
selectedCities[1] = cities[0];
selectedCities[2] = cities[2];

document.write("Selected cities List <br/>")
for (c in selectedCities) {
    document.write(selectedCities[c] + " <br/>")
}