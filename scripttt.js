document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('avatar-upload').addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                document.querySelector('.avatar').style.backgroundImage = 'url(' + reader.result + ')';
            }
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('next-button').addEventListener('click', function () {
        const locationInput = document.getElementById('location-input').value;
        window.location.href = 'tt.html';
    });
});
