 let quotes = [
    ' A computer is basically a programable machine capable to perfromarithmatic and logical operations automatcally and sequentially. ',
    ' law of physics you should know thermodynamics - energy is trnansferred from one place to another and from one form to another ',
    'use of stack - in photoshop  for undo and endo  ',
    'a stck is a linear data structure that follows the principle of last in first out(LIFO).',
    'to keep record of item such as music, videos, images which link to one another we use link list.',
    'sorting refer to the process of arranging a list or a sequence of given elements or data into any particular order.',
    '(a + b)2 = a2 + 2ab + b2',
    ' a2 - b2 = (a+b)(a-b)'

]

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML= quotes[randomNumber];
}