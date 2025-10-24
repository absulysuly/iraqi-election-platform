# Iraqi Election Platform

A web-based dashboard for monitoring Iraqi election statistics and real-time updates.

## Features

- **Real-time Statistics**: Monitor total registered voters, votes cast, turnout rate, and polling stations
- **Regional Results**: View election results by region with visual bar charts
- **Live Updates**: Real-time updates from polling stations across Iraq
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Bilingual Support**: Arabic and English headers

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No additional dependencies required

### Installation

1. Clone the repository:
```bash
git clone https://github.com/absulysuly/iraqi-election-platform.git
cd iraqi-election-platform
```

2. Open the dashboard:
   - Simply open `index.html` in your web browser
   - Or use a local web server:
```bash
python -m http.server 8000
# Then visit http://localhost:8000 in your browser
```

## Usage

- The dashboard automatically updates statistics every 10 seconds
- Real-time updates appear every 5 seconds
- Press 'R' key to manually refresh the data
- Hover over stat cards for visual effects

## Dashboard Components

1. **Statistics Cards**
   - Total Registered Voters
   - Votes Cast
   - Turnout Rate
   - Polling Stations

2. **Regional Results Chart**
   - Visual representation of turnout by region
   - Covers major Iraqi cities (Baghdad, Basra, Mosul, Erbil)

3. **Real-time Updates Feed**
   - Live updates from polling stations
   - Scrollable feed with latest 5 updates

## File Structure

```
iraqi-election-platform/
├── index.html      # Main dashboard page
├── styles.css      # Styling and layout
├── script.js       # Interactive features and animations
└── README.md       # This file
```

## Technologies Used

- HTML5
- CSS3 (with animations and gradients)
- Vanilla JavaScript (ES6+)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Designed for the Iraqi election monitoring system
- Built with accessibility and user experience in mind