// Dashboard Statistics Data
const stats = {
    totalVoters: 25678934,
    votesCast: 0,
    pollingStations: 8542
};

// Function to animate counting numbers
function animateValue(id, start, end, duration) {
    const element = document.getElementById(id);
    const range = end - start;
    const increment = range / (duration / 16); // 60 FPS
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        
        if (id === 'turnoutRate') {
            element.textContent = current.toFixed(1) + '%';
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Function to update statistics
function updateStats() {
    // Simulate real-time vote counting
    const currentVotes = Math.floor(Math.random() * stats.totalVoters * 0.8);
    const turnout = (currentVotes / stats.totalVoters) * 100;
    
    animateValue('totalVoters', 0, stats.totalVoters, 2000);
    animateValue('votesCast', 0, currentVotes, 2000);
    animateValue('turnoutRate', 0, turnout, 2000);
    animateValue('pollingStations', 0, stats.pollingStations, 2000);
}

// Function to add new updates
function addUpdate(time, text) {
    const updatesList = document.getElementById('updatesList');
    const updateItem = document.createElement('div');
    updateItem.className = 'update-item';
    updateItem.style.opacity = '0';
    updateItem.style.transform = 'translateX(-20px)';
    
    updateItem.innerHTML = `
        <span class="update-time">${time}</span>
        <span class="update-text">${text}</span>
    `;
    
    updatesList.insertBefore(updateItem, updatesList.firstChild);
    
    // Animate the new update
    setTimeout(() => {
        updateItem.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        updateItem.style.opacity = '1';
        updateItem.style.transform = 'translateX(0)';
    }, 100);
    
    // Keep only the last 5 updates
    while (updatesList.children.length > 5) {
        updatesList.removeChild(updatesList.lastChild);
    }
}

// Function to simulate real-time updates
function simulateUpdates() {
    const updates = [
        'New polling station data received',
        'Voter registration confirmed',
        'Ballot counting in progress',
        'Observer reports submitted',
        'Regional turnout data updated',
        'Polling station security confirmed',
        'Early voting results available',
        'Mobile voting units deployed'
    ];
    
    const randomUpdate = updates[Math.floor(Math.random() * updates.length)];
    const currentTime = new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    
    addUpdate(currentTime, randomUpdate);
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', () => {
    console.log('Dashboard initialized');
    
    // Initial stats update
    updateStats();
    
    // Update stats every 10 seconds
    setInterval(updateStats, 10000);
    
    // Add random updates every 5 seconds
    setInterval(simulateUpdates, 5000);
    
    // Add initial timestamp
    console.log('Dashboard loaded at:', new Date().toLocaleString());
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        console.log('Dashboard visible - refreshing data');
        updateStats();
    }
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Press 'R' to refresh stats
    if (e.key === 'r' || e.key === 'R') {
        console.log('Manual refresh triggered');
        updateStats();
        simulateUpdates();
    }
});

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        updateStats,
        addUpdate,
        animateValue
    };
}
