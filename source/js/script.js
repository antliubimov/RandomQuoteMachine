'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857',
  ];

  const body = document.querySelector(`body`);
  const svgs = document.querySelectorAll(`svg`);
  const tweetBtn = document.querySelector(`.button-tweet`);
  const tumblrBtn = document.querySelector(`.button-tumblr`);
  const newQuoteBtn = document.querySelector(`#new-quote`);
  const text = document.querySelector(`#text`);
  const author = document.querySelector(`#author`);

  const randomNumber = (min, max) => {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  };

  const randomColor = () => colors[randomNumber(0, colors.length - 1)];

  const setColor = () => {
    const newColor = randomColor();
    body.style.backgroundColor = newColor;
    [...svgs].forEach((svg) => (svg.style.fill = newColor));
    newQuoteBtn.style.backgroundColor = newColor;
  };

  const setHref = () => {
    tweetBtn.href = `https://twitter.com/intent/tweet?hashtags=quotes&text=${text.innerText} ${author.innerText}`;
    tumblrBtn.href = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&content=${text.innerText} ${author.innerText}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com`;
  };

  const responseQuote = async () => {
    try {
      const requestQuote = `https://quote-garden.herokuapp.com/api/v2/quotes/random`;
      const response = await fetch(requestQuote);
      if (response.status === 200) {
        return response.json();
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  const getNewQuote = async () => {
    setColor();
    const data = await responseQuote();
    const { quoteText, quoteAuthor } = data.quote;
    text.innerText = quoteText;
    author.innerText = quoteAuthor;
    setHref();
  };

  newQuoteBtn.addEventListener(`click`, getNewQuote);

  getNewQuote();
});
