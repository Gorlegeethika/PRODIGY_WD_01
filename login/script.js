document.addEventListener('DOMContentLoaded', () => {
    const profileName = localStorage.getItem('username');
    const profileNameElement = document.getElementById('profile-name');
    
    if (profileName) {
        profileNameElement.textContent = profileName;
    } else {
        profileNameElement.textContent = 'Guest';
    }
});
