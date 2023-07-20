var quote = [{
    quotes : `"Be yourself; everyone else is already taken."`,
    writer : `-Oscar Wilde`
},
{
    quotes : `"So many books, so little time."`,
    writer : `― Frank Zappa`
},
{
    quotes : `"A room without books is like a body without a soul."`,
    writer : `― Marcus Tullius Cicero`
},
{
    quotes : `"You only live once, but if you do it right, once is enough."`,
    writer : `― Mae West`
},
{
    quotes : `"Be the change that you wish to see in the world."`,
    writer : `― Mahatma Gandhi`
},
{
    quotes : `"If you tell the truth, you don't have to remember anything."`,
    writer : `― Mark Twain`
},
{
    quotes : `"A friend is someone who knows all about you and still loves you."`,
    writer : `― Elbert Hubbard`
},
{
    quotes : `"As he read, I fell in love the way you fall asleep: slowly, and then all at once."`,
    writer : `― John Green`
},
{
    quotes : `"We are all in the gutter, but some of us are looking at the stars."`,
    writer : `-Oscar Wilde`
},
{
    quotes : `"Life is what happens to us while we are making other plans."`,
    writer : `― Allen Saunders`
},
]


function generateQuote(){
       var randomNumber = Math.floor(Math.random() * quote.length);
        document.getElementById('quotes').innerHTML= quote[randomNumber].quotes
        document.getElementById('author').innerHTML= quote[randomNumber].writer
}
