export interface CarModel {
  slug: string;
  series: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: string;
  image: string;
  bodyType: 'Sports Car' | 'SUV' | 'Sedan' | 'Electric';
  specs: {
    power: string;
    acceleration: string;
    topSpeed: string;
    torque: string;
    engine: string;
    consumption: string;
  };
  highlights: string[];
  colors: { name: string; hex: string }[];
}

export const models: CarModel[] = [
  {
    slug: '911-carrera',
    series: '911',
    name: '911 Carrera',
    tagline: 'The original. Timeless by design.',
    description: 'Six decades of evolution distilled into the most iconic silhouette in motoring.',
    longDescription:
      'The 911 has never chased trends — it sets them. With its rear-mounted flat-six, near-telepathic steering and a silhouette recognised across generations, the Carrera remains the definitive sports car. Every panel, every ratio, every millimetre of suspension travel is the result of sixty years of relentless refinement on road and track.',
    price: 'From $122,095',
    image: '/images/models/911.jpg',
    bodyType: 'Sports Car',
    specs: {
      power: '394 hp',
      acceleration: '3.9 s',
      topSpeed: '183 mph',
      torque: '450 Nm',
      engine: '3.0 L Twin-Turbo Flat-Six',
      consumption: '9.0 l/100 km',
    },
    highlights: [
      'Rear-engine architecture for unmatched traction',
      '8-speed Porsche Doppelkupplung (PDK)',
      'Porsche Active Suspension Management',
      'Staggered 20"/21" forged alloy wheels',
    ],
    colors: [
      { name: 'Guards Red', hex: '#c8102e' },
      { name: 'GT Silver', hex: '#b8bbbd' },
      { name: 'Jet Black', hex: '#111111' },
      { name: 'Gentian Blue', hex: '#1f3a5f' },
    ],
  },
  {
    slug: '911-gt3-rs',
    series: '911',
    name: '911 GT3 RS',
    tagline: 'Racing DNA. Road legal.',
    description: 'A motorsport prototype with a licence plate. Uncompromising, unfiltered, unforgettable.',
    longDescription:
      'The GT3 RS is where the wind tunnel wins every argument. A swan-neck rear wing, active aerodynamics borrowed from the 911 RSR and a naturally aspirated flat-six that screams to 9,000 rpm. It is not built for comfort. It is built for lap times, and for the driver who measures a weekend in tenths of a second.',
    price: 'From $241,300',
    image: '/images/porsche-hero.jpg',
    bodyType: 'Sports Car',
    specs: {
      power: '518 hp',
      acceleration: '3.2 s',
      topSpeed: '184 mph',
      torque: '465 Nm',
      engine: '4.0 L Naturally Aspirated Flat-Six',
      consumption: '13.2 l/100 km',
    },
    highlights: [
      '860 kg of downforce at 177 mph',
      'Double-wishbone front axle from the 911 RSR',
      'Drag Reduction System (DRS)',
      'Carbon fibre reinforced plastic body panels',
    ],
    colors: [
      { name: 'GT Silver', hex: '#b8bbbd' },
      { name: 'Arctic Grey', hex: '#6e7376' },
      { name: 'Racing Yellow', hex: '#f5c518' },
      { name: 'Jet Black', hex: '#111111' },
    ],
  },
  {
    slug: 'taycan',
    series: 'Taycan',
    name: 'Taycan Turbo S',
    tagline: 'Soul, electrified.',
    description: 'Silent violence. Two motors, 800-volt architecture, and instant, endless thrust.',
    longDescription:
      'The Taycan proved that electrification and emotion are not opposites. An 800-volt system enables repeatable launches without thermal fade, while the two-speed rear transmission gives it both brutal acceleration and efficient cruising. It is a Porsche first and an EV second — and it drives exactly that way.',
    price: 'From $209,000',
    image: '/images/models/taycan.jpg',
    bodyType: 'Electric',
    specs: {
      power: '938 hp',
      acceleration: '2.3 s',
      topSpeed: '162 mph',
      torque: '1,110 Nm',
      engine: 'Dual Permanent-Magnet Synchronous Motors',
      consumption: '20.1 kWh/100 km',
    },
    highlights: [
      '800-volt architecture — 10-80% in 18 minutes',
      'Two-speed transmission on the rear axle',
      'Porsche Active Ride adaptive suspension',
      'Up to 421 miles of WLTP range',
    ],
    colors: [
      { name: 'Frozen Blue', hex: '#7fa6c9' },
      { name: 'Ice Grey', hex: '#d6d9da' },
      { name: 'Volcano Grey', hex: '#4a4d4f' },
      { name: 'Carmine Red', hex: '#9b1b30' },
    ],
  },
  {
    slug: '718-cayman',
    series: '718',
    name: '718 Cayman GTS',
    tagline: 'Mid-engine balance. Pure feedback.',
    description: 'The purist\'s choice. A car that rewards precision over power.',
    longDescription:
      'With its engine between the axles, the 718 Cayman rotates around the driver. It is the most communicative car in the range — lighter, tighter and more playful than anything above it. For drivers who believe that the best road is a narrow one, this is the answer.',
    price: 'From $91,500',
    image: '/images/models/718.jpg',
    bodyType: 'Sports Car',
    specs: {
      power: '394 hp',
      acceleration: '4.0 s',
      topSpeed: '182 mph',
      torque: '430 Nm',
      engine: '4.0 L Naturally Aspirated Flat-Six',
      consumption: '10.9 l/100 km',
    },
    highlights: [
      'Mid-engine layout for neutral handling',
      '6-speed manual transmission available',
      'Porsche Torque Vectoring with LSD',
      '20 mm lowered GTS sports suspension',
    ],
    colors: [
      { name: 'Racing Yellow', hex: '#f5c518' },
      { name: 'Shark Blue', hex: '#0f5fa6' },
      { name: 'Chalk', hex: '#c9c5b8' },
      { name: 'Jet Black', hex: '#111111' },
    ],
  },
  {
    slug: 'cayenne',
    series: 'Cayenne',
    name: 'Cayenne Turbo GT',
    tagline: 'The sports car of SUVs.',
    description: 'Space and practicality, without a single compromise on dynamics.',
    longDescription:
      'The Cayenne saved Porsche, then it redefined what an SUV could be. The Turbo GT lapped the Nürburgring faster than most sports cars, thanks to a 4.0 L twin-turbo V8, rear-axle steering and active anti-roll stabilisation. It carries five people and still corners like it resents them.',
    price: 'From $198,900',
    image: '/images/models/cayenne.jpg',
    bodyType: 'SUV',
    specs: {
      power: '650 hp',
      acceleration: '3.1 s',
      topSpeed: '186 mph',
      torque: '850 Nm',
      engine: '4.0 L Twin-Turbo V8',
      consumption: '14.1 l/100 km',
    },
    highlights: [
      'Porsche Dynamic Chassis Control Sport',
      'Rear-axle steering as standard',
      'Carbon-ceramic braking system (PCCB)',
      'Titanium sports exhaust system',
    ],
    colors: [
      { name: 'Carrara White', hex: '#eceef0' },
      { name: 'Arctic Grey', hex: '#6e7376' },
      { name: 'Jet Black', hex: '#111111' },
      { name: 'Cashmere Beige', hex: '#c2b49a' },
    ],
  },
  {
    slug: 'panamera',
    series: 'Panamera',
    name: 'Panamera Turbo E-Hybrid',
    tagline: 'The grand tourer, reimagined.',
    description: 'Four seats, four doors, and the road manners of a thoroughbred.',
    longDescription:
      'The Panamera answers a question nobody thought could be answered: can a luxury saloon be a genuine Porsche? With an electrified V8, Porsche Active Ride suspension that keeps the body flat through every corner, and a cabin trimmed to Bespoke standards, the answer is unequivocal.',
    price: 'From $193,100',
    image: 'https://images.pexels.com/photos/13502811/pexels-photo-13502811.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    bodyType: 'Sedan',
    specs: {
      power: '670 hp',
      acceleration: '3.2 s',
      topSpeed: '196 mph',
      torque: '930 Nm',
      engine: '4.0 L Twin-Turbo V8 E-Hybrid',
      consumption: '2.0 l/100 km (combined)',
    },
    highlights: [
      'Porsche Active Ride — zero body roll',
      '56 miles of all-electric range',
      'Rear-axle steering with 4D Chassis Control',
      'Executive rear-seat comfort package',
    ],
    colors: [
      { name: 'Volcano Grey', hex: '#4a4d4f' },
      { name: 'Carmine Red', hex: '#9b1b30' },
      { name: 'Jet Black', hex: '#111111' },
      { name: 'Dolomite Silver', hex: '#a8adb0' },
    ],
  },
];

export const getModel = (slug?: string) => models.find((m) => m.slug === slug);
