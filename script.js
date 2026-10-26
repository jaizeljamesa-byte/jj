function saveDate() {
    const date = document.getElementById("date").value;

    if (!date) {
        alert("Please choose a date!");
        return;
    }

    localStorage.setItem("date", date);
    window.location.href = "place.html";
}

function savePlace() {
    const place = document.getElementById("place").value;

    localStorage.setItem("place", place);
    window.location.href = "food.html";
}

function saveFood() {
    const food = document.getElementById("food").value;

    localStorage.setItem("food", food);
    window.location.href = "result.html";
}

if (window.location.pathname.endsWith("result.html")) {
    const date = localStorage.getItem("date");
    const place = localStorage.getItem("place");
    const food = localStorage.getItem("food");

    document.getElementById("dateResult").textContent =
        "📅 Date: " + (date || "Not selected");

    document.getElementById("placeResult").textContent =
        "📍 Place: " + (place || "Not selected");

    document.getElementById("foodResult").textContent =
        "🍕 Food: " + (food || "Not selected");
}