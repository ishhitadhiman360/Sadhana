import React, { useState, useEffect } from 'react';

const MeditationQuotes = () => {
  const quotes = [
    "Meditation is not a way of making your mind quiet. It's a way of entering into the quiet that's already there. :- Deepak Chopra",
    "Quiet the mind, and the soul will speak. :- Ma Jaya Sati Bhagavati",
    "Meditation brings wisdom; lack of meditation leaves ignorance. Know well what leads you forward and what holds you back, and choose the path that leads to wisdom. :- Buddha",
    "In meditation, you can have many things  insights, breakthroughs, visions, a sense of the divine. But the most profound gift is the spaciousness that comes in the midst of it all. :- Tara Brach",
    "The mind is like water. When it's turbulent, it's difficult to see. When it's calm, everything becomes clear. :- Prasad Mahes",
    "Your mental health is a priority. Your happiness is an essential. Your self-care is a necessity. If that means sitting in a quiet room, lying in bed all day, or finding joy in little things  do it. :- Akiroq Brost",
    "Meditation is the ultimate mobile device; you can use it anywhere, anytime, unobtrusively. :- Sharon Salzberg",
    "To enjoy the glow of good health, you must exercise. :- Gene Tunney",
    "Meditation is the tongue of the soul and the language of our spirit. :- Jeremy Taylor",

    "Mental health…is not a destination, but a process. Is about how you drive, not where you are going. :- Noam Shpancer",
    "Meditation is the secret of all growth in spiritual life and knowledge. :- James Allen",
  ];

  const [currentQuote, setCurrentQuote] = useState('');

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    generateRandomQuote();
  }, []);

 
  const [quoteText, author] = currentQuote.split(':');

  return (
    <div>
      <blockquote>
        <p>{quoteText}</p>
        <footer>{author}</footer>
      </blockquote>
    </div>
  );
};

export default MeditationQuotes;
