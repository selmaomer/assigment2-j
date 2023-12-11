


const generateQuote = function() {
    const quotes = [
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: " Bernard M. Baruch"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: " If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        author: "K. Rowling, Harry Potter and the Goblet of Fire"
    },
    {
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "Maya Angelou"
    },
    {
        quote: "A friend is someone who knows all about you and still loves you.",
        author: "Elbert Hubbard"
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde"
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever .",
        author: "Mahatma Gandhi"
    },
    {
        quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
        author: " Oscar Wilde, The Happy Prince and Other Stories"
    },
    {
        quote: "It is better to be hated for what you are than to be loved for what you are not.",
        author: " Andre Gide, Autumn Leaves"
        
    }

];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}
 window.onload = function() {
     generateQuote();
    }


