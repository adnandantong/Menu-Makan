document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dinner-form');
    const thankYouMessage = document.getElementById('thank-you-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah formulir dari pengiriman default

        // Tampilkan pesan terima kasih
        thankYouMessage.classList.remove('hidden');
        form.reset(); // Reset formulir setelah pengiriman
    });
});
