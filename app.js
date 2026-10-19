// Keep profile order stable: saved matches use these indices. Append new profiles.
const profiles = [
  {
    "name": "Goldie",
    "age": 24,
    "place": "Idaho · 2 fields away",
    "bio": "I will remember your coffee order and steal your sweatshirt. Sundays are for a long breakfast, a terrible crossword, and calling my mum. Looking for something steady, with someone who still flirts in the supermarket.",
    "tags": [
      "Sunday roasts",
      "Actually asks questions",
      "Big spoon"
    ],
    "prompt": "The way to win me over",
    "answer": "Make a plan. Show up. Tell me the weird little thing you noticed on the way.",
    "color": 0,
    "chat": {
      "greeting": "What’s one small thing that makes an ordinary day feel good?",
      "date": "A picnic, no phones, and a dessert we both pretend we’ll share?",
      "food": "I’m a roast-and-extra-gravy romantic. What’s your comfort meal?",
      "replies": [
        "You can tell me the long version. I like the details.",
        "My dream Sunday has nowhere urgent to be. What’s yours?"
      ],
      "bye": "Sleep well. I’m rooting for a good tomorrow for you."
    }
  },
  {
    "name": "Chip",
    "age": 27,
    "place": "The next patch · 3 fields away",
    "bio": "Emotionally available. Physically near the snack table. I do stand-up twice a month; the audience would prefer once. Looking for someone who can roast me harder than an air fryer.",
    "tags": [
      "Dad jokes",
      "Movie nights",
      "Bit commitment"
    ],
    "prompt": "My most controversial opinion",
    "answer": "The cinema nachos are the main event. The film is just expensive mood lighting.",
    "color": 12,
    "chat": {
      "greeting": "Would you rather fight one horse-sized fry or a hundred fry-sized horses?",
      "date": "Movie date. You pick the film; I provide unnecessary director commentary.",
      "food": "Finally, someone willing to discuss the chip-to-dip ratio.",
      "replies": [
        "I was going to play it cool but I have never successfully done that.",
        "Tell me your worst joke. I promise to make it worse."
      ],
      "bye": "Goodnight. Don’t let the bed spuds bite. Sorry. Had to."
    }
  },
  {
    "name": "Violet",
    "age": 25,
    "place": "Purple Valley · 1 field away",
    "bio": "I annotate books, forget where I put them, then buy another copy. Usually drawing strangers on the train or arguing that purple is a neutral. I’d like a connection that makes silence feel easy.",
    "tags": [
      "Sketchbooks",
      "Slow mornings",
      "Gallery wanderer"
    ],
    "prompt": "A perfect first date",
    "answer": "We each choose a painting, then invent an elaborate scandal about its owner.",
    "color": 280,
    "chat": {
      "greeting": "What’s something beautiful you noticed this week?",
      "date": "A small gallery and coffee after? I want to hear which painting you hated.",
      "food": "Cooking is a tiny, edible art practice. Mine is occasionally abstract.",
      "replies": [
        "I like that. What does it remind you of?",
        "I have a sketchbook full of unfinished ideas. Tell me one of yours."
      ],
      "bye": "Goodnight. May your dreams have excellent lighting."
    }
  },
  {
    "name": "Russ",
    "age": 29,
    "place": "Idaho · 5 fields away",
    "bio": "Can mend a fence. Cannot convincingly say “just one more episode.” I have a rescue dog, a dependable soup recipe, and room for someone who says what they mean. The dog will interview you first.",
    "tags": [
      "Trail walks",
      "Dog person",
      "Quiet confidence"
    ],
    "prompt": "My green flag",
    "answer": "If I say I’ll be there at six, I’m there at five fifty-five. With snacks.",
    "color": 350,
    "chat": {
      "greeting": "Important introduction: my dog’s called Gravy. Have you got any pets?",
      "date": "A short trail, then a cafe? Walking dates should still involve sitting down.",
      "food": "I make a very good jacket potato. No tricks, just an unreasonable amount of butter.",
      "replies": [
        "Fair enough. I’d rather hear an honest answer than a polished one.",
        "What’s somewhere outdoors you always go back to?"
      ],
      "bye": "Get some rest. Gravy sends a very sleepy tail wag."
    }
  },
  {
    "name": "Sweet Pea",
    "age": 26,
    "place": "Sunny Acres · 4 fields away",
    "bio": "Sweet potato, strong opinions. I will bring you cake and tell you when you’re being ridiculous. Building a life with good friends, a full freezer, and absolutely no “we should hang out sometime” limbo.",
    "tags": [
      "Bakes for friends",
      "Warm but direct",
      "Cinnamon enthusiast"
    ],
    "prompt": "We’ll get along if",
    "answer": "You can accept both a compliment and a second slice.",
    "color": 335,
    "chat": {
      "greeting": "I’ve made too many cookies. Is that a problem you’re qualified to solve?",
      "date": "Let’s pick a cafe and an actual day. I respect a calendar.",
      "food": "Sweet or savory? Careful, this may influence the cake I make you.",
      "replies": [
        "I appreciate you saying that. Being direct is underrated.",
        "What’s a meal that makes you feel looked after?"
      ],
      "bye": "Sleep well, sweet thing. The cookies will still be here."
    }
  },
  {
    "name": "Finn",
    "age": 23,
    "place": "Little Garden · 2 fields away",
    "bio": "Once took the wrong train and accidentally had the best weekend of my life. I collect gig tickets, not countries. Currently learning to make pasta. Currently losing to the pasta.",
    "tags": [
      "Small gigs",
      "Scenic routes",
      "Enthusiastic amateur"
    ],
    "prompt": "My ideal plus-one",
    "answer": "Someone who’ll say “let’s find out” when neither of us knows what we’re doing.",
    "color": 20,
    "chat": {
      "greeting": "We’ve got a free Saturday and a tiny budget. Where are we going?",
      "date": "A tiny gig or a train somewhere new? Both come with a snack stop.",
      "food": "I’m on attempt seven of homemade gnocchi. Want the unflattering progress report?",
      "replies": [
        "That sounds like a story. How did you end up there?",
        "What’s the last thing you tried for the first time?"
      ],
      "bye": "Night! May tomorrow’s train be the right wrong train."
    }
  },
  {
    "name": "Spud",
    "age": 28,
    "place": "Somewhere · distance unknown",
    "bio": "just ask. but not “how are you” that’s boring. or what i do. or what i’m looking for. entertain me. notifications off.",
    "tags": [
      "Make me laugh",
      "Never asks back",
      "Photos from 2019"
    ],
    "prompt": "The key to my heart",
    "answer": "you tell me",
    "color": 8,
    "chat": {
      "greeting": "hey. say something interesting",
      "date": "you plan it. somewhere near me. not that place though",
      "food": "yeah love food",
      "replies": [
        "work was work. why so many questions",
        "haha. anyway entertain me"
      ],
      "bye": "night"
    }
  },
  {
    "name": "Duke",
    "age": 32,
    "place": "The gym patch · 1 field away",
    "bio": "6’2 in premium compost. My ex said I was emotionally unavailable, so I blocked her to protect my peace. Looking for someone independent who is available whenever I finish training. NO DRAMA. That’s why this bio is all caps in spirit.",
    "tags": [
      "No drama (lots of drama)",
      "Macros before manners",
      "Photos are all me"
    ],
    "prompt": "My love language",
    "answer": "You filming my deadlift. Landscape. No, do it again.",
    "color": 350,
    "chat": {
      "greeting": "Before we start: how many pull-ups can you do? Be honest.",
      "date": "You can come to leg day. Please don’t talk during the working sets.",
      "food": "Food is fuel. Except cheat day, when it is a competitive sport.",
      "replies": [
        "My client said she wanted “balance” so I sent her a picture of my meal-prep scales.",
        "I’m not obsessed with myself. I’m committed to the product."
      ],
      "bye": "Early start tomorrow. Grind never sleeps. I do, at nine."
    }
  },
  {
    "name": "Maris",
    "age": 34,
    "place": "Market Square · 3 fields away",
    "bio": "Co-parent to one excellent kid. Free every other weekend; not interested in pretending that’s mysterious. I like pub quizzes, a proper belly laugh, and people who are kind to waiters. Here for a grown-up relationship.",
    "tags": [
      "Clear intentions",
      "Quiz captain",
      "Good boundaries"
    ],
    "prompt": "What I’m looking for",
    "answer": "Warmth, consistency, and someone who understands that a full life can still have space in it.",
    "color": 15,
    "chat": {
      "greeting": "Tell me something good about your week. Mine involved winning a very minor pub quiz.",
      "date": "Coffee on Saturday afternoon? A low-pressure first date is a good first date.",
      "food": "I cook all week. A meal someone else makes is basically poetry.",
      "replies": [
        "I like a straight answer. What matters most to you right now?",
        "I’m not always instantly online, but I do come back to a conversation."
      ],
      "bye": "Goodnight. Here’s to a reasonably peaceful morning."
    }
  },
  {
    "name": "Truffle",
    "age": 31,
    "place": "The expensive end of the field · 8 fields away",
    "bio": "Seeking a financially stable emotional support potato. Fluent in French menu items and the phrase “do you know who I am?” My simple pleasures cost £240 per person. If your favorite restaurant has a laminated menu, let’s save each other some time.",
    "tags": [
      "Invoice energy",
      "Gift registry ready",
      "“Quiet luxury” (loudly)"
    ],
    "prompt": "My most irrational fear",
    "answer": "Being loved for who I am instead of what I can order.",
    "color": 355,
    "chat": {
      "greeting": "What’s your relationship with the phrase “market price”?",
      "date": "I’ll choose the restaurant. You can have the authentic experience of discovering the bill.",
      "food": "Fries? Hand-cut, I assume. What oil are we talking?",
      "replies": [
        "Someone called me high maintenance. I prefer “requires specialist care.”",
        "I’m very down to earth. I just prefer imported earth."
      ],
      "bye": "Bonsoir. I’ve got an offensively early facial."
    }
  },
  {
    "name": "Tater Tot",
    "age": 24,
    "place": "Behind the supermarket · 1 field away",
    "bio": "Banned from the garden center for asking to test-drive a wheelbarrow. Financially responsible, socially a loose shopping trolley. I have a detailed five-year plan for a feud with a goose. Looking for an accomplice who understands the difference between a red flag and a very festive banner.",
    "tags": [
      "Goose feud ongoing",
      "Tax returns immaculate",
      "Wheelbarrow incident"
    ],
    "prompt": "My perfect first date",
    "answer": "We dress as inspectors and rate supermarket trolley wheels. No impersonation of actual officials. I learned.",
    "color": 22,
    "chat": {
      "greeting": "Quick question. Hypothetically. Do you own a fog machine?",
      "date": "Normal cafe date. Absolutely normal. Ignore the wheelbarrow outside.",
      "food": "I ate cereal from a measuring jug. So yes, I’m available for dinner.",
      "replies": [
        "I’m doing the books for my own goose feud. Unfortunately it’s not tax deductible.",
        "Before you judge, the goose escalated first."
      ],
      "bye": "Going to bed. If I text about pigeons, ignore me until breakfast."
    }
  },
  {
    "name": "Professor Mash",
    "age": 38,
    "place": "University allotment · 6 fields away",
    "bio": "Researching soil microbiomes. Yes, that is my actual job. My flirting looks a lot like sending you a paper with “thoughts?” attached. I can be fun at parties, given a clearly defined party.",
    "tags": [
      "Museum dates",
      "Footnotes",
      "Earnest enthusiasm"
    ],
    "prompt": "I could talk all night about",
    "answer": "Fungi. You asked for a fun fact; I brought a reading list.",
    "color": 275,
    "chat": {
      "greeting": "Would you like one brief soil fact or an irresponsibly detailed soil fact?",
      "date": "The botanical gardens? I promise to limit myself to three unsolicited facts.",
      "food": "The Maillard reaction is romantic if you think about it. Shall I elaborate?",
      "replies": [
        "That’s interesting. What led you to that conclusion?",
        "I’m enjoying this. I’m aware that sounds like peer-review feedback."
      ],
      "bye": "Sleep well. A useful process for memory consolidation and, apparently, flirting."
    }
  },
  {
    "name": "Roxie",
    "age": 30,
    "place": "The rehearsal shed · 4 fields away",
    "bio": "Bassist. Bad at responding mid-rehearsal, good at showing up when it matters. Tattoos, earplugs, emergency sewing kit. I look intimidating until someone brings a tiny dog into the room.",
    "tags": [
      "Loud music",
      "Soft heart",
      "Earplugs included"
    ],
    "prompt": "My surprising soft spot",
    "answer": "Old couples dancing. Absolutely ruins my tough image.",
    "color": 290,
    "chat": {
      "greeting": "What song would you put on a mixtape if you were trying a little too hard?",
      "date": "Come to a small gig? We can escape for chips if the support act is awful.",
      "food": "Chips after a gig are a sacred ritual. Sauce allegiance?",
      "replies": [
        "I like people who have their own thing going on. What’s yours?",
        "Tiny dog update: saw one in a jumper. Completely lost my composure."
      ],
      "bye": "Night. Drink some water and save your ears."
    }
  },
  {
    "name": "Desirée",
    "age": 27,
    "place": "City rooftop beds · 2 fields away",
    "bio": "Looking for a slow burn. Ideally we become soulmates by Thursday. I’ve already made a playlist for our first argument and one for your apology. My ex described me as “a lot,” which is strange because the screenplay only has three acts.",
    "tags": [
      "Playlist before first date",
      "Soulmates pending",
      "Your apology has a soundtrack"
    ],
    "prompt": "My toxic trait",
    "answer": "I can turn a three-minute response time into a six-episode limited series.",
    "color": 330,
    "chat": {
      "greeting": "Tell me your favorite song so I can decide whether this is fate.",
      "date": "Coffee at sunset. I’ve written three versions of how we meet and brought the right coat.",
      "food": "Sharing fries is intimate. I don’t make the rules.",
      "replies": [
        "I made a playlist about a copy deadline. The client requested “less emotional devastation.”",
        "That sounded different in the screenplay. Can we do another take?"
      ],
      "bye": "Goodnight. This is where the credits roll over a very good song."
    }
  },
  {
    "name": "Ken",
    "age": 35,
    "place": "Business Park · 7 fields away",
    "bio": "Founder. Visionary. Temporarily sleeping in the office “by choice.” Seeking a co-founder for my personal life. Must be comfortable with equity instead of birthday presents. My last relationship ended due to misaligned KPIs, according to the exit survey I wrote myself.",
    "tags": [
      "Romance, pre-revenue",
      "Stealth mode boyfriend",
      "Emotional runway: 2 weeks"
    ],
    "prompt": "My five-year plan",
    "answer": "Exit. Sorry, did you mean the relationship or the company?",
    "color": 5,
    "chat": {
      "greeting": "Great to match. Can I get 15 minutes and your feedback on a problem worth $8 billion?",
      "date": "Coffee is perfect. I’ve booked us a meeting room with an HDMI cable.",
      "food": "Interesting market. Have you considered subscription fries?",
      "replies": [
        "My therapist asked how I feel. I offered her dashboard access.",
        "I hear you. Let me reframe that as a growth opportunity."
      ],
      "bye": "Signing off. Let’s circle back when we’ve both got bandwidth."
    }
  },
  {
    "name": "Moss",
    "age": 29,
    "place": "The quiet corner · 2 fields away",
    "bio": "Introvert, not a puzzle to solve. Happy with a book, a co-op game, or cooking quietly beside someone. I take a while to warm up. If I send you a photo of a cool rock, it’s going very well.",
    "tags": [
      "Co-op games",
      "Comfortable silence",
      "Cool rocks"
    ],
    "prompt": "A small act of affection",
    "answer": "Remembering where you are in your book so I don’t spoil anything.",
    "color": 40,
    "chat": {
      "greeting": "No pressure for a dazzling opener. What have you been reading or playing lately?",
      "date": "A quiet cafe with a corner table? Somewhere we don’t have to shout.",
      "food": "Cooking together without a complicated recipe sounds pretty ideal.",
      "replies": [
        "I’m thinking about that. I’m a slow reply person, not a bored one.",
        "I found an excellent rock today. This is, regrettably, my idea of flirting."
      ],
      "bye": "Sleep well. Thanks for a conversation that didn’t feel like an audition."
    }
  },
  {
    "name": "Flake",
    "age": 26,
    "place": "Passing through · 12 fields away",
    "bio": "not looking for anything serious unless you start losing interest. emotionally available every third thursday. that person in the wedding photo is my cousin probably. “we should do something” is a legally non-binding statement.",
    "tags": [
      "Last seen typing…",
      "“We should” specialist",
      "Cousin probably"
    ],
    "prompt": "My ideal first date",
    "answer": "i’ll let you know nearer the time. what time? nearer it.",
    "color": 350,
    "chat": {
      "greeting": "heyyy stranger. missed you. have we spoken before?",
      "date": "yes friday! actually might be away. keep it free though just in case",
      "food": "fries sound good tbh",
      "replies": [
        "between things. jobs. cities. explanations.",
        "sorry just seen this. anyway you up?"
      ],
      "bye": "might crash. ttyl"
    }
  },
  {
    "name": "Bea",
    "age": 33,
    "place": "Community garden · 3 fields away",
    "bio": "I organize the community compost and occasionally my own life. Big laugh, muddy boots, very competitive at board games. Looking for a teammate, not a project. Will happily teach you to grow tomatoes; cannot fix your ex.",
    "tags": [
      "Community minded",
      "Board game menace",
      "Good banter"
    ],
    "prompt": "My green flag",
    "answer": "I apologize properly. Then I beat you at Scrabble without remorse.",
    "color": 18,
    "chat": {
      "greeting": "What’s your board-game personality: gracious loser or suspiciously quiet winner?",
      "date": "Community garden open day, then lunch? I’ll introduce you to the resident cat.",
      "food": "I grow the herbs. You bring the potatoes. That’s a very solid partnership.",
      "replies": [
        "I’m into that. What’s something you care about enough to show up for?",
        "Full disclosure: I play board games to win. I share snacks regardless."
      ],
      "bye": "Night! The compost and I will both still be here tomorrow."
    }
  },
  {
    "name": "Juniper",
    "age": 28,
    "place": "Fernbank · 3 fields away",
    "bio": "I can tell you why your houseplant is sulking, but I cannot keep a basil plant alive. Florist, enthusiastic walker, terrible parallel parker. Looking for someone who notices the seasons and remembers to text when they get home.",
    "tags": [
      "Flowers with dirt still on them",
      "Long walks",
      "Gentle teasing"
    ],
    "prompt": "A small thing I find romantic",
    "answer": "Someone bringing back the mug I left at their place, with tea already in it.",
    "color": 0,
    "chat": {
      "greeting": "What’s a tiny thing you’ve grown attached to lately?",
      "date": "Let’s walk Noodle, then find a cafe with outdoor tables.",
      "food": "A meal shared slowly sounds good to me. What do you love cooking?",
      "replies": [
        "I was at the flower market before sunrise. The dahlias were showing off.",
        "What’s a tiny thing you’ve grown attached to lately?"
      ],
      "bye": "Goodnight. Let’s pick this up when you’re back."
    }
  },
  {
    "name": "Nico",
    "age": 31,
    "place": "Harbor Quarter · 6 fields away",
    "bio": "Sea air, decent tomatoes, questionable dance moves. I work on ferries and will absolutely point out a boat to you, as though you have never seen one. My siblings say I’m a good cook and an unreliable source of weather forecasts.",
    "tags": [
      "Sea swims",
      "Feeds everyone",
      "Bad dancing"
    ],
    "prompt": "A green flag I notice",
    "answer": "Being able to change your mind without making it somebody else’s fault.",
    "color": 0,
    "chat": {
      "greeting": "What meal reminds you of home?",
      "date": "Harbor walk and lunch? I can offer strong opinions about bread.",
      "food": "A meal shared slowly sounds good to me. What do you love cooking?",
      "replies": [
        "A passenger once asked if the ferry stopped at the lighthouse. I admired the ambition.",
        "What meal reminds you of home?"
      ],
      "bye": "Goodnight. Let’s pick this up when you’re back."
    }
  },
  {
    "name": "Cleo",
    "age": 35,
    "place": "Old Town · 2 fields away",
    "bio": "Archivist. My job is keeping old things in order; my flat is an elaborate exception. Dry humor, warm socks, one retired greyhound. I’m not aloof, I just take a moment to decide whether a joke needs explaining.",
    "tags": [
      "Dry wit",
      "Museum afternoons",
      "Good socks"
    ],
    "prompt": "An unexpectedly attractive quality",
    "answer": "Knowing when to stop talking and when to ask one more question.",
    "color": 0,
    "chat": {
      "greeting": "What’s an opinion you hold for a completely trivial reason?",
      "date": "Museum, then cake. We can silently judge the gift-shop prices together.",
      "food": "A meal shared slowly sounds good to me. What do you love cooking?",
      "replies": [
        "I found a century-old complaint about noisy neighbors. Some things are eternal.",
        "What’s an opinion you hold for a completely trivial reason?"
      ],
      "bye": "Goodnight. Let’s pick this up when you’re back."
    }
  },
  {
    "name": "Bix",
    "age": 25,
    "place": "Boulder Yard · 4 fields away",
    "bio": "i climb. badly. got a kitten. also badly but we’re learning. looking for someone fun who will tell me if there’s chalk on my face before taking the picture. no summit selfies because i haven’t reached one",
    "tags": [
      "Climbing-ish",
      "Kitten dad",
      "Forgot the tent pegs"
    ],
    "prompt": "My greatest strength",
    "answer": "optimism. not upper body apparently.",
    "color": 0,
    "chat": {
      "greeting": "what’s something you’re really bad at but still enjoy?",
      "date": "climbing then chips? no pressure to be good. i’m certainly not",
      "food": "A meal shared slowly sounds good to me. What do you love cooking?",
      "replies": [
        "spent twenty minutes explaining a climbing route then fell off the first hold",
        "what’s something you’re really bad at but still enjoy?"
      ],
      "bye": "Goodnight. Let’s pick this up when you’re back."
    }
  },
  {
    "name": "Saffron",
    "age": 32,
    "place": "Spice Lane · 5 fields away",
    "bio": "I produce community radio, cook for too many people, and have two birds who think every call is their interview. Big earrings, careful listening, strong feelings about underseasoned soup. Looking for wit, warmth, and a little follow-through.",
    "tags": [
      "Radio nerd",
      "Family dinners",
      "Spice drawer alphabetized"
    ],
    "prompt": "My love language",
    "answer": "Making your favorite dish twice: once to learn it, once to get it right.",
    "color": 0,
    "chat": {
      "greeting": "What song deserves a better reputation?",
      "date": "A food market and a shared lunch. Tell me what you’ve never tried.",
      "food": "A meal shared slowly sounds good to me. What do you love cooking?",
      "replies": [
        "A live guest’s dog once stole the entire interview. Our most popular segment.",
        "What song deserves a better reputation?"
      ],
      "bye": "Goodnight. Let’s pick this up when you’re back."
    }
  },
  {
    "name": "Otis",
    "age": 37,
    "place": "Kiln Row · 3 fields away",
    "bio": "Makes mugs for a living. Still drinks from the chipped one. Patient with clay, less patient with self-checkouts. I’ve built a quiet life I like; I’m looking for someone to share it with, not someone to rescue me from it.",
    "tags": [
      "Clay-covered sleeves",
      "Old dog walks",
      "Quiet confidence"
    ],
    "prompt": "The best part of my week",
    "answer": "When a student makes something wonky and decides to love it anyway.",
    "color": 0,
    "chat": {
      "greeting": "What’s something handmade you’ve kept for years?",
      "date": "Try a little pottery? We’ll make terrible bowls and have a good laugh.",
      "food": "A meal shared slowly sounds good to me. What do you love cooking?",
      "replies": [
        "My students made twelve bowls today. Eleven intentional, one a very sudden plate.",
        "What’s something handmade you’ve kept for years?"
      ],
      "bye": "Goodnight. Let’s pick this up when you’re back."
    }
  },
  {
    "name": "Petra",
    "age": 30,
    "place": "Alpine allotment · 5 fields away",
    "bio": "I own six head torches and understand that not every weekend needs an itinerary. Rescue dispatcher, enthusiastic hiker, secretly a hotel-breakfast enthusiast. Looking for someone who knows turning back can be the sensible part of an adventure.",
    "tags": [
      "Prepared for weather",
      "Actually takes breaks",
      "Breakfast buffet fan"
    ],
    "prompt": "A green flag I notice",
    "answer": "You change the plan when someone’s not having fun.",
    "color": 0,
    "chat": {
      "greeting": "What’s your favorite place to go when you need a clear head?",
      "date": "A gentle trail and a very ambitious bakery stop?",
      "food": "Petra’s ideal meal involves good company and no rushing. What’s your comfort food?",
      "replies": [
        "I help coordinate rescues. Most days, good communication matters more than heroics.",
        "I keep a folder of photos of Scout asleep in improbable positions."
      ],
      "bye": "Goodnight. We can pick this up when you’re back."
    }
  },
  {
    "name": "Rafi",
    "age": 29,
    "place": "Record Row · 2 fields away",
    "bio": "I produce records, not excuses. Can spend an hour finding the right drum sound but will happily eat cereal for dinner. Soft-spoken until someone says all cables sound the same. Looking for someone who likes their own company and sometimes wants mine.",
    "tags": [
      "Studio nights",
      "Quiet confidence",
      "Cat on the mixing desk"
    ],
    "prompt": "A tiny act of love",
    "answer": "Sending a song because one particular line made me think of you.",
    "color": 0,
    "chat": {
      "greeting": "What song sounds like a place you used to live?",
      "date": "Record shop, then coffee somewhere we can actually hear each other.",
      "food": "Rafi’s ideal meal involves good company and no rushing. What’s your comfort food?",
      "replies": [
        "A client asked for the track to sound more purple. Annoyingly, I knew what they meant.",
        "A playlist and an extremely reasonable request not to put drinks on the equipment."
      ],
      "bye": "Goodnight. We can pick this up when you’re back."
    }
  },
  {
    "name": "Blanche",
    "age": 62,
    "place": "Balcony Gardens · 3 fields away",
    "bio": "Retired, not retiring. Two grown-up children, one very spoiled cat, and a suitcase that is never properly unpacked. I want a good laugh and a proper date. If you call me “young at heart,” I will beat you at cards for money.",
    "tags": [
      "Cards with consequences",
      "Actual phone calls",
      "Carry-on only"
    ],
    "prompt": "My dating advice",
    "answer": "If they like you, you won’t need an international panel to interpret the message.",
    "color": 0,
    "chat": {
      "greeting": "Tell me something you’re excited about. Not your blood pressure.",
      "date": "Dinner and dancing. I will not pretend a loud bar is a personality.",
      "food": "Blanche’s ideal meal involves good company and no rushing. What’s your comfort food?",
      "replies": [
        "Thirty years in travel. I can pack for a fortnight and spot a terrible itinerary instantly.",
        "Changed my life at fifty-eight. The haircut was the easy part."
      ],
      "bye": "Goodnight. We can pick this up when you’re back."
    }
  },
  {
    "name": "Cash",
    "age": 28,
    "place": "Penthouse district · 9 fields away",
    "bio": "Self-made. The sports car is a collaboration with a rental company. Seeking someone who believes in my vision and doesn’t ask to see the numbers. My ex said I talked about money too much. That’s a scarcity mindset.",
    "tags": [
      "Luxury, allegedly",
      "Rented confidence",
      "Opportunity incoming"
    ],
    "prompt": "My love language",
    "answer": "Compound interest. And receiving.",
    "color": 0,
    "chat": {
      "greeting": "How do you feel about the word “exclusive” on an event invitation?",
      "date": "Rooftop drinks. The invitation says exclusive, which apparently means queue outside.",
      "food": "Cash’s ideal meal involves good company and no rushing. What’s your comfort food?",
      "replies": [
        "I call it wealth consulting. My accountant keeps requesting a more concrete noun.",
        "You bring curiosity. I bring a once-in-a-lifetime opportunity. Nobody is transferring money; this is a date, allegedly."
      ],
      "bye": "Goodnight. We can pick this up when you’re back."
    }
  },
  {
    "name": "Lyra",
    "age": 27,
    "place": "Moonflower beds · 4 fields away",
    "bio": "I can show you Saturn through a telescope and explain why your horoscope is scientifically nonsense. I still read mine. Looking for someone curious, kind, and willing to hold the other end of a star chart while the wind humiliates us.",
    "tags": [
      "Space nerd",
      "Hypocritical horoscope reader",
      "Night garden"
    ],
    "prompt": "I contain multitudes",
    "answer": "I know astrology isn’t astronomy. I also know you’d say that because you’re a Virgo.",
    "color": 0,
    "chat": {
      "greeting": "What’s something about the universe you’ve always wondered?",
      "date": "Stargazing and hot chocolate, with a cafe backup if it clouds over.",
      "food": "Lyra’s ideal meal involves good company and no rushing. What’s your comfort food?",
      "replies": [
        "Planetarium presenter. I get paid to tell people to look up. A surprisingly lovely job.",
        "You ask questions because you want to know, not because you want to catch me out."
      ],
      "bye": "Goodnight. We can pick this up when you’re back."
    }
  },
  {
    "name": "Hugo",
    "age": 33,
    "place": "Platform Patch · 6 fields away",
    "bio": "I like trains in a way I have learned to describe more briefly on dates. Reliable, enthusiastic, makes a very good sandwich. Looking for someone with their own niche interest so we can take turns being unnecessarily detailed.",
    "tags": [
      "Public transport romantic",
      "Flask ready",
      "Niche hobby ally"
    ],
    "prompt": "My most romantic gesture",
    "answer": "Planning a trip with a generous connection time. You deserve peace.",
    "color": 0,
    "chat": {
      "greeting": "What’s your niche interest? I promise to ask follow-up questions.",
      "date": "A train to the coast. I’ll bring sandwiches and a sensible connection time.",
      "food": "Hugo’s ideal meal involves good company and no rushing. What’s your comfort food?",
      "replies": [
        "Railway signaling. My ideal day at work is deeply uneventful.",
        "You can enjoy someone being excited without needing to share the obsession."
      ],
      "bye": "Goodnight. We can pick this up when you’re back."
    }
  },
  {
    "name": "Pippa",
    "age": 26,
    "place": "Roller Rink Row · 1 field away",
    "bio": "Professional balloon-animal potato. Better at apologizing than parallel parking. I’m loud, affectionate, and sometimes need to remember a funny story is allowed to end. Looking for someone who likes a bit of silliness and can also have the difficult conversation.",
    "tags": [
      "Roller skates",
      "Big laugh",
      "Owns emergency confetti"
    ],
    "prompt": "A recent humbling experience",
    "answer": "A six-year-old said my balloon giraffe looked unemployed.",
    "color": 0,
    "chat": {
      "greeting": "What’s the last thing that made you laugh unexpectedly?",
      "date": "Roller disco? Falling over together feels honest.",
      "food": "Pippa’s ideal meal involves good company and no rushing. What’s your comfort food?",
      "replies": [
        "Party entertainer. I’ve negotiated harder over balloon colors than most diplomats.",
        "We can laugh during the fancy dinner and still say what we mean afterward."
      ],
      "bye": "Goodnight. We can pick this up when you’re back."
    }
  },
  {
    "name": "Sterling",
    "age": 41,
    "place": "Manor Mounds · 8 fields away",
    "bio": "Old-fashioned manners, modern tendency to send you correction notes. I do not argue; I explain until you agree. Seeking someone spontaneous within the framework of my preferred itinerary. My therapist described me as “an interesting project.”",
    "tags": [
      "Corrects the menu",
      "Monologues politely",
      "References available"
    ],
    "prompt": "My biggest green flag",
    "answer": "I always apologize when you have misunderstood me.",
    "color": 0,
    "chat": {
      "greeting": "Do you consider punctuality a virtue or merely a minimum requirement?",
      "date": "I have shortlisted three restaurants and prepared a comparative assessment.",
      "food": "Sterling’s ideal meal involves good company and no rushing. What’s your comfort food?",
      "replies": [
        "Etiquette consulting. Apparently “unsolicited correction” is not a recognized job title.",
        "Turning “where shall we eat?” into a seminar with supporting documents."
      ],
      "bye": "Goodnight. We can pick this up when you’re back."
    }
  },
  {
    "name": "Miso",
    "age": 30,
    "place": "Dumpling Corner · 2 fields away",
    "bio": "Bakery owner. Flour in my pockets, excellent listening face, learning not to apologize when someone else bumps into me. I show affection by feeding people, but I’m practicing saying the feelings out loud too. Seeking warmth and someone who washes the bowl.",
    "tags": [
      "Dumplings with grandparents",
      "Quiet humor",
      "Practicing boundaries"
    ],
    "prompt": "A little win I’m proud of",
    "answer": "Told a customer we were closed without adding “sorry” four times.",
    "color": 0,
    "chat": {
      "greeting": "What dish would you want someone to teach you?",
      "date": "A little dumpling making, then tea. We can both be beginners at something.",
      "food": "Miso’s ideal meal involves good company and no rushing. What’s your comfort food?",
      "replies": [
        "I run a bakery. Yes, early mornings. No, I’m not giving away the good tray of cinnamon rolls.",
        "Be patient without treating me like I’m fragile."
      ],
      "bye": "Goodnight. We can pick this up when you’re back."
    }
  },
  {
    "name": "Fern",
    "age": 28,
    "place": "Workshop Woods · 3 fields away",
    "bio": "I fix lamps, mend clothes, and do not date projects. If your chair wobbles I will notice before I sit down. Looking for a curious person who can admit they don’t know something and hold the torch at a useful angle.",
    "tags": [
      "Repair, don’t replace",
      "Practical affection",
      "Rat enthusiast"
    ],
    "prompt": "My hot take",
    "answer": "Knowing when to ask for help is more useful than looking like you know everything.",
    "color": 0,
    "chat": {
      "greeting": "What’s something broken you’ve kept because you want to fix it someday?",
      "date": "Repair cafe open day, then lunch somewhere with stable chairs.",
      "food": "Fern’s ideal meal involves good company and no rushing. What’s your comfort food?",
      "replies": [
        "I run a repair cafe. Most repairs start with a cup of tea and finding the right screwdriver.",
        "Repairing the pocket you mentioned once, then pretending that was casual."
      ],
      "bye": "Goodnight. We can pick this up when you’re back."
    }
  }
];
profiles.forEach((profile,id)=>Object.assign(profile,profileDetails[id],{conversation:chatPersonalities[id]}));
let saved;try{saved=JSON.parse(localStorage.getItem('spud-v1'));}catch{}
let index=Number.isInteger(saved?.index)&&saved.index>=0?saved.index:0;
let matches=Array.isArray(saved?.matches)?saved.matches.filter(i=>Number.isInteger(i)&&i>=0&&i<profiles.length):[];
let pollVotes={};
for(const [id,vote] of Object.entries(saved?.pollVotes||{})){
 if(profiles[id]?.poll&&Number.isInteger(vote)&&vote>=0&&vote<profiles[id].poll.options.length)pollVotes[id]=vote;
}
let profilePhotoIndex=0;
let viewedProfile=null;
let history=[];
const validProfile=id=>Number.isInteger(id)&&id>=0&&id<profiles.length;
let passed=[...new Set([...(Array.isArray(saved?.passed)?saved.passed:[]),...(Array.isArray(saved?.admirer?.seen)?saved.admirer.seen:[])].filter(id=>validProfile(id)&&!matches.includes(id)))];
let admirer={
 seen:Array.isArray(saved?.admirer?.seen)?saved.admirer.seen.filter(validProfile):[],
 choices:Array.isArray(saved?.admirer?.choices)?[...new Set(saved.admirer.choices.filter(validProfile))].slice(0,4):[],
 selected:validProfile(saved?.admirer?.selected)?saved.admirer.selected:null
};
if(!admirer.choices.includes(admirer.selected))admirer.selected=null;
let chats={};
for(const id of matches){
 const messages=saved?.chats?.[id];
 if(Array.isArray(messages))chats[id]=messages.filter(m=>m&&['me','potato'].includes(m.sender)&&typeof m.text==='string');
}
let activeChat=null;
let swipeGesture=null;
const $=id=>document.getElementById(id);
function persist(){try{localStorage.setItem('spud-v1',JSON.stringify({index,matches,passed,chats,admirer,pollVotes}));}catch{}}
// The newest photo sheet starts at this stable profile index.
const discoveryBatchStart=18;
function isFreshProfile(id){return id>=discoveryBatchStart;}
function currentDiscoverId(){
 for(let offset=0;offset<profiles.length;offset++){
  const candidate=(index+offset)%profiles.length;
  if(!matches.includes(candidate)&&!passed.includes(candidate)){
   if(offset){index+=offset;persist();}
   return candidate;
  }
 }
 return null;
}
function render(){
 swipeGesture?.reset();
 const id=currentDiscoverId(),exhausted=id===null;
 $('count').textContent=matches.length;
 $('undo').disabled=!history.length;
 $('card').classList.toggle('hidden',exhausted);
 $('discovery-empty').classList.toggle('hidden',!exhausted);
 $('swipe-hint').classList.toggle('hidden',exhausted);
 $('admirer-open').classList.toggle('hidden',exhausted);
 $('pass').disabled=exhausted;$('like').disabled=exhausted;
 if(exhausted)return;
 const p=profiles[id];
$('name').textContent=`${p.name}, ${p.age}`;$('location').textContent='⌁ '+p.place;$('bio').textContent=p.bio;$('profile-prompt').textContent=p.prompt;$('profile-answer').textContent=p.answer;setPortrait($('potato'),index%profiles.length);$('potato').setAttribute('aria-label',`Open ${p.name}’s full profile`);$('tags').replaceChildren(...p.tags.map(t=>{const s=document.createElement('span');s.textContent=t;return s;}));$('count').textContent=matches.length;}
function renderMatches(){$('empty').hidden=matches.length>0;$('match-list').replaceChildren(...matches.map(i=>{const p=profiles[i],el=document.createElement('article');el.className='match-item';const icon=document.createElement('button');icon.className='match-photo';icon.setAttribute('aria-label',`View ${p.name}’s profile`);setPortrait(icon,i);icon.onclick=()=>openProfile(i);const name=document.createElement('h3');name.textContent=`${p.name}, ${p.age}`;const info=document.createElement('p');info.textContent=p.bio;const chat=document.createElement('button');chat.className='chat-button';chat.textContent='Say hello 💬';chat.setAttribute('aria-label',`Chat with ${p.name}`);chat.onclick=()=>openChat(i);const view=document.createElement('button');view.className='view-profile';view.textContent='View profile';view.onclick=()=>openProfile(i);el.append(icon,name,info,chat,view);return el;}));}
function swipe(liked){if(swipeGesture?.busy)return;const id=currentDiscoverId();if(id===null)return;history.push({index,matches:[...matches],passed:[...passed]});if(liked&&!matches.includes(id)){matches.push(id);$('match-message').textContent=`${profiles[id].name} likes you too. Looks like something good is growing.`;$('match-dialog').showModal();}if(!liked&&!passed.includes(id))passed.push(id);index++;persist();render();$('status').textContent=liked?'A little love planted.':'On to the next spud.';}
$('pass').onclick=()=>swipe(false);$('like').onclick=()=>swipe(true);$('undo').onclick=()=>{const last=history.pop();if(!last)return;index=last.index;matches=last.matches;passed=last.passed;persist();render();$('status').textContent='Last swipe undone.';};
$('keep').onclick=()=>$('match-dialog').close();
function tab(discover){$('discover').classList.toggle('hidden',!discover);$('matches').classList.toggle('hidden',discover);$('discover-tab').classList.toggle('active',discover);$('matches-tab').classList.toggle('active',!discover);if(!discover)renderMatches();}
$('discover-tab').onclick=()=>tab(true);$('matches-tab').onclick=()=>tab(false);
document.addEventListener('keydown',e=>{if($('reset-dialog').open||$('profile-dialog').open||$('admirer-dialog').open||$('chat-dialog').open||$('match-dialog').open||$('discover').classList.contains('hidden')||e.target.tagName==='BUTTON')return;if(e.key==='ArrowLeft')swipe(false);if(e.key==='ArrowRight')swipe(true);});
swipeGesture=SpudSwipe.attach($('card'),{
 onSwipe:swipe,
 canStart:()=>currentDiscoverId()!==null&&!['match-dialog','chat-dialog','profile-dialog','admirer-dialog','reset-dialog'].some(id=>$(id).open)
});render();

function openChat(id){
 if(!matches.includes(id))return;
 activeChat=id;
 if(!chats[id]?.length){chats[id]=[{sender:'potato',text:profiles[id].chat.greeting}];persist();}
 $('chat-title').textContent=`🥔 ${profiles[id].name}`;$('chat-profile').onclick=()=>{$('chat-dialog').close();openProfile(id);};
 renderChat();renderChatStarters(id);$('chat-dialog').showModal();$('chat-input').focus();
}
function renderChat(){
 $('chat-messages').replaceChildren(...chats[activeChat].map(m=>{
  const bubble=document.createElement('p');bubble.className=`bubble ${m.sender}`;
  bubble.textContent=m.text;return bubble;
 }));
 $('chat-messages').scrollTop=$('chat-messages').scrollHeight;
}
function reply(id,text){return SpudChat.reply(profiles[id],chats[id],text,pollVotes[id]);}
function sendMessage(text){
 text=text.trim().slice(0,1000);
 if(!text||activeChat===null)return;
 chats[activeChat].push({sender:'me',text});
 chats[activeChat].push({sender:'potato',text:reply(activeChat,text)});
 $('chat-input').value='';persist();renderChat();$('chat-input').focus();
}
$('chat-form').addEventListener('submit',e=>{e.preventDefault();sendMessage($('chat-input').value);});
$('chat-close').onclick=()=>$('chat-dialog').close();

function openAdmirer(){
 admirer.choices=admirer.choices.filter(id=>!matches.includes(id)&&!passed.includes(id)&&!admirer.seen.includes(id));
 if(!admirer.choices.includes(admirer.selected))admirer.selected=null;
 if(!admirer.choices.length){
  const pool=profiles.map((_,id)=>id).filter(id=>!matches.includes(id)&&!passed.includes(id)&&!admirer.seen.includes(id));
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  admirer.choices=pool.slice(0,4);
 }
 persist();renderAdmirer();$('admirer-dialog').showModal();
}
function renderAdmirer(){
 const revealed=admirer.selected!==null;
 $('admirer-choices').hidden=revealed;
 $('admirer-choices').classList.toggle('hidden',revealed);
 $('admirer-reveal').hidden=!revealed;
 $('admirer-status').textContent=!admirer.choices.length?'You’ve met every secret admirer in this patch. Keep exploring your matches!':'';
 $('admirer-choices').replaceChildren(...admirer.choices.map((id,i)=>{
  const card=document.createElement('button');card.className='admirer-card';
  card.setAttribute('aria-label',`Reveal hidden admirer ${i+1}`);
  const heart=document.createElement('span');heart.textContent='♥';heart.setAttribute('aria-hidden','true');
  const label=document.createElement('small');label.textContent=`Mystery spud ${i+1}`;
  card.append(heart,label);card.onclick=()=>{admirer.selected=id;persist();renderAdmirer();$('admirer-like').focus();};return card;
 }));
 if(revealed){setPortrait($('admirer-photo'),admirer.selected);const p=profiles[admirer.selected];$('admirer-name').textContent=`${p.name}, ${p.age}`;$('admirer-bio').textContent=p.bio;$('admirer-prompt').textContent=`${p.prompt}: ${p.answer}`;}
}
function finishAdmirer(liked){
 const id=admirer.selected;if(id===null)return;
 if(!admirer.seen.includes(id))admirer.seen.push(id);
 if(liked&&!matches.includes(id)){matches.push(id);history=[];}
 if(!liked&&!passed.includes(id))passed.push(id);
 history=[];admirer.selected=null;admirer.choices=[];persist();render();renderMatches();$('admirer-dialog').close();
 if(liked){tab(false);openChat(id);}
 else $('status').textContent='Mystery solved. Your next spark is still out there.';
}
$('admirer-open').onclick=openAdmirer;
$('admirer-close').onclick=()=>$('admirer-dialog').close();
$('admirer-like').onclick=()=>finishAdmirer(true);
$('admirer-pass').onclick=()=>finishAdmirer(false);

function portraitPosition(id,column=0){
 if(id>=24)return `${column*50}% ${((id-24)%5)*25}%`;
 return isFreshProfile(id)?`${column*50}% ${(id-discoveryBatchStart)*20}%`:`${(id%3)*50}% ${Math.floor(id/3)*20}%`;
}
function setPortrait(el,id){
 el.classList.add('portrait');
 el.classList.toggle('fresh-photo',isFreshProfile(id));
 el.classList.toggle('photo-wave-a',id>=24&&id<29);
 el.classList.toggle('photo-wave-b',id>=29);
 el.style.backgroundPosition=portraitPosition(id);
 el.setAttribute('aria-label',`Portrait of ${profiles[id].name}`);
}
function openProfile(id){
 if(!validProfile(id))return;
 viewedProfile=id;profilePhotoIndex=0;
 const p=profiles[id];setPortrait($('full-profile-photo'),id);
 $('full-profile-name').textContent=`${p.name}, ${p.age}`;
 $('full-profile-location').textContent=p.place;
 $('full-profile-bio').textContent=p.bio;
 $('full-profile-prompt').textContent=p.prompt;
 $('full-profile-answer').textContent=p.answer;
 $('full-profile-tags').replaceChildren(...p.tags.map(tag=>{const span=document.createElement('span');span.textContent=tag;return span;}));
 renderProfileExtras(id);
 $('profile-chat').textContent=matches.includes(id)?'Send a message 💬':'Like this potato ♥';
 $('profile-chat').onclick=()=>{$('profile-dialog').close();if(!matches.includes(id)){matches.push(id);history=[];persist();render();renderMatches();}openChat(id);};
 $('profile-dialog').showModal();
}
$('profile-close').onclick=()=>$('profile-dialog').close();

function showProfilePhoto(id,position){
 const p=profiles[id];profilePhotoIndex=(position+p.photos.length)%p.photos.length;
 const photo=p.photos[profilePhotoIndex],image=$('full-profile-photo');
 image.classList.remove('photo-friends','photo-life');setPortrait(image,id);
 if(photo.kind!=='portrait')image.classList.add(`photo-${photo.kind}`);
 if(isFreshProfile(id))image.style.backgroundPosition=portraitPosition(id,profilePhotoIndex);
 image.setAttribute('aria-label',`${p.name}: ${photo.caption}`);
 $('photo-caption').textContent=photo.caption;
 $('photo-count').textContent=`${profilePhotoIndex+1} / ${p.photos.length}`;
 $('photo-thumbs').replaceChildren(...p.photos.map((photo,i)=>{
  const button=document.createElement('button');button.className='photo-thumb';setPortrait(button,id);
  if(photo.kind!=='portrait')button.classList.add(`photo-${photo.kind}`);
  if(isFreshProfile(id))button.style.backgroundPosition=portraitPosition(id,i);
  button.setAttribute('aria-label',`Photo ${i+1}: ${photo.caption}`);
  button.setAttribute('aria-pressed',String(i===profilePhotoIndex));
  button.onclick=()=>showProfilePhoto(id,i);return button;
 }));
}
function renderProfileExtras(id){
 const p=profiles[id];showProfilePhoto(id,0);
 $('profile-facts').replaceChildren(...Object.entries(p.facts).map(([label,value])=>{
  const item=document.createElement('div'),key=document.createElement('dt'),text=document.createElement('dd');
  key.textContent=label;text.textContent=value;item.append(key,text);return item;
 }));
 $('profile-prompts').replaceChildren(...p.prompts.map(prompt=>{
  const item=document.createElement('section');item.className='prompt-card';
  const question=document.createElement('h3'),answer=document.createElement('p');question.textContent=prompt.question;answer.textContent=prompt.answer;item.append(question,answer);return item;
 }));
 renderPoll(id);
}
function renderPoll(id){
 const poll=profiles[id].poll,vote=pollVotes[id];$('poll-question').textContent=poll.question;
 $('poll-options').replaceChildren(...poll.options.map((option,i)=>{
  const button=document.createElement('button');button.className='poll-option';button.textContent=`${vote===i?'♥ ':''}${option}`;
  button.setAttribute('aria-pressed',String(vote===i));button.onclick=()=>{pollVotes[id]=i;persist();renderPoll(id);};return button;
 }));
 $('poll-status').textContent=vote===undefined?'Pick an answer to break the ice.':'Your choice is saved. Tap another answer to change it.';
}
$('photo-prev').onclick=()=>{if(viewedProfile!==null)showProfilePhoto(viewedProfile,profilePhotoIndex-1);};
$('photo-next').onclick=()=>{if(viewedProfile!==null)showProfilePhoto(viewedProfile,profilePhotoIndex+1);};
function openDiscoverProfile(){if(swipeGesture?.busy)return;const id=currentDiscoverId();if(id!==null)openProfile(id);}
$('discover-profile').onclick=openDiscoverProfile;
$('potato').onclick=openDiscoverProfile;
$('discovery-matches').onclick=()=>tab(false);

function renderChatStarters(id){
 $('chat-starters').replaceChildren(...SpudChat.starters(profiles[id]).map(text=>{
  const button=document.createElement('button');button.type='button';button.textContent=text;
  button.onclick=()=>sendMessage(text);return button;
 }));
}

$('reset-open').onclick=()=>$('reset-dialog').showModal();
$('reset-cancel').onclick=()=>$('reset-dialog').close();
$('reset-confirm').onclick=()=>{
 index=0;matches=[];passed=[];chats={};pollVotes={};history=[];
 admirer={seen:[],choices:[],selected:null};activeChat=null;viewedProfile=null;profilePhotoIndex=0;
 persist();render();renderMatches();tab(true);$('reset-dialog').close();
 $('status').textContent='A fresh start: all 34 potatoes are ready to meet you.';
};
