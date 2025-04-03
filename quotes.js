const quotes = [
    {
        text: "I think, therefore I am.",
        author: "René Descartes",
        fakeAuthors: ["Plato", "Aristotle"]
    },
    {
        text: "To be or not to be, that is the question.",
        author: "William Shakespeare",
        fakeAuthors: ["Oscar Wilde", "Charles Dickens"]
    },
    {
        text: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
        fakeAuthors: ["Walt Whitman", "Emily Dickinson"]
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        fakeAuthors: ["Bill Gates", "Mark Zuckerberg"]
    },
    {
        text: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt",
        fakeAuthors: ["Winston Churchill", "John F. Kennedy"]
    },
    {
        text: "I have a dream.",
        author: "Martin Luther King Jr.",
        fakeAuthors: ["Malcolm X", "Barack Obama"]
    },
{
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker",
        fakeAuthors: ["Henry Ford", "Jack Welch"]
    },
    {
        text: "That's one small step for a man, one giant leap for mankind.",
        author: "Neil Armstrong",
        fakeAuthors: ["Buzz Aldrin", "Yuri Gagarin"]
    },
    {
        text: "The most wasted of all days is one without laughter.",
        author: "Nicolas Chamfort",
        fakeAuthors: ["Mark Twain", "Voltaire"]
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
        fakeAuthors: ["Paul McCartney", "Bob Dylan"]
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        fakeAuthors: ["Helen Keller", "Rosa Parks"]
    },
    {
        text: "The journey of a thousand miles begins with a single step.",
        author: "Lao Tzu",
        fakeAuthors: ["Confucius", "Sun Tzu"]
    },
    {
        text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Ralph Waldo Emerson",
        fakeAuthors: ["Henry David Thoreau", "Walt Whitman"]
    },
    {
        text: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        author: "J.K. Rowling",
        fakeAuthors: ["Jane Austen", "George Orwell"]
    },
    {
        text: "The only true wisdom is in knowing you know nothing.",
        author: "Socrates",
        fakeAuthors: ["Plato", "Aristotle"]
    },
    {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky",
        fakeAuthors: ["Michael Jordan", "Babe Ruth"]
    },
    {
        text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author: "Helen Keller",
        fakeAuthors: ["Anne Frank", "Mother Teresa"]
    },
    {
        text: "The power of imagination makes us infinite.",
        author: "John Muir",
        fakeAuthors: ["Henry David Thoreau", "Ralph Waldo Emerson"]
    },
    {
        text: "Don't count the days, make the days count.",
        author: "Muhammad Ali",
        fakeAuthors: ["Mike Tyson", "Sugar Ray Leonard"]
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
        fakeAuthors: ["Desmond Tutu", "Martin Luther King Jr."]
    },
    {
        text: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain",
        fakeAuthors: ["Oscar Wilde", "George Bernard Shaw"]
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        fakeAuthors: ["Winston Churchill", "Dwight D. Eisenhower"]
    },
    {
        text: "The purpose of our lives is to be happy.",
        author: "Dalai Lama",
        fakeAuthors: ["Thich Nhat Hanh", "Eckhart Tolle"]
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
        fakeAuthors: ["John F. Kennedy", "Harry S. Truman"]
    },
    {
        text: "It does not do to dwell on dreams and forget to live.",
        author: "J.K. Rowling",
        fakeAuthors: ["C.S. Lewis", "J.R.R. Tolkien"]
    },
    {
        text: "The most courageous act is still to think for yourself. Aloud.",
        author: "Coco Chanel",
        fakeAuthors: ["Audrey Hepburn", "Marilyn Monroe"]
    },
    {
        text: "The best revenge is massive success.",
        author: "Frank Sinatra",
        fakeAuthors: ["Elvis Presley", "Dean Martin"]
    },
    {
        text: "You must do the things you think you cannot do.",
        author: "Eleanor Roosevelt",
        fakeAuthors: ["Amelia Earhart", "Marie Curie"]
    },
    {
        text: "What we think, we become.",
        author: "Buddha",
        fakeAuthors: ["Confucius", "Lao Tzu"]
    },
    {
        text: "The greatest wealth is to live content with little.",
        author: "Plato",
        fakeAuthors: ["Aristotle", "Socrates"]
    },
    {
        text: "The only way to achieve the impossible is to believe it is possible.",
        author: "Alice in Wonderland movie",
        fakeAuthors: ["Walt Disney", "Lewis Carroll"]
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb",
        fakeAuthors: ["Japanese Proverb", "African Proverb"]
    },
    {
        text: "If you are going through hell, keep going.",
        author: "Winston Churchill",
        fakeAuthors: ["Dwight D. Eisenhower", "George S. Patton"]
    },
    {
        text: "The future starts today, not tomorrow.",
        author: "Pope John Paul II",
        fakeAuthors: ["Dalai Lama", "Mother Teresa"]
    },
    {
        "text": "If you shed tears when you miss the sun, you also miss the stars.",
        "author": "Rabindranath Tagore",
        "fakeAuthors": ["Khalil Gibran", "Rumi"]
    },
    {
        "text": "Let life be beautiful like summer flowers and death like autumn leaves.",
        "author": "Rabindranath Tagore",
        "fakeAuthors": ["Walt Whitman", "Emily Dickinson"]
    },
    {
        "text": "The world has kissed my soul with its pain, asking for its return in songs.",
        "author": "Rabindranath Tagore",
        "fakeAuthors": ["Pablo Neruda", "Maya Angelou"]
    },
    {
        "text": "Two roads diverged in a wood, and I— I took the one less traveled by, and that has made all the difference.",
        "author": "Robert Frost",
        "fakeAuthors": ["Walt Whitman", "Henry David Thoreau"]
    },
    {
        "text": "Not all of us can do great things. But we can do small things with great love.",
        "author": "Mother Teresa",
        "fakeAuthors": ["Dalai Lama", "Martin Luther King Jr."]
    },
    {
        "text": "Prayer in action is love, love in action is service.",
        "author": "Mother Teresa",
        "fakeAuthors": ["St. Francis of Assisi", "Thich Nhat Hanh"]
    },
    {
        "text": "War is what happens when language fails.",
        "author": "Margaret Atwood",
        "fakeAuthors": ["George Orwell", "Noam Chomsky"]
    },
    {
        "text": "Education is the most powerful weapon which you can use to change the world.",
        "author": "Nelson Mandela",
        "fakeAuthors": ["Malala Yousafzai", "Kofi Annan"]
    },
    {
        "text": "If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.",
        "author": "Nelson Mandela",
        "fakeAuthors": ["Desmond Tutu", "Barack Obama"]
    },
    {
        "text": "One child, one teacher, one book, one pen can change the world.",
        "author": "Malala Yousafzai",
        "fakeAuthors": ["Emma Watson", "Greta Thunberg"]
    },
    {
        "text": "Learning never exhausts the mind.",
        "author": "Leonardo da Vinci",
        "fakeAuthors": ["Albert Einstein", "Marie Curie"]
    },
    {
        "text": "It is not enough to have a good mind. The main thing is to use it well.",
        "author": "René Descartes",
        "fakeAuthors": ["Blaise Pascal", "Baruch Spinoza"]
    },
    {
        "text": "If you would be a real seeker after truth, it is necessary that at least once in your life you doubt, as far as possible, all things.",
        "author": "René Descartes",
        "fakeAuthors": ["Socrates", "Friedrich Nietzsche"]
    },
    {
        "text": "We cannot solve our problems with the same thinking we used when we created them.",
        "author": "Albert Einstein",
        "fakeAuthors": ["Niels Bohr", "Richard Feynman"]
    },
    {
        "text": "The true sign of intelligence is not knowledge but imagination.",
        "author": "Albert Einstein",
        "fakeAuthors": ["Stephen Hawking", "Carl Sagan"]
    },
    {
        "text": "A person who never made a mistake never tried anything new.",
        "author": "Albert Einstein",
        "fakeAuthors": ["Thomas Edison", "Nikola Tesla"]
    },
    {
        "text": "The only source of knowledge is experience.",
        "author": "Albert Einstein",
        "fakeAuthors": ["John Locke", "David Hume"]
    },
    {
        "text": "Education is what remains after one has forgotten what one has learned in school.",
        "author": "Albert Einstein",
        "fakeAuthors": ["Maria Montessori", "John Dewey"]
    },
    {
        "text": "Pure mathematics is, in its way, the poetry of logical ideas.",
        "author": "Albert Einstein",
        "fakeAuthors": ["Bertrand Russell", "Kurt Gödel"]
    },
    {
        "text": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        "author": "Albert Einstein",
        "fakeAuthors": ["Richard Feynman", "Michio Kaku"]
    },
    {
        "text": "Look deep into nature, and then you will understand everything better.",
        "author": "Albert Einstein",
        "fakeAuthors": ["Charles Darwin", "Jane Goodall"]
    },
    {
        "text": "If I have seen further than others, it is by standing upon the shoulders of giants.",
        "author": "Isaac Newton",
        "fakeAuthors": ["Galileo Galilei", "Johannes Kepler"]
    },
    {
        "text": "Well-behaved women rarely make history.",
        "author": "Laurel Thatcher Ulrich",
        "fakeAuthors": ["Gloria Steinem", "Ruth Bader Ginsburg"]
    },
    {
        "text": "Insanity is doing the same thing over and over again and expecting different results.",
        "author": "Rita Mae Brown",
        "fakeAuthors": ["Albert Einstein", "Mark Twain"]
    },
    {
        "text": "The purpose of art is washing the dust of daily life off our souls.",
        "author": "Pablo Picasso",
        "fakeAuthors": ["Vincent van Gogh", "Salvador Dalí"]
    },
    {
        "text": "A picture is a poem without words.",
        "author": "Horace",
        "fakeAuthors": ["John Keats", "William Wordsworth"]
    },
    {
        "text": "The art of a people is a true mirror to their minds.",
        "author": "Jawaharlal Nehru",
        "fakeAuthors": ["Mahatma Gandhi", "Rabindranath Tagore"]
    },
    {
        "text": "I found I could say things with color and shapes that I couldn't say any other way - things I had no words for.",
        "author": "Georgia O'Keeffe",
        "fakeAuthors": ["Frida Kahlo", "Mary Cassatt"]
    },
    {
        "text": "What art is, in reality, is this missing link, not the links which exist. It's not what you see that is art; art is the gap.",
        "author": "Marcel Duchamp",
        "fakeAuthors": ["Andy Warhol", "Jackson Pollock"]
    },
    {
        "text": "Every artist dips his brush in his own soul, and paints his own nature into his pictures.",
        "author": "Henry Ward Beecher",
        "fakeAuthors": ["Ralph Waldo Emerson", "John Ruskin"]
    },
    {
        "text": "I paint flowers so they will not die.",
        "author": "Frida Kahlo",
        "fakeAuthors": ["Georgia O'Keeffe", "Tamara de Lempicka"]
    },
    {
        "text": "The work of art is a scream of freedom.",
        "author": "Christo",
        "fakeAuthors": ["Jean-Michel Basquiat", "Keith Haring"]
    },
    {
        "text": "Art is not what you see, but what you make others see.",
        "author": "Edgar Degas",
        "fakeAuthors": ["Claude Monet", "Pierre-Auguste Renoir"]
    },
    {
        "text": "Art, freedom and creativity will change society faster than politics.",
        "author": "Victor Pinchuk",
        "fakeAuthors": ["Banksy", "Ai Weiwei"]
    },
    {
        "text": "Painting is poetry that is seen rather than felt, and poetry is painting that is felt rather than seen.",
        "author": "Leonardo da Vinci",
        "fakeAuthors": ["Michelangelo", "Raphael"]
    },
    {
        "text": "Painting is self-discovery. Every good artist paints what he is.",
        "author": "Jackson Pollock",
        "fakeAuthors": ["Willem de Kooning", "Mark Rothko"]
    },
    {
        "text": "Photography takes an instant out of time, altering life by holding it still.",
        "author": "Dorothea Lange",
        "fakeAuthors": ["Ansel Adams", "Henri Cartier-Bresson"]
    },
    {
        "text": "Who controls the past controls the future; who controls the present controls the past.",
        "author": "George Orwell",
        "fakeAuthors": ["Aldous Huxley", "Ray Bradbury"]
    },
    {
        "text": "All animals are equal, but some animals are more equal than others.",
        "author": "George Orwell",
        "fakeAuthors": ["Kurt Vonnegut", "Margaret Atwood"]
    },
    {
        "text": "War is peace. Freedom is slavery. Ignorance is strength.",
        "author": "George Orwell",
        "fakeAuthors": ["Noam Chomsky", "Naomi Klein"]
    },
    {
        "text": "Freedom is the freedom to say that two plus two make four.",
        "author": "George Orwell",
        "fakeAuthors": ["Bertrand Russell", "Karl Popper"]
    },
    {
        "text": "But if thought corrupts language, language can also corrupt thought.",
        "author": "George Orwell",
        "fakeAuthors": ["Ludwig Wittgenstein", "Ferdinand de Saussure"]
    },
    {
        "text": "Perhaps one did not want to be loved so much as to be understood.",
        "author": "George Orwell",
        "fakeAuthors": ["Albert Camus", "Jean-Paul Sartre"]
    },
    {
        "text": "If you want to keep a secret, you must also hide it from yourself.",
        "author": "George Orwell",
        "fakeAuthors": ["Philip K. Dick", "William S. Burroughs"]
    },
    {
        "text": "Never confuse a single defeat with a final defeat.",
        "author": "F. Scott Fitzgerald",
        "fakeAuthors": ["Ernest Hemingway", "John Steinbeck"]
    },
    {
        "text": "Show me a hero and I will write you a tragedy.",
        "author": "F. Scott Fitzgerald",
        "fakeAuthors": ["Tennessee Williams", "Arthur Miller"]
    },
    {
        "text": "Every moment is a fresh beginning.",
        "author": "T.S. Eliot",
        "fakeAuthors": ["W.H. Auden", "Ezra Pound"]
    },
    {
        "text": "Hope is the thing with feathers, that perches in the soul, and sings the tune without the words, and never stops at all.",
        "author": "Emily Dickinson",
        "fakeAuthors": ["Sylvia Plath", "Elizabeth Barrett Browning"]
    },
    {
        "text": "If I can stop one heart from breaking, I shall not live in vain.",
        "author": "Emily Dickinson",
        "fakeAuthors": ["Walt Whitman", "Robert Frost"]
    },
    {
        "text": "Forever is composed of nows.",
        "author": "Emily Dickinson",
        "fakeAuthors": ["Rainer Maria Rilke", "Pablo Neruda"]
    },
    {
        "text": "We cannot live only for ourselves. A thousand fibers connect us with our fellow men.",
        "author": "Herman Melville",
        "fakeAuthors": ["Nathaniel Hawthorne", "Henry David Thoreau"]
    },
    {
        "text": "Where words fail, music speaks.",
        "author": "Hans Christian Andersen",
        "fakeAuthors": ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart"]
    },
    {
        "text": "A day wasted on others is not wasted on one's self.",
        "author": "Charles Dickens",
        "fakeAuthors": ["Victor Hugo", "Leo Tolstoy"]
    },
    {
        "text": "It was the best of times, it was the worst of times.",
        "author": "Charles Dickens",
        "fakeAuthors": ["Thomas Hardy", "George Eliot"]
    },
    {
        "text": "The pain of parting is nothing to the joy of meeting again.",
        "author": "Charles Dickens",
        "fakeAuthors": ["Jane Austen", "Charlotte Brontë"]
    },
    {
        "text": "We need never be ashamed of our tears.",
        "author": "Charles Dickens",
        "fakeAuthors": ["Mark Twain", "Oscar Wilde"]
    },
    {
        "text": "You is smart, you is kind, you is important.",
        "author": "Kathryn Stockett",
        "fakeAuthors": ["Toni Morrison", "Alice Walker"]
    },
    {
        "text": "It isn't what we say or think that defines us, but what we do.",
        "author": "Jane Austen",
        "fakeAuthors": ["Virginia Woolf", "George Eliot"]
    },
    {
        "text": "Happiness in marriage is entirely a matter of chance.",
        "author": "Jane Austen",
        "fakeAuthors": ["Charlotte Brontë", "Louisa May Alcott"]
    },
    {
        "text": "I disapprove of what you say, but I will defend to the death your right to say it.",
        "author": "Voltaire",
        "fakeAuthors": ["John Stuart Mill", "Thomas Paine"]
    },
    {
        "text": "Common sense is not so common.",
        "author": "Voltaire",
        "fakeAuthors": ["Jean-Jacques Rousseau", "Denis Diderot"]
    },
    {
        "text": "Judge a man by his questions rather than by his answers.",
        "author": "Voltaire",
        "fakeAuthors": ["Montesquieu", "Baron d'Holbach"]
    },
    {
        "text": "If God did not exist, it would be necessary to invent him.",
        "author": "Voltaire",
        "fakeAuthors": ["Friedrich Nietzsche", "Søren Kierkegaard"]
    },
    {
        "text": "To see a world in a grain of sand, and a heaven in a wild flower, hold infinity in the palm of your hand and eternity in an hour.",
        "author": "William Blake",
        "fakeAuthors": ["Samuel Taylor Coleridge", "William Wordsworth"]
    },
    {
        "text": "And gladly would he learn, and gladly teach.",
        "author": "Geoffrey Chaucer",
        "fakeAuthors": ["John Milton", "Edmund Spenser"]
    },
    {
        "text": "Forbid us [some] thing, and that [thing] we desire.",
        "author": "Geoffrey Chaucer",
        "fakeAuthors": ["John Dryden", "Alexander Pope"]
    },
    {
        "text": "If we are to teach real peace in this world…we shall have to begin with the children.",
        "author": "Mahatma Gandhi",
        "fakeAuthors": ["Maria Montessori", "Martin Luther King Jr."]
    },
    {
        "text": "The principle of majority does not work when differences on fundamentals are involved.",
        "author": "Mahatma Gandhi",
        "fakeAuthors": ["Rabindranath Tagore", "Jawaharlal Nehru"]
    },
    {
        "text": "One word frees us of all the weight and pain of life: That word is love.",
        "author": "Sophocles",
        "fakeAuthors": ["Aristotle", "Plato"]
    },
    {
        "text": "Without labor nothing prospers.",
        "author": "Sophocles",
        "fakeAuthors": ["Hesiod", "Virgil"]
    },
    {
        "text": "I would prefer even to fail with honor than win by cheating.",
        "author": "Sophocles",
        "fakeAuthors": ["Aeschylus", "Euripides"]
    },
    {
        "text": "I'm a slow walker, but I never walk backwards.",
        "author": "Abraham Lincoln",
        "fakeAuthors": ["Theodore Roosevelt", "Winston Churchill"]
    },
    {
        "text": "If you want to walk fast, walk alone. If you want to walk far, find people going where you want to go and then walk together.",
        "author": "African Proverb",
        "fakeAuthors": ["Chinese Proverb", "Native American Proverb"]
    },
    {
        "text": "The secret of being a bore is to tell everything.",
        "author": "Voltaire",
        "fakeAuthors": ["Jean-Jacques Rousseau", "Denis Diderot"]
    },
    {
        "text": "Love truth, but pardon error.",
        "author": "Voltaire",
        "fakeAuthors": ["Montesquieu", "Baron d'Holbach"]
    },
    {
        "text": "Work keeps at bay three great evils: boredom, vice, and need.",
        "author": "Voltaire",
        "fakeAuthors": ["Benjamin Franklin", "John Locke"]
    },
    {
        "text": "Cities are the abyss of the human species.",
        "author": "Jean-Jacques Rousseau",
        "fakeAuthors": ["Thomas Hobbes", "John Locke"]
    },
    {
        "text": "Man is born free, and everywhere he is in chains.",
        "author": "Jean-Jacques Rousseau",
        "fakeAuthors": ["Voltaire", "Montesquieu"]
    },
    {
        "text": "Patience is bitter, but its fruit is sweet.",
        "author": "Jean-Jacques Rousseau",
        "fakeAuthors": ["Blaise Pascal", "François de La Rochefoucauld"]
    },
    {
        "text": "Some books are to be tasted, others to be swallowed, and some few to be chewed and digested.",
        "author": "Francis Bacon",
        "fakeAuthors": ["Michel de Montaigne", "John Milton"]
    },
    {
        "text": "For knowledge, too, is itself power.",
        "author": "Francis Bacon",
        "fakeAuthors": ["Thomas Hobbes", "John Locke"]
    },
    {
        "text": "It is impossible to love and to be wise.",
        "author": "Francis Bacon",
        "fakeAuthors": ["William Shakespeare", "Christopher Marlowe"]
    },
    {
        "text": "Liberty and love, these two I must have. For my love I'll sacrifice my life. For liberty I'll sacrifice my love.",
        "author": "Sándor Petőfi",
        "fakeAuthors": ["Victor Hugo", "Lord Byron"]
    },
    {
        "text": "The roots of education are bitter, but the fruit is sweet.",
        "author": "Aristotle",
        "fakeAuthors": ["Plato", "Socrates"]
    },
    {
        "text": "What is a friend? A single soul dwelling in two bodies.",
        "author": "Aristotle",
        "fakeAuthors": ["Cicero", "Seneca"]
    },
    {
        "text": "Hope is a waking dream.",
        "author": "Aristotle",
        "fakeAuthors": ["Epicurus", "Diogenes"]
    },
    {
        "text": "He who is to be a good ruler must have first been ruled.",
        "author": "Aristotle",
        "fakeAuthors": ["Plato", "Thucydides"]
    },
    {
        "text": "Man is a biped without feathers.",
        "author": "Plato",
        "fakeAuthors": ["Aristotle", "Diogenes"]
    },
    {
        "text": "People not only don't know what's happening to them, they don't even know that they don't know.",
        "author": "Noam Chomsky",
        "fakeAuthors": ["George Orwell", "Aldous Huxley"]
    },
    {
        "text": "The unexamined life is not worth living.",
        "author": "Socrates",
        "fakeAuthors": ["Plato", "Aristotle"]
    },
    {
        "text": "Sometimes the very technology that is meant to connect us divides us.",
        "author": "Tim Cook",
        "fakeAuthors": ["Steve Jobs", "Bill Gates"]
    },
    {
        "text": "Stay hungry, stay foolish.",
        "author": "Steve Jobs",
        "fakeAuthors": ["Bill Gates", "Elon Musk"]
    },
    {
        "text": "Your time is limited, so don't waste it living someone else's life.",
        "author": "Steve Jobs",
        "fakeAuthors": ["Tim Cook", "Jeff Bezos"]
    },
    {
        "text": "You can't connect the dots looking forward; you can only connect them looking backward.",
        "author": "Steve Jobs",
        "fakeAuthors": ["Warren Buffett", "Mark Zuckerberg"]
    },
    {
        "text": "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
        "author": "Bill Gates",
        "fakeAuthors": ["Richard Branson", "Larry Page"]
    },
    {
        "text": "It's fine to celebrate success, but it is more important to heed the lessons of failure.",
        "author": "Bill Gates",
        "fakeAuthors": ["Satya Nadella", "Sheryl Sandberg"]
    },
    {
        "text": "Your most unhappy customers are your greatest source of learning.",
        "author": "Bill Gates",
        "fakeAuthors": ["Tony Hsieh", "Reed Hastings"]
    },
    {
        "text": "Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.",
        "author": "Bill Gates",
        "fakeAuthors": ["Sal Khan", "Ken Robinson"]
    },
    {
        "text": "Run, don't walk. Either you're running for food, or you are running from being food.",
        "author": "Jensen Huang",
        "fakeAuthors": ["Lisa Su", "Jack Ma"]
    }
];

