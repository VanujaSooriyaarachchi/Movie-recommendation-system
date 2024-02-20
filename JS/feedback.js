document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const rating = document.getElementById("rating").value;
    const comments = document.getElementById("comments").value;

    if (!name || !email || !rating) {
        alert("Please fill in all required fields: Name, Email, and Rating.");
        return;
    }

    const summary = `Dear ${name}, Thank you very much for your feedback. You have rated our site as ${rating}, and your comment was "${comments}".`;

    alert(summary);

    document.getElementById("feedbackForm").reset();
});

function resetForm() {
    document.getElementById("feedbackForm").reset();
}
