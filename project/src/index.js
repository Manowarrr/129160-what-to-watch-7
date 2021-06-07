import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Films = [
  {
    id: 1,
    image: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    text: 'Fantastic Beasts: The Crimes of Grindelwald',
  },
  {
    id: 2,
    image: 'img/bohemian-rhapsody.jpg',
    text: 'Bohemian Rhapsody',
  },
  {
    id: 3,
    image: 'img/macbeth.jpg',
    text: 'Macbeth',
  },
  {
    id: 4,
    image: 'img/aviator.jpg',
    text: 'Aviator',
  },
  {
    id: 5,
    image: 'img/we-need-to-talk-about-kevin.jpg',
    text: 'We need to talk about Kevin',
  },
  {
    id: 6,
    image: 'img/what-we-do-in-the-shadows.jpg',
    text: 'What We Do in the Shadows',
  },
  {
    id: 7,
    image: 'img/revenant.jpg',
    text: 'Revenant',
  },
  {
    id: 8,
    image: 'img/johnny-english.jpg',
    text: 'Johnny English',
  },
  {
    id: 9,
    image: 'img/shutter-island.jpg',
    text: 'Shutter Island',
  },
  {
    id: 10,
    image: 'img/pulp-fiction.jpg',
    text: 'Pulp Fiction',
  },
  {
    id: 11,
    image: 'img/no-country-for-old-men.jpg',
    text: 'No Country for Old Men',
  },
  {
    id: 12,
    image: 'img/snatch.jpg',
    text: 'Snatch',
  },
  {
    id: 13,
    image: 'img/moonrise-kingdom.jpg',
    text: 'Moonrise Kingdom',
  },
  {
    id: 14,
    image: 'img/seven-years-in-tibet.jpg',
    text: 'Seven Years in Tibet',
  },
  {
    id: 15,
    image: 'img/midnight-special.jpg',
    text: 'Midnight Special',
  },
  {
    id: 16,
    image: 'img/war-of-the-worlds.jpg',
    text: 'War of the Worlds',
  },
  {
    id: 17,
    image: 'img/dardjeeling-limited.jpg',
    text: 'Dardjeeling Limited',
  },
  {
    id: 18,
    image: 'img/orlando.jpg',
    text: 'Orlando',
  },
  {
    id: 19,
    image: 'img/mindhunter.jpg',
    text: 'Mindhunter',
  },
  {
    id: 20,
    image: 'img/midnight-special.jpg',
    text: 'Midnight Special',
  },
];

const Promo = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  date: '2014',
};

ReactDOM.render(
  <React.StrictMode>
    <App films={Films} promo={Promo}/>
  </React.StrictMode>,
  document.getElementById('root'));
