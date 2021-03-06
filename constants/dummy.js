import { SIZES } from './theme';

export const Catagories =[
  {
    id:1,
    name:'connect',
    checked: true,
  },
  {
    id:2,
    name:'mentor',
    checked: true
  },
  {
    id:3,
    name:'upskilling',
    checked: true
  },
  {
    id:4,
    name:'impact',
    checked: true
  }
]
export const Events = [
  {
    id: 1,
    type: 'CONCERT',
    title: 'The Weekend',
    startingTime: '2020/12/21 09:10 PM',
    image: require('../assets/images/event_1.png'),
    description:
      'Non exercitation ullamco reprehenderit incididunt. Officia incididunt id exercitation velit aliqua ut deserunt do non. Aliquip sunt dolor enim occaecat ullamco id consectetur .',
  },
  {
    id: 2,
    type: 'SHOW',
    title: 'Firemasters',
    startingTime: '2020/12/25 08:00 PM',
    image: require('../assets/images/event_2.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur elit adipiscing elit. Venenatis pulvinar a amet in, suspendisse vitae, posuere eu tortor et. Und commodo, fermentum, mauris leo eget.',
  },
  {
    id: 3,
    type: 'SHOW',
    title: 'Yoda',
    startingTime: '2020/12/01 08:00 PM',
    image: require('../assets/images/event_test_1.jpeg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur elit adipiscing elit. Venenatis pulvinar a amet in, suspendisse vitae, posuere eu tortor et. Und commodo, fermentum, mauris leo eget.',
  },
];
export const FavoriteEvents = [
  {
    id: 1,
    type: 'Movie',
    title: 'The Wasp',
    startingTime: '2020/11/20 09:10 PM',
    image: require('../assets/images/fav_1.jpeg'),
    description:
      'Non exercitation ullamco reprehenderit incididunt. Officia incididunt id exercitation velit aliqua ut deserunt do non. Aliquip sunt dolor enim occaecat ullamco id consectetur .',
  },
  {
    id: 2,
    type: 'Science',
    title: 'Solar Energy',
    startingTime: '2020/03/25 08:00 PM',
    image: require('../assets/images/fav_2.jpeg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur elit adipiscing elit. Venenatis pulvinar a amet in, suspendisse vitae, posuere eu tortor et. Und commodo, fermentum, mauris leo eget.',
  },
  {
    id: 3,
    type: 'Drawing',
    title: 'Competition',
    startingTime: '2021/7/9 08:00 PM',
    image: require('../assets/images/fav_3.jpg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur elit adipiscing elit. Venenatis pulvinar a amet in, suspendisse vitae, posuere eu tortor et. Und commodo, fermentum, mauris leo eget.',
  },
];


export const Region = {
  latitude: 37.58817,
  longitude: -122.4903973,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005 * (SIZES.width / SIZES.height),
}

export const MapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1b1b1b',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2c2c2c',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8a8a8a',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4e4e4e',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d',
      },
    ],
  },
];

const dummyData = {Catagories,FavoriteEvents, Events, Region, MapStyle };

export default dummyData;
