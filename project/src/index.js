import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Films = [
  {
    image: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    text: 'Fantastic Beasts: The Crimes of Grindelwald',
  },
  {
    image: 'img/bohemian-rhapsody.jpg',
    text: 'Bohemian Rhapsody',
  },
  {
    image: 'img/macbeth.jpg',
    text: 'Macbeth',
  },
  {
    image: 'img/aviator.jpg',
    text: 'Aviator',
  },
  {
    image: 'img/we-need-to-talk-about-kevin.jpg',
    text: 'We need to talk about Kevin',
  },
  {
    image: 'img/what-we-do-in-the-shadows.jpg',
    text: 'What We Do in the Shadows',
  },
  {
    image: 'img/revenant.jpg',
    text: 'Revenant',
  },
  {
    image: 'img/johnny-english.jpg',
    text: 'Johnny English',
  },
  {
    image: 'img/shutter-island.jpg',
    text: 'Shutter Island',
  },
  {
    image: 'img/pulp-fiction.jpg',
    text: 'Pulp Fiction',
  },
  {
    image: 'img/no-country-for-old-men.jpg',
    text: 'No Country for Old Men',
  },
  {
    image: 'img/snatch.jpg',
    text: 'Snatch',
  },
  {
    image: 'img/moonrise-kingdom.jpg',
    text: 'Moonrise Kingdom',
  },
  {
    image: 'img/seven-years-in-tibet.jpg',
    text: 'Seven Years in Tibet',
  },
  {
    image: 'img/midnight-special.jpg',
    text: 'Midnight Special',
  },
  {
    image: 'img/war-of-the-worlds.jpg',
    text: 'War of the Worlds',
  },
  {
    image: 'img/dardjeeling-limited.jpg',
    text: 'Dardjeeling Limited',
  },
  {
    image: 'img/orlando.jpg',
    text: 'Orlando',
  },
  {
    image: 'img/mindhunter.jpg',
    text: 'Mindhunter',
  },
  {
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
