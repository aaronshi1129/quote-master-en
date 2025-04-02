const quotes = [
    {
        text: "Be the change you wish to see in the world.",
        author: "Mahatma Gandhi",
        fakeAuthors: ["Nelson Mandela", "Martin Luther King Jr."]
    },
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
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein",
        fakeAuthors: ["Stephen Hawking", "Neil deGrasse Tyson"]
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
        text: "We must become the change we want to see.",
        author: "Mahatma Gandhi",
        fakeAuthors: ["Dalai Lama", "Desmond Tutu"]
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
        text: "It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is most adaptable to change.",
        author: "Charles Darwin",
        fakeAuthors: ["Richard Dawkins", "Stephen Jay Gould"]
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
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain",
        fakeAuthors: ["Dale Carnegie", "Benjamin Franklin"]
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
        author: "Charles Kingsleigh (Alice in Wonderland)",
        fakeAuthors: ["Walt Disney", "Lewis Carroll"]
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
        fakeAuthors: ["Franklin D. Roosevelt", "Dwight D. Eisenhower"]
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
        text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson",
        fakeAuthors: ["Henry David Thoreau", "Walt Whitman"]
    },
    {
        text: "The future starts today, not tomorrow.",
        author: "Pope John Paul II",
        fakeAuthors: ["Dalai Lama", "Mother Teresa"]
    }
];

