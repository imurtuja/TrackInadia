# TrackIndia - Indian Courier Tracking Platform

A modern, interactive website for tracking packages across all major Indian courier services. Built with React, Vite, and Tailwind CSS v4.1.

## 🚀 Features

- **Unified Tracking**: Track packages across 13+ Indian courier services
- **Modern UI**: Clean, responsive design with Tailwind CSS v4.1
- **Quick Access**: Direct links to official courier tracking pages
- **Mobile Friendly**: Optimized for all devices
- **Real-time**: Instant tracking with direct URL redirection

## 📦 Supported Courier Services

| Courier Service             | Tracking URL Pattern                                                                                      | Description                         |
| --------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| **Blue Dart Express**       | `https://www.bluedart.com/web/guest/trackdartresultthirdparty?trackFor=0&trackNo={TRACKING_NUMBER}`       | Premium express courier service     |
| **Delhivery**               | `https://www.delhivery.com/track/package/{TRACKING_NUMBER}`                                               | E-commerce logistics specialist     |
| **DTDC**                    | `https://www.dtdc.com/tracking.asp?strCnno={TRACKING_NUMBER}`                                             | Domestic and international courier  |
| **India Post (Speed Post)** | `https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx?lt={TRACKING_NUMBER}` | Government postal service           |
| **Ecom Express**            | `https://ecomexpress.in/track/{TRACKING_NUMBER}`                                                          | E-commerce delivery specialist      |
| **XpressBees**              | `https://www.xpressbees.com/track/{TRACKING_NUMBER}`                                                      | E-commerce logistics platform       |
| **Gati**                    | `https://www.gati.com/track-shipment?awb={TRACKING_NUMBER}`                                               | Express logistics and supply chain  |
| **FedEx India**             | `https://www.fedex.com/fedextrack/?trknbr={TRACKING_NUMBER}`                                              | International express delivery      |
| **Ekart Logistics**         | `https://ekartlogistics.com/track/{TRACKING_NUMBER}`                                                      | Flipkart's logistics arm            |
| **Shadowfax**               | `https://shadowfax.in/track/{TRACKING_NUMBER}`                                                            | Hyperlocal delivery network         |
| **DHL**                     | `https://www.dhl.com/in-en/home/tracking/tracking-express.html?submit=1&tracking-id={TRACKING_NUMBER}`    | International logistics leader      |
| **Aramex**                  | `https://www.aramex.com/track/results?ShipmentNumber={TRACKING_NUMBER}`                                   | Global logistics and transportation |
| **PurpleDrone**             | `https://purpledrone.in/track/{TRACKING_NUMBER}`                                                          | Drone delivery service              |

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Build Tool**: Vite (latest)
- **Styling**: Tailwind CSS v4.1
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd TrackIndia
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📱 How to Use

1. **Enter Tracking Number**: Input your courier tracking number in the main form
2. **Select Courier**: Choose your courier service from the dropdown
3. **Track Package**: Click "Track Package" to open the official tracking page
4. **Quick Track**: Once you enter a tracking number, you can quickly try it with different couriers

## 🎨 Features

### Main Tracking Form

- Clean, modern interface
- Dropdown selection for all courier services
- Real-time validation
- Loading states with animations

### Quick Track Section

- Appears when tracking number is entered
- Grid layout of all courier services
- Color-coded service cards
- One-click tracking for each service

### Services Showcase

- Complete list of supported courier services
- Service descriptions and logos
- Feature highlights

## 🔧 Development

### Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── TrackingForm.jsx
│   ├── ServicesShowcase.jsx
│   └── Footer.jsx
├── data/
│   └── courierServices.js
├── App.jsx
├── main.jsx
└── index.css
```

### Adding New Courier Services

To add a new courier service, update the `courierServices` array in `src/data/courierServices.js`:

```javascript
{
  id: 'newcourier',
  name: 'New Courier Service',
  logo: '📦',
  color: '#your-color',
  trackingUrl: 'https://newcourier.com/track/{TRACKING_NUMBER}',
  description: 'Description of the service'
}
```

## 🌟 Key Features

- **Direct URL Integration**: All tracking links open the official courier websites
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: Built with Vite for optimal development and build times
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support or questions, please open an issue in the repository.

---

**Made with ❤️ for India's courier tracking needs**
