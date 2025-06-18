document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('create-account-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const pw = document.getElementById('new-password').value;
            const cpw = document.getElementById('confirm-password').value;
            if (pw !== cpw) {
                alert('Passwords do not match!');
                e.preventDefault();
            }
        });
    }
});