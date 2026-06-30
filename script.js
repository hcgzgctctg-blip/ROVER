// RoVer Login Page - Interactive Scripts

document.addEventListener('DOMContentLoaded', function() {
    // Discord Login Button
    const discordBtn = document.querySelector('.btn-discord');
    if (discordBtn) {
        discordBtn.addEventListener('click', function() {
            alert('Discord login would redirect to Discord OAuth here');
            // In production: window.location.href = 'https://discord.com/api/oauth2/authorize?...';
        });
    }

    // Return Button
    const returnBtn = document.querySelector('.btn-return');
    if (returnBtn) {
        returnBtn.addEventListener('click', function() {
            alert('Returning to RoVer...');
            // In production: window.location.href = 'https://rover.example.com';
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#signin') {
                e.preventDefault();
                console.log('Navigating to:', href);
            }
        });
    });

    // Add animation on page load
    const loginCard = document.querySelector('.login-card');
    if (loginCard) {
        loginCard.style.animation = 'slideIn 0.5s ease-out';
    }
});

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

console.log('RoVer Login Page Loaded Successfully!');
