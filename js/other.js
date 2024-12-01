function toggleContent() {
    const content = document.getElementById("expandable-content");
    const button = document.querySelector(".cta-button");

    if (content.style.display === "block") {
        content.style.display = "none"; // Hide content
        button.textContent = "Read More"; // Reset button text
        button.classList.remove("active");
    } else {
        content.style.display = "block"; // Show content
        slowScrollTo(content); // Custom smooth scroll to the content
        button.textContent = "Read Less"; // Change button text
        button.classList.add("active");
    }
}

function slowScrollTo(target) {
    const navbarHeight = document.querySelector('.navbar').offsetHeight; // Get the height of the navbar
    const targetPosition = target.offsetTop - navbarHeight; // Adjust scroll position to stop before the navbar
    const startPosition = window.pageYOffset; // Get the current scroll position
    const distance = targetPosition - startPosition; // Calculate the distance to scroll
    const duration = 1000; // Duration in ms (1 second for slow scroll)
    let startTime = null;

    function scrollStep(currentTime) {
        if (!startTime) startTime = currentTime; // Initialize the start time
        const timeElapsed = currentTime - startTime; // Calculate the elapsed time
        const run = easeInOut(timeElapsed, startPosition, distance, duration); // Calculate the scroll position
        window.scrollTo(0, run); // Scroll to the calculated position

        // If the scroll duration is complete, stop exactly at the target position
        if (timeElapsed < duration) {
            requestAnimationFrame(scrollStep); // Continue scrolling
        } else {
            // Ensure we stop exactly at the target position after the scroll is finished
            window.scrollTo(0, targetPosition);
        }
    }

    function easeInOut(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(scrollStep); // Start the scroll animation
}
