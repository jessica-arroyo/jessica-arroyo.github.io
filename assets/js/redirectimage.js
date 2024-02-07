document.addEventListener("DOMContentLoaded", function() {
    // Get all images with the "redirect-image" class
    var images = document.querySelectorAll(".redirect-image");

    // Add click event listener to each image
    images.forEach(function(image) {
        image.addEventListener("click", function() {
            // Get the URL of the image
            var url = image.parentNode.getAttribute("href");

            // Redirect to the URL
            window.location.href = url;
        });
    });
});
