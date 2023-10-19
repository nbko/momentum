const quotes = [
{
    quote: "If I have seen further, it is by standing on the shoulders of giants.",
    author: "Isaac Newton",
},
{
    quote: "There are two ways to be fooled: one is to believe what isn't true, the other is to refuse to believe what is true.",
    author: "Søren Kierkegaard",
},
{
    quote: "The moment we want to believe something, we suddenly see all the arguments for it, and become blind to the arguments against it.",
    author: "George Bernard Shaw",
},
{
    quote: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
    author: "Mark Twain",
},
{
    quote: "The noblest pleasure is the joy of understanding.",
    author: "Leonardo da Vinci",
},
{
    quote: "God helps those who help themselves.",
    author: "Benjamin Franklin",
},
{
    quote: "To attain knowledge, add things everyday. To attain wisdom, remove things every day.",
    author: "Lao Tse",
},
{
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
},
{
    quote: "The only way to have a friend is to be one.",
    author: "Ralph Waldo Emerson",
},
{
    quote: "I will prepare and some day my chance will come.",
    author: "Abraham Lincoln",
}];

const quote = document.querySelector("#quote span:first-child"); // placing quote at the top
const author = document.querySelector("#quote span:last-child"); // placing author at the bottom

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
