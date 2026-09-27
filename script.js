function showMessage(message) {
    alert(message);
}

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    cards.forEach(function (card) {
        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
const eventForm = document.getElementById("eventForm");
const eventsSection = document.getElementById("events");

let savedEvents = JSON.parse(localStorage.getItem("campusEvents")) || [];

function displayEvent(eventData) {
    const newEvent = document.createElement("div");

    newEvent.className = "card";

    newEvent.innerHTML = `
        <h3>${eventData.name}</h3>
        <p>Date: ${eventData.date}</p>
        <p>${eventData.description}</p>
        <button onclick="showMessage('${eventData.name} details coming soon!')">
            View Event
        </button>
    `;

    eventsSection.appendChild(newEvent);
}

savedEvents.forEach(displayEvent);

eventForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newEventData = {
        name: document.getElementById("eventName").value,
        date: document.getElementById("eventDate").value,
        description: document.getElementById("eventDescription").value
    };

    savedEvents.push(newEventData);

    localStorage.setItem("campusEvents", JSON.stringify(savedEvents));

    displayEvent(newEventData);

    eventForm.reset();

    alert("Event saved successfully!");
});