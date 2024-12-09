// Check if dark mode is saved in localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Save dark mode preference to localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
}

// Twitch Follower Count Function
async function fetchTwitchFollowerCount() {
    const clientId = 'rffm694jo6hbtx6imyvpz5phn890nt';
    const accessToken = 'pmo4j1t6of8cq82geeu6ywo1qxmmvp';
    const twitchUsername = 'busarmydude';

    const userResponse = await fetch(`https://api.twitch.tv/helix/users?login=${twitchUsername}`, {
        headers: {
            'Client-ID': clientId,
            'Authorization': `Bearer ${accessToken}`
        }
    });
    const userData = await userResponse.json();
    const userId = userData.data[0].id;

    const followerResponse = await fetch(`https://api.twitch.tv/helix/users/follows?to_id=${userId}`, {
        headers: {
            'Client-ID': clientId,
            'Authorization': `Bearer ${accessToken}`
        }
    });
    const followerData = await followerResponse.json();
    const followerCount = followerData.total;

    // Display follower count on the page
    document.getElementById('twitch-follower-count').innerText = followerCount;
}

// Fetch follower count on page load
window.onload = function() {
    fetchTwitchFollowerCount();
};
