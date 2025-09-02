import blueDartLogo from '../assets/logo/blue-dart-seeklogo.png';
import delhiveryLogo from '../assets/logo/delhivery-seeklogo.png';
import dtdcLogo from '../assets/logo/dtdc-seeklogo.png';
import indiaPostLogo from '../assets/logo/india-post-seeklogo.png';
import fedexLogo from '../assets/logo/fedex-seeklogo.png';
import dhlLogo from '../assets/logo/dhl-seeklogo.png';
import aramexLogo from '../assets/logo/aramex-seeklogo.png';

export const courierServices = [
  {
    id: 'bluedart',
    name: 'Blue Dart Express',
    logo: blueDartLogo,
    color: '#1e40af',
    trackingUrl: 'https://www.bluedart.com/web/guest/trackdartresultthirdparty?trackFor=0&trackNo=',
    description: 'Premium express courier service',
    website: 'https://www.bluedart.com'
  },
  {
    id: 'delhivery',
    name: 'Delhivery',
    logo: delhiveryLogo,
    color: '#059669',
    trackingUrl: 'https://www.delhivery.com/track/package/',
    description: 'E-commerce logistics specialist',
    website: 'https://www.delhivery.com'
  },
  {
    id: 'dtdc',
    name: 'DTDC',
    logo: dtdcLogo,
    color: '#dc2626',
    trackingUrl: 'https://www.dtdc.com/tracking.asp?strCnno=',
    description: 'Domestic and international courier',
    website: 'https://www.dtdc.com'
  },
  {
    id: 'indiapost',
    name: 'India Post',
    logo: indiaPostLogo,
    color: '#7c3aed',
    trackingUrl: 'https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx?lt=',
    description: 'Government postal service',
    website: 'https://www.indiapost.gov.in'
  },
  {
    id: 'ecomexpress',
    name: 'Ecom Express',
    logo: 'https://ecomexpress.in/wp-content/uploads/2021/03/ecom-express-logo.png',
    color: '#ea580c',
    trackingUrl: 'https://ecomexpress.in/track/',
    description: 'E-commerce delivery specialist',
    website: 'https://ecomexpress.in'
  },
  {
    id: 'xpressbees',
    name: 'XpressBees',
    logo: 'https://www.xpressbees.com/images/logo.png',
    color: '#f59e0b',
    trackingUrl: 'https://www.xpressbees.com/track/',
    description: 'E-commerce logistics platform',
    website: 'https://www.xpressbees.com'
  },
  {
    id: 'gati',
    name: 'Gati',
    logo: 'https://www.gati.com/images/gati-logo.png',
    color: '#0891b2',
    trackingUrl: 'https://www.gati.com/track-shipment?awb=',
    description: 'Express logistics and supply chain',
    website: 'https://www.gati.com'
  },
  {
    id: 'fedex',
    name: 'FedEx India',
    logo: fedexLogo,
    color: '#4f46e5',
    trackingUrl: 'https://www.fedex.com/fedextrack/?trknbr=',
    description: 'International express delivery',
    website: 'https://www.fedex.com'
  },
  {
    id: 'ekart',
    name: 'Ekart Logistics',
    logo: 'https://ekartlogistics.com/images/ekart-logo.png',
    color: '#f97316',
    trackingUrl: 'https://ekartlogistics.com/ekartlogistics-web/shipmenttrack/',
    description: 'Flipkart\'s logistics arm',
    website: 'https://ekartlogistics.com'
  },
  {
    id: 'shadowfax',
    name: 'Shadowfax',
    logo: 'https://shadowfax.in/images/shadowfax-logo.png',
    color: '#6366f1',
    trackingUrl: 'https://shadowfax.in/track/',
    description: 'Hyperlocal delivery network',
    website: 'https://shadowfax.in'
  },
  {
    id: 'dhl',
    name: 'DHL',
    logo: dhlLogo,
    color: '#d97706',
    trackingUrl: 'https://www.dhl.com/in-en/home/tracking/tracking-express.html?submit=1&tracking-id=',
    description: 'International logistics leader',
    website: 'https://www.dhl.com'
  },
  {
    id: 'aramex',
    name: 'Aramex',
    logo: aramexLogo,
    color: '#059669',
    trackingUrl: 'https://www.aramex.com/track/results?ShipmentNumber=',
    description: 'Global logistics and transportation',
    website: 'https://www.aramex.com'
  },
  {
    id: 'purpledrone',
    name: 'PurpleDrone',
    logo: 'https://purpledrone.in/images/purpledrone-logo.png',
    color: '#7c3aed',
    trackingUrl: 'https://purpledrone.in/track/',
    description: 'Drone delivery service',
    website: 'https://purpledrone.in'
  }
];

export const getTrackingUrl = (courierId, trackingNumber) => {
  const courier = courierServices.find(service => service.id === courierId);
  if (!courier) return null;
  return courier.trackingUrl + trackingNumber;
}; 