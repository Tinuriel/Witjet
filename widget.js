// widget.js

// Function to format date and time very nicely
function formatDateTime(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Function to update the widget content
function updateWidget() {
    const currentDate = new Date();
    const formattedDateTime = formatDateTime(currentDate);
    document.getElementById('widget').innerText = formattedDateTime;
}

// Update the wi
