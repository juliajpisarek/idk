// Stable profile order: append only.
const profileDetails = [
  {
    "facts": {
      "Work": "Primary school teacher",
      "Looking for": "Long-term relationship",
      "Relationship style": "Monogamy",
      "Pets": "Has a rescue cat, Marmalade",
      "Family plans": "Wants children someday",
      "Habits": "Social drinker · Non-smoker",
      "Daily life": "Early bird · Cooks most nights",
      "On repeat": "Fleetwood Mac · Maggie Rogers"
    },
    "prompts": [
      {
        "question": "The quickest way to my heart",
        "answer": "Remembering a tiny thing I told you three weeks ago."
      },
      {
        "question": "A relationship non-negotiable",
        "answer": "Being kind even when we’re both tired."
      },
      {
        "question": "My friends would say",
        "answer": "I pack emergency snacks and cry at their wedding speeches."
      }
    ],
    "poll": {
      "question": "Our Sunday starts with…",
      "options": [
        "Pancakes and the crossword",
        "A market wander",
        "Staying in bed until noon"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Profile photo"
      },
      {
        "kind": "friends",
        "caption": "Grandma teaching me the recipe she refuses to write down."
      },
      {
        "kind": "life",
        "caption": "Marmalade. She likes precisely three people. Applications open."
      }
    ]
  },
  {
    "facts": {
      "Work": "Cinema duty manager / occasional comic",
      "Looking for": "Relationship, open to seeing where it goes",
      "Relationship style": "Monogamy",
      "Pets": "Borrowed dog enthusiast",
      "Family plans": "Open to children",
      "Habits": "Social drinker · Non-smoker",
      "Daily life": "Night owl · Always has snacks",
      "On repeat": "Talking Heads · Comedy podcasts"
    },
    "prompts": [
      {
        "question": "Dating me is like",
        "answer": "The DVD commentary you didn’t ask for, but secretly enjoy."
      },
      {
        "question": "Two truths and a lie",
        "answer": "I opened for a famous comic. I own a cape. I know when to stop a bit."
      },
      {
        "question": "A hill I’ll die on",
        "answer": "Watching a bad film together is better than watching a good one alone."
      }
    ],
    "poll": {
      "question": "Choose the first-date film",
      "options": [
        "Terrible shark sequel",
        "Rom-com with commentary",
        "Something we pretend to understand"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Profile photo"
      },
      {
        "kind": "friends",
        "caption": "My friends staged an intervention about karaoke. I sang through it."
      },
      {
        "kind": "life",
        "caption": "Dogsitting Bean. He gives my jokes the reviews they deserve."
      }
    ]
  },
  {
    "facts": {
      "Work": "Illustrator / part-time bookshop human resources (potato division)",
      "Looking for": "Long-term, slowly",
      "Relationship style": "Monogamy",
      "Pets": "Two cats, Ink and Paper",
      "Family plans": "Still figuring out children",
      "Habits": "Occasional wine · Non-smoker",
      "Daily life": "Introvert · Slow replies, thoughtful replies",
      "On repeat": "Japanese Breakfast · Nina Simone"
    },
    "prompts": [
      {
        "question": "I feel most like myself when",
        "answer": "There’s paint on my sleeves and nowhere I have to be."
      },
      {
        "question": "Something I’m learning",
        "answer": "A quiet person can still ask for what they need."
      },
      {
        "question": "Leave a comment if",
        "answer": "You have an unpopular book opinion. I’ll put the kettle on."
      }
    ],
    "poll": {
      "question": "Pick our art-date assignment",
      "options": [
        "Draw each other badly",
        "Invent gallery gossip",
        "Choose a book for each other"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Profile photo"
      },
      {
        "kind": "friends",
        "caption": "Studio night. Nobody finished a painting. Excellent evening."
      },
      {
        "kind": "life",
        "caption": "Ink supervises. Paper is currently chewing the invoice."
      }
    ]
  },
  {
    "facts": {
      "Work": "Carpenter",
      "Looking for": "Life partner",
      "Relationship style": "Monogamy",
      "Pets": "Rescue dog, Gravy",
      "Family plans": "Would like children",
      "Habits": "Occasional beer · Non-smoker",
      "Daily life": "Early starts · Weekend hikes",
      "On repeat": "Tyler Childers · Old soul playlists"
    },
    "prompts": [
      {
        "question": "A small thing I take seriously",
        "answer": "Putting my phone down when you’re telling me something."
      },
      {
        "question": "I’m weirdly good at",
        "answer": "Fixing the thing you’ve been ignoring for six months."
      },
      {
        "question": "A typical Sunday",
        "answer": "Walk Gravy, make soup, call my sister. In that order unless she calls first."
      }
    ],
    "poll": {
      "question": "The forecast says rain. We…",
      "options": [
        "Walk anyway, proper coats",
        "Find a pub with a fire",
        "Cook a huge pot of soup"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Profile photo"
      },
      {
        "kind": "friends",
        "caption": "My sister says this is my only photo without a dog in it."
      },
      {
        "kind": "life",
        "caption": "Gravy is technically the one looking for a partner. I’m transport."
      }
    ]
  },
  {
    "facts": {
      "Work": "Pastry chef",
      "Looking for": "Something intentional",
      "Relationship style": "Monogamy",
      "Pets": "One very opinionated rabbit, Crumb",
      "Family plans": "Wants children",
      "Habits": "Social drinker · Non-smoker",
      "Daily life": "Early shifts · Quality time",
      "On repeat": "Beyoncé · Kitchen disco"
    },
    "prompts": [
      {
        "question": "My boundaries sound like",
        "answer": "I like you, but I still need my night with friends."
      },
      {
        "question": "I’ll brag about you if",
        "answer": "You’re good to people who can do nothing for you."
      },
      {
        "question": "The best compliment I’ve received",
        "answer": "“You make people feel welcome without making a fuss.”"
      }
    ],
    "poll": {
      "question": "What are we baking?",
      "options": [
        "Cinnamon rolls",
        "Lemon drizzle",
        "Something ambitious that collapses"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Profile photo"
      },
      {
        "kind": "friends",
        "caption": "Family dinner. Yes, I catered. No, I will not do your wedding for exposure."
      },
      {
        "kind": "life",
        "caption": "Crumb has eaten more parsley than any potato I know."
      }
    ]
  },
  {
    "facts": {
      "Work": "Sound technician",
      "Looking for": "Figuring it out, open to real connection",
      "Relationship style": "Open to discussing it",
      "Pets": "No pets; travels for work",
      "Family plans": "Not sure about children",
      "Habits": "Social drinker · Non-smoker",
      "Daily life": "Irregular hours · Budget adventurer",
      "On repeat": "Wet Leg · Live bootlegs"
    },
    "prompts": [
      {
        "question": "A recent humbling experience",
        "answer": "Taking a pasta class and being moved to the beginners’ table. I was already at it."
      },
      {
        "question": "Teach me something about",
        "answer": "Whatever makes you talk with your hands."
      },
      {
        "question": "My next small adventure",
        "answer": "A night train with a window seat and no heroic itinerary."
      }
    ],
    "poll": {
      "question": "Choose a tiny adventure",
      "options": [
        "Wrong-train day trip",
        "Mystery gig",
        "Camp somewhere with actual toilets"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Profile photo"
      },
      {
        "kind": "friends",
        "caption": "We forgot a tent pole and invented an engineering degree."
      },
      {
        "kind": "life",
        "caption": "Met this goat on a trail. Not mine. He did eat my map."
      }
    ]
  },
  {
    "facts": {
      "Work": "work",
      "Looking for": "seeing what happens",
      "Relationship style": "ask",
      "Pets": "nah",
      "Family plans": "idk",
      "Habits": "sometimes",
      "Daily life": "depends",
      "On repeat": "anything really"
    },
    "prompts": [
      {
        "question": "My most controversial opinion",
        "answer": "people don’t make an effort anymore"
      },
      {
        "question": "My ideal first message",
        "answer": "something original. no not that."
      }
    ],
    "poll": {
      "question": "Start the conversation for me",
      "options": [
        "Carry it alone",
        "Ask me a question I ignore",
        "Apologize for double texting"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Profile photo"
      },
      {
        "kind": "friends",
        "caption": "im the one on the left. i think"
      },
      {
        "kind": "life",
        "caption": "my mates dog"
      }
    ]
  },
  {
    "facts": {
      "Work": "Personal trainer",
      "Looking for": "Someone who matches my energy",
      "Relationship style": "Monogamy",
      "Pets": "No pets, too busy training",
      "Family plans": "Wants a family eventually",
      "Habits": "Rarely drinks · Non-smoker",
      "Daily life": "5 AM gym · 6 AM checking who liked the gym photo",
      "On repeat": "Workout remixes · Motivational podcasts"
    },
    "prompts": [
      {
        "question": "A boundary I respect",
        "answer": "The boundary between my protein and your shelf in the fridge."
      },
      {
        "question": "My biggest red flag",
        "answer": "Being too loyal. And the gym mirror incident, which my lawyer says was a misunderstanding."
      },
      {
        "question": "We’ll get along if",
        "answer": "You have your own hobbies. Quiet ones. Near the gym."
      }
    ],
    "poll": {
      "question": "What should our anniversary activity be?",
      "options": [
        "Watch me train",
        "Film me training",
        "Discuss my training"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Profile photo"
      },
      {
        "kind": "friends",
        "caption": "The boys. No, I’m not the one in the middle. Swipe back."
      },
      {
        "kind": "life",
        "caption": "My brother’s tiny dog. Allegedly great for active recovery."
      }
    ]
  },
  {
    "facts": {
      "Work": "Operations manager",
      "Looking for": "Long-term relationship",
      "Relationship style": "Monogamy",
      "Pets": "Family cat, Pickle",
      "Family plans": "Has one child · Open to discussing more",
      "Habits": "Social drinker · Non-smoker",
      "Daily life": "Co-parenting schedule · Plans ahead",
      "On repeat": "90s R&B · Pub quiz playlists"
    },
    "prompts": [
      {
        "question": "What you should know upfront",
        "answer": "My child stays off this app. My availability doesn’t mean I’m playing games."
      },
      {
        "question": "A life I’m proud of",
        "answer": "Full, sometimes messy, with room for a partner who has a life too."
      },
      {
        "question": "We’ll get along if",
        "answer": "You can lose a quiz without demanding a recount."
      }
    ],
    "poll": {
      "question": "Low-pressure first date?",
      "options": [
        "Saturday coffee",
        "A walk and a bakery",
        "Quiz night, separate teams"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Profile photo"
      },
      {
        "kind": "friends",
        "caption": "Picnic with my sister. She gave this profile a brutally useful edit."
      },
      {
        "kind": "life",
        "caption": "Pickle, head of household. Will sit on any important paperwork."
      }
    ]
  },
  {
    "facts": {
      "Work": "Luxury brand consultant",
      "Looking for": "Luxury companionship · Your treat",
      "Relationship style": "Monogamy",
      "Pets": "Whippet, Fig",
      "Family plans": "Undecided",
      "Habits": "Wine enthusiast · Non-smoker",
      "Daily life": "Dinner reservations · City weekends",
      "On repeat": "Sade · Hotel lobby jazz"
    },
    "prompts": [
      {
        "question": "My love language",
        "answer": "A spontaneous gift from the extremely detailed wishlist I sent spontaneously."
      },
      {
        "question": "My perfect Sunday",
        "answer": "Complaining about a hotel breakfast I did not pay for."
      },
      {
        "question": "What I bring to the table",
        "answer": "An opinion about the table. It’s too close to the kitchen."
      }
    ],
    "poll": {
      "question": "A romantic gesture is…",
      "options": [
        "A table at the impossible place",
        "A weekend with no budget discussion",
        "Your card on file"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Profile photo"
      },
      {
        "kind": "friends",
        "caption": "An extremely casual Tuesday. I only changed outfits twice."
      },
      {
        "kind": "life",
        "caption": "Fig. He flies economy in spirit, at least."
      }
    ]
  },
  {
    "facts": {
      "Work": "Tax accountant. Yes, really.",
      "Looking for": "Open to a relationship and side quests",
      "Relationship style": "Monogamy",
      "Pets": "Foster dog, Chaos",
      "Family plans": "Undecided",
      "Habits": "Social drinker · Non-smoker",
      "Daily life": "Night owl · Organized chaos",
      "On repeat": "Hyperpop · Whatever the taxi is playing"
    },
    "prompts": [
      {
        "question": "Two truths and a lie",
        "answer": "I’ve won a raffle. I own a fog machine. I have used the fog machine responsibly."
      },
      {
        "question": "A cause I care about",
        "answer": "The goose by the canal knows what it did."
      },
      {
        "question": "My most mature quality",
        "answer": "I have an emergency fund. One category is labeled “goose litigation.”"
      }
    ],
    "poll": {
      "question": "What’s our couple activity?",
      "options": [
        "Thrift-store disguise night",
        "Fog machine board games",
        "Mediated peace talks with the goose"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Profile photo"
      },
      {
        "kind": "friends",
        "caption": "My friends are normal. I am a statistically significant exception."
      },
      {
        "kind": "life",
        "caption": "Foster dog Chaos. Named before arrival. Prophecy fulfilled."
      }
    ]
  },
  {
    "facts": {
      "Work": "Soil microbiology lecturer",
      "Looking for": "Long-term companionship",
      "Relationship style": "Monogamy",
      "Pets": "Senior tortoise, Ada",
      "Family plans": "Doesn’t want children",
      "Habits": "Occasional drink · Non-smoker",
      "Daily life": "Museum member · Early bedtime",
      "On repeat": "Classical piano · Science radio"
    },
    "prompts": [
      {
        "question": "I get embarrassingly excited about",
        "answer": "A student asking a genuinely unexpected question."
      },
      {
        "question": "A mistake I’ve learned from",
        "answer": "Treating an argument as something to win instead of understand."
      },
      {
        "question": "What I bring to a relationship",
        "answer": "Curiosity, reliability, and a potentially excessive number of tote bags."
      }
    ],
    "poll": {
      "question": "Choose an intellectual vice",
      "options": [
        "Museum gift shop",
        "Secondhand bookshop",
        "A three-hour documentary"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Profile photo"
      },
      {
        "kind": "friends",
        "caption": "Board-game night. We have rules about arguing about rules."
      },
      {
        "kind": "life",
        "caption": "Ada. Forty years old, no publications, completely unbothered."
      }
    ]
  },
  {
    "facts": {
      "Work": "Bassist / instrument repair technician",
      "Looking for": "Relationship, not a fan club",
      "Relationship style": "Monogamy",
      "Pets": "Old terrier, Lemmy",
      "Family plans": "Doesn’t want children",
      "Habits": "Social drinker · Non-smoker",
      "Daily life": "Late nights · Takes ear protection seriously",
      "On repeat": "Bikini Kill · IDLES · Very secret ABBA"
    },
    "prompts": [
      {
        "question": "My softest side",
        "answer": "Carrying an old dog home when his legs are tired."
      },
      {
        "question": "My friends know",
        "answer": "I’m the one with spare earplugs, safety pins, and your lost jacket."
      },
      {
        "question": "An excellent first impression",
        "answer": "Be interested in something without making fun of everyone else’s thing."
      }
    ],
    "poll": {
      "question": "What’s the after-gig plan?",
      "options": [
        "Chips on the curb",
        "A quiet late cafe",
        "Home, ears ringing metaphorically"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Profile photo"
      },
      {
        "kind": "friends",
        "caption": "The band. I’m the bassist, not the one climbing the speaker."
      },
      {
        "kind": "life",
        "caption": "Lemmy has never paid for a ticket and still sleeps through our set."
      }
    ]
  },
  {
    "facts": {
      "Work": "Copywriter",
      "Looking for": "Big romance, ideally with consistency",
      "Relationship style": "Monogamy",
      "Pets": "No pets · A dramatic fern",
      "Family plans": "Wants children someday",
      "Habits": "Social drinker · Non-smoker",
      "Daily life": "City walks · Voice notes",
      "On repeat": "Lana Del Rey · Florence + the Machine"
    },
    "prompts": [
      {
        "question": "My dream relationship",
        "answer": "Like the movies, but you notice I’m upset without me having to say what’s wrong."
      },
      {
        "question": "A recent achievement",
        "answer": "Didn’t check who viewed my story for twelve consecutive minutes."
      },
      {
        "question": "My green flag",
        "answer": "I communicate openly through incredibly specific song lyrics."
      }
    ],
    "poll": {
      "question": "You haven’t replied for 20 minutes. You’re…",
      "options": [
        "Busy (unlikely)",
        "Writing me a sonnet",
        "About to feature on track seven"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Profile photo"
      },
      {
        "kind": "friends",
        "caption": "My friends’ wedding. Cried before the vows. Lost an earring."
      },
      {
        "kind": "life",
        "caption": "Not a pet. Florence the fern deserves her own dating profile."
      }
    ]
  },
  {
    "facts": {
      "Work": "Founder & CEO, RootScale",
      "Looking for": "A romantic co-founder · Equity-only compensation",
      "Relationship style": "Let’s discuss the framework",
      "Pets": "No pets · Limited bandwidth",
      "Family plans": "Open to a five-year roadmap",
      "Habits": "Networking drinks · Non-smoker",
      "Daily life": "5:30 AM · Calendar-driven",
      "On repeat": "Business podcasts · Focus beats"
    },
    "prompts": [
      {
        "question": "My love language",
        "answer": "Acts of unpaid consulting."
      },
      {
        "question": "A non-negotiable",
        "answer": "You sign an NDA before I explain why my ex was wrong."
      },
      {
        "question": "My ideal first date",
        "answer": "A casual drink with a twelve-slide introduction. No questions until the end."
      }
    ],
    "poll": {
      "question": "How should we define the relationship?",
      "options": [
        "A three-month pilot",
        "An exclusive beta",
        "Let’s form a steering committee"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Profile photo"
      },
      {
        "kind": "friends",
        "caption": "Some friends. Some investors. Legally, I should probably know which."
      },
      {
        "kind": "life",
        "caption": "Office dog. Our Head of Retention. Compensation is entirely biscuits."
      }
    ]
  },
  {
    "facts": {
      "Work": "Software tester",
      "Looking for": "Slow-burn relationship",
      "Relationship style": "Monogamy",
      "Pets": "Indoor cat, Pixel",
      "Family plans": "Doesn’t want children",
      "Habits": "Rarely drinks · Non-smoker",
      "Daily life": "Homebody · Social battery needs charging",
      "On repeat": "Game soundtracks · Ambient"
    },
    "prompts": [
      {
        "question": "How I show I like you",
        "answer": "I’ll remember your obscure interest and send one extremely relevant link."
      },
      {
        "question": "A boundary I appreciate",
        "answer": "Being able to say “I need a quiet night” without it becoming a referendum."
      },
      {
        "question": "My ideal evening",
        "answer": "Co-op game, something in the oven, a cat committing minor crimes nearby."
      }
    ],
    "poll": {
      "question": "Our co-op campaign starts with…",
      "options": [
        "A cozy farm",
        "A puzzle game",
        "Character creation for three hours"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Profile photo"
      },
      {
        "kind": "friends",
        "caption": "Co-op night with my oldest friend. We did not save the kingdom."
      },
      {
        "kind": "life",
        "caption": "Pixel, shortly before disconnecting my keyboard during a boss fight."
      }
    ]
  },
  {
    "facts": {
      "Work": "between things",
      "Looking for": "Keeping it casual · Unless you do",
      "Relationship style": "idk yet",
      "Pets": "not mine but love dogs",
      "Family plans": "haven’t thought about it",
      "Habits": "weekends mostly",
      "Daily life": "last minute",
      "On repeat": "send recommendations"
    },
    "prompts": [
      {
        "question": "What I’m looking for",
        "answer": "nothing serious but please don’t date anyone else while i decide"
      },
      {
        "question": "My communication style",
        "answer": "typing… then a weather update three weeks later"
      },
      {
        "question": "My best quality",
        "answer": "amazing potential. everyone says it before they leave."
      }
    ],
    "poll": {
      "question": "When are you free?",
      "options": [
        "Maybe Friday",
        "Actually not Friday",
        "I’ll text you"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Profile photo"
      },
      {
        "kind": "friends",
        "caption": "wedding pic. cousin probably. don’t make it weird."
      },
      {
        "kind": "life",
        "caption": "wish i remembered this dog’s name"
      }
    ]
  },
  {
    "facts": {
      "Work": "Community project coordinator",
      "Looking for": "A teammate for the long haul",
      "Relationship style": "Monogamy",
      "Pets": "Rescue mutt, Turnip",
      "Family plans": "Open to children",
      "Habits": "Social drinker · Non-smoker",
      "Daily life": "Garden mornings · Hosts game nights",
      "On repeat": "Soul classics · Folk festivals"
    },
    "prompts": [
      {
        "question": "Something I’m proud of",
        "answer": "Our garden now supplies the community kitchen every week."
      },
      {
        "question": "You can count on me to",
        "answer": "Turn up, bring something useful, and tell you if there’s spinach in your teeth."
      },
      {
        "question": "We’ll disagree well if",
        "answer": "We can take a breath, listen, and not keep score. Board games excepted."
      }
    ],
    "poll": {
      "question": "First date, your choice",
      "options": [
        "Garden open day",
        "Scrabble at the pub",
        "Cook what’s in season"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Profile photo"
      },
      {
        "kind": "friends",
        "caption": "Mum and Dad visiting the allotment. Dad is “just checking” my soil again."
      },
      {
        "kind": "life",
        "caption": "Turnip. Useless at weeding, exceptional at morale."
      }
    ]
  },
  {
    "facts": {
      "Work": "Florist",
      "Looking for": "A slow, steady relationship",
      "Relationship style": "Monogamy",
      "Pets": "Dachshund, Noodle",
      "Family plans": "Open to children",
      "Habits": "Social drinker · Non-smoker",
      "Daily life": "Early markets · Plant collector",
      "On repeat": "Adrianne Lenker · Soul Sundays"
    },
    "prompts": [
      {
        "question": "My most specific skill",
        "answer": "Making a supermarket bouquet look like you planned three days ahead."
      },
      {
        "question": "A perfect ordinary evening",
        "answer": "Walk Noodle, cook something lemony, fall asleep halfway through a film."
      }
    ],
    "poll": {
      "question": "Pick a first-date bouquet",
      "options": [
        "Wildflowers",
        "Something dramatic",
        "Actually, a houseplant"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Juniper, on a pretty ordinary day."
      },
      {
        "kind": "friends",
        "caption": "A picnic with the friends who patiently accept plants as birthday presents."
      },
      {
        "kind": "life",
        "caption": "Noodle: very short legs, exceptionally long opinions."
      }
    ]
  },
  {
    "facts": {
      "Work": "Ferry deckhand",
      "Looking for": "Something real, without rushing",
      "Relationship style": "Monogamy",
      "Pets": "Black cat, Olive",
      "Family plans": "Doesn’t want children",
      "Habits": "Occasional beer · Non-smoker",
      "Daily life": "Shift work · Loves the sea",
      "On repeat": "Khruangbin · Old Italian records"
    },
    "prompts": [
      {
        "question": "My family would warn you",
        "answer": "He’ll say “just a little lunch” and use every pan in the house."
      },
      {
        "question": "The way to my heart",
        "answer": "Tell me what you want. I’m good at knots, not at reading minds."
      }
    ],
    "poll": {
      "question": "Lunch by the harbor?",
      "options": [
        "Fresh bread and tomatoes",
        "Fish and chips",
        "A long, unnecessary detour"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Nico, on a pretty ordinary day."
      },
      {
        "kind": "friends",
        "caption": "My siblings helping with lunch. “Helping” is a generous description."
      },
      {
        "kind": "life",
        "caption": "Olive, supervising my one attempt to answer emails."
      }
    ]
  },
  {
    "facts": {
      "Work": "Archivist",
      "Looking for": "Long-term partnership",
      "Relationship style": "Monogamy",
      "Pets": "Retired greyhound, Toast",
      "Family plans": "Undecided",
      "Habits": "Rarely drinks · Non-smoker",
      "Daily life": "Quiet evenings · Competitive puzzles",
      "On repeat": "Joni Mitchell · Instrumental jazz"
    },
    "prompts": [
      {
        "question": "My irrational grudge",
        "answer": "Bookshelves arranged entirely by color. How do you find anything?"
      },
      {
        "question": "I’ll make time for",
        "answer": "People who can disagree without turning it into a courtroom."
      }
    ],
    "poll": {
      "question": "We have a rainy afternoon. Choose.",
      "options": [
        "Museum and cake",
        "An unfairly difficult puzzle",
        "A long bookshop browse"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Cleo, on a pretty ordinary day."
      },
      {
        "kind": "friends",
        "caption": "Board-game night. I lost, graciously according to exactly nobody."
      },
      {
        "kind": "life",
        "caption": "Toast, working tirelessly on another sixteen-hour nap."
      }
    ]
  },
  {
    "facts": {
      "Work": "Outdoor shop assistant",
      "Looking for": "See what happens, honestly",
      "Relationship style": "Monogamy",
      "Pets": "Kitten, Waffle",
      "Family plans": "Not sure yet",
      "Habits": "Social drinker · Non-smoker",
      "Daily life": "Late riser · Climbing beginner",
      "On repeat": "Pop punk · Whatever’s loud"
    },
    "prompts": [
      {
        "question": "My ideal date",
        "answer": "something cheap with snacks"
      },
      {
        "question": "A recent achievement",
        "answer": "waffle knows her name. i think. she also answers to the fridge."
      }
    ],
    "poll": {
      "question": "pick a questionable plan",
      "options": [
        "Climbing wall",
        "Camping with actual pegs",
        "Stay home with Waffle"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Bix, on a pretty ordinary day."
      },
      {
        "kind": "friends",
        "caption": "we brought three camping stoves and zero spoons"
      },
      {
        "kind": "life",
        "caption": "waffle. my entire camera roll now."
      }
    ]
  },
  {
    "facts": {
      "Work": "Community radio producer",
      "Looking for": "An intentional relationship",
      "Relationship style": "Monogamy",
      "Pets": "Two parakeets, Chai and Clove",
      "Family plans": "Open to discussing children",
      "Habits": "Social drinker · Non-smoker",
      "Daily life": "Family dinners · Night owl",
      "On repeat": "Arooj Aftab · Disco edits"
    },
    "prompts": [
      {
        "question": "What my family will ask",
        "answer": "Have you eaten? Do you want more? Are you absolutely sure?"
      },
      {
        "question": "A belief I’ve changed",
        "answer": "Chemistry is wonderful. Consistency is sexier."
      }
    ],
    "poll": {
      "question": "You get one radio request.",
      "options": [
        "A song for cooking",
        "A song for dancing",
        "A song for the last train"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Saffron, on a pretty ordinary day."
      },
      {
        "kind": "friends",
        "caption": "Family dinner: many opinions, very little chance of leaving hungry."
      },
      {
        "kind": "life",
        "caption": "Chai and Clove rehearsing for an interview nobody booked."
      }
    ]
  },
  {
    "facts": {
      "Work": "Ceramics teacher",
      "Looking for": "A life partner",
      "Relationship style": "Monogamy",
      "Pets": "Old sheepdog, Buttons",
      "Family plans": "Doesn’t want children",
      "Habits": "Occasional cider · Non-smoker",
      "Daily life": "Early walks · Studio afternoons",
      "On repeat": "Bill Withers · Folk radio"
    },
    "prompts": [
      {
        "question": "A lesson that took too long",
        "answer": "Being easygoing isn’t the same as never saying what you need."
      },
      {
        "question": "Something I’ll remember",
        "answer": "How you take your tea. Then I’ll make the mug to match."
      }
    ],
    "poll": {
      "question": "Choose a cozy afternoon",
      "options": [
        "Pottery workshop",
        "Dog walk and cider",
        "Bake a slightly wonky pie"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Otis, on a pretty ordinary day."
      },
      {
        "kind": "friends",
        "caption": "The workshop crew, arguing about whether my mug handles are “too handle-y.”"
      },
      {
        "kind": "life",
        "caption": "Buttons. Head of studio naps and quality control."
      }
    ]
  },
  {
    "facts": {
      "Work": "Search-and-rescue dispatcher",
      "Looking for": "Long-term partner",
      "Relationship style": "Monogamy",
      "Pets": "Border collie, Scout",
      "Family plans": "Open to children",
      "Habits": "Social drinker · Non-smoker",
      "Daily life": "Prepared for weather",
      "On repeat": "Indie folk · Trail playlists"
    },
    "prompts": [
      {
        "question": "An unpopular outdoors opinion",
        "answer": "A walk is allowed to end at a bakery. It does not need an elevation chart."
      },
      {
        "question": "My soft side",
        "answer": "I keep a folder of photos of Scout asleep in improbable positions."
      }
    ],
    "poll": {
      "question": "Choose our summit reward",
      "options": [
        "Bakery stop",
        "Scenic nap",
        "Hotel breakfast, no summit"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Petra, caught in their natural habitat."
      },
      {
        "kind": "friends",
        "caption": "My friends showing me that a picnic is a legitimate destination."
      },
      {
        "kind": "life",
        "caption": "Scout, patiently pretending I can throw a ball far enough."
      }
    ]
  },
  {
    "facts": {
      "Work": "Audio producer",
      "Looking for": "Long-term, with room for our own lives",
      "Relationship style": "Monogamy",
      "Pets": "Tabby cat, Vinyl",
      "Family plans": "Undecided",
      "Habits": "Social drinker · Non-smoker",
      "Daily life": "Studio nights",
      "On repeat": "Soul records · Unreleased demos"
    },
    "prompts": [
      {
        "question": "My most embarrassing skill",
        "answer": "Identifying an appliance from its hum. Nobody asked."
      },
      {
        "question": "Dating me comes with",
        "answer": "A playlist and an extremely reasonable request not to put drinks on the equipment."
      }
    ],
    "poll": {
      "question": "Pick our listening session",
      "options": [
        "Your favorite album",
        "A terrible first demo",
        "Something neither of us knows"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Rafi, caught in their natural habitat."
      },
      {
        "kind": "friends",
        "caption": "My siblings helping cook dinner. Everyone wants to be executive producer."
      },
      {
        "kind": "life",
        "caption": "Vinyl checking whether the synthesizer is warm enough."
      }
    ]
  },
  {
    "facts": {
      "Work": "Retired travel agent",
      "Looking for": "Companionship with good kissing",
      "Relationship style": "Monogamy",
      "Pets": "White cat, Duchess",
      "Family plans": "Grown-up children · No more planned",
      "Habits": "Social drinker · Non-smoker",
      "Daily life": "Cards with consequences",
      "On repeat": "Disco · Nina Simone"
    },
    "prompts": [
      {
        "question": "A non-negotiable",
        "answer": "Be polite to the waiter. I will notice. I will also tip."
      },
      {
        "question": "A wild thing I’ve done",
        "answer": "Changed my life at fifty-eight. The haircut was the easy part."
      }
    ],
    "poll": {
      "question": "Where are we going next?",
      "options": [
        "A seaside weekend",
        "The theater",
        "Somewhere with dancing"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Blanche, caught in their natural habitat."
      },
      {
        "kind": "friends",
        "caption": "The card club. Sweet faces. Ruthless people."
      },
      {
        "kind": "life",
        "caption": "Duchess permitting precisely four minutes of affection."
      }
    ]
  },
  {
    "facts": {
      "Work": "Independent wealth mindset consultant",
      "Looking for": "A partner who invests in us (literally)",
      "Relationship style": "Monogamy",
      "Pets": "Pomeranian, Dividend",
      "Family plans": "Ask after the funding round",
      "Habits": "Selective about nearly everything",
      "Daily life": "Luxury, allegedly",
      "On repeat": "Champagne playlists · Motivational podcasts"
    },
    "prompts": [
      {
        "question": "A fact that surprises people",
        "answer": "The watch is not technically mine. It’s part of an ecosystem."
      },
      {
        "question": "My perfect first date",
        "answer": "You bring curiosity. I bring a once-in-a-lifetime opportunity. Nobody is transferring money; this is a date, allegedly."
      }
    ],
    "poll": {
      "question": "Our financial compatibility test",
      "options": [
        "Separate tabs",
        "You get this one",
        "Discuss my hypothetical yacht"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Cash, caught in their natural habitat."
      },
      {
        "kind": "friends",
        "caption": "The networking boys. Several assets pictured are hired by the hour."
      },
      {
        "kind": "life",
        "caption": "Dividend does not understand why we have to return the car."
      }
    ]
  },
  {
    "facts": {
      "Work": "Planetarium presenter",
      "Looking for": "Cosmic chemistry, actual consistency",
      "Relationship style": "Monogamy",
      "Pets": "Black rabbit, Eclipse",
      "Family plans": "Open to children",
      "Habits": "Social drinker · Non-smoker",
      "Daily life": "Space nerd",
      "On repeat": "Dream pop · Space documentaries"
    },
    "prompts": [
      {
        "question": "A first date I’d love",
        "answer": "Stargazing with hot chocolate and a backup indoor plan because clouds exist."
      },
      {
        "question": "A relationship green flag",
        "answer": "You ask questions because you want to know, not because you want to catch me out."
      }
    ],
    "poll": {
      "question": "Pick our cosmic destination",
      "options": [
        "Saturn’s rings",
        "The moon",
        "The cafe, it’s cold"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Lyra, caught in their natural habitat."
      },
      {
        "kind": "friends",
        "caption": "My friends pretending they can see the constellation I’m pointing at."
      },
      {
        "kind": "life",
        "caption": "Eclipse demonstrating a total eclipse of the parsley."
      }
    ]
  },
  {
    "facts": {
      "Work": "Railway signal engineer",
      "Looking for": "A committed relationship",
      "Relationship style": "Monogamy",
      "Pets": "Spaniel, Ticket",
      "Family plans": "Would like children",
      "Habits": "Social drinker · Non-smoker",
      "Daily life": "Public transport romantic",
      "On repeat": "Folk radio · Railway podcasts"
    },
    "prompts": [
      {
        "question": "A surprising skill",
        "answer": "I can tell whether a sandwich will survive a four-hour journey."
      },
      {
        "question": "We’ll get along if",
        "answer": "You can enjoy someone being excited without needing to share the obsession."
      }
    ],
    "poll": {
      "question": "Our weekend ticket says…",
      "options": [
        "Coastal railway",
        "Sleeper adventure",
        "Stay home, build a model"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Hugo, caught in their natural habitat."
      },
      {
        "kind": "friends",
        "caption": "Friends humoring me on a railway picnic. I brought every sandwich."
      },
      {
        "kind": "life",
        "caption": "Ticket, the only one who loves timetables as much as walks."
      }
    ]
  },
  {
    "facts": {
      "Work": "Children’s party entertainer",
      "Looking for": "A fun relationship, with follow-through",
      "Relationship style": "Monogamy",
      "Pets": "Guinea pigs, Pip and Squeak",
      "Family plans": "Wants children someday",
      "Habits": "Social drinker · Non-smoker",
      "Daily life": "Roller skates",
      "On repeat": "Pop anthems · Roller disco"
    },
    "prompts": [
      {
        "question": "What I’m working on",
        "answer": "Not filling every silence. Some people are thinking, Pippa."
      },
      {
        "question": "My ideal romance",
        "answer": "We can laugh during the fancy dinner and still say what we mean afterward."
      }
    ],
    "poll": {
      "question": "Choose our deeply serious date",
      "options": [
        "Roller disco",
        "Mini golf, dramatic commentary",
        "Learn one terrible dance"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Pippa, caught in their natural habitat."
      },
      {
        "kind": "friends",
        "caption": "My birthday. Everyone else was told it was a normal dinner."
      },
      {
        "kind": "life",
        "caption": "Pip and Squeak, professional lettuce inspectors."
      }
    ]
  },
  {
    "facts": {
      "Work": "Etiquette consultant",
      "Looking for": "A partner who meets my standards",
      "Relationship style": "Monogamy",
      "Pets": "Grey cat, Earl",
      "Family plans": "Children negotiable after references",
      "Habits": "Selective about nearly everything",
      "Daily life": "Corrects the menu",
      "On repeat": "Classical · His own voice"
    },
    "prompts": [
      {
        "question": "My idea of compromise",
        "answer": "We consider both options, then choose the one I recommended initially."
      },
      {
        "question": "An unusual talent",
        "answer": "Turning “where shall we eat?” into a seminar with supporting documents."
      }
    ],
    "poll": {
      "question": "What’s our approach to a disagreement?",
      "options": [
        "Review my notes",
        "Adopt my proposal",
        "Request an adjournment"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Sterling, caught in their natural habitat."
      },
      {
        "kind": "friends",
        "caption": "A family dinner. Someone used the wrong fork. We are still healing."
      },
      {
        "kind": "life",
        "caption": "Earl taking the square I had explicitly reserved for the bishop."
      }
    ]
  },
  {
    "facts": {
      "Work": "Bakery owner",
      "Looking for": "A slow, intentional partnership",
      "Relationship style": "Monogamy",
      "Pets": "Rescue dog, Sesame",
      "Family plans": "Open to discussing children",
      "Habits": "Social drinker · Non-smoker",
      "Daily life": "Dumplings with grandparents",
      "On repeat": "Lo-fi beats · Old family favorites"
    },
    "prompts": [
      {
        "question": "My family tradition",
        "answer": "Dumplings: everybody helps, everybody claims their folding method is the correct one."
      },
      {
        "question": "The way to win me over",
        "answer": "Be patient without treating me like I’m fragile."
      }
    ],
    "poll": {
      "question": "Choose our kitchen experiment",
      "options": [
        "Grandma’s dumplings",
        "Your comfort meal",
        "A recipe with alarming reviews"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Miso, caught in their natural habitat."
      },
      {
        "kind": "friends",
        "caption": "Grandparents teaching me the “only correct” dumpling fold. Again."
      },
      {
        "kind": "life",
        "caption": "Sesame, finally comfortable enough to steal the good cushion."
      }
    ]
  },
  {
    "facts": {
      "Work": "Repair cafe coordinator",
      "Looking for": "Something lasting, repaired when needed",
      "Relationship style": "Monogamy",
      "Pets": "Pet rat, Solder",
      "Family plans": "Doesn’t want children",
      "Habits": "Social drinker · Non-smoker",
      "Daily life": "Repair, don’t replace",
      "On repeat": "Post-punk · Repair radio"
    },
    "prompts": [
      {
        "question": "An ideal Saturday",
        "answer": "Fix two things, break one thing, lunch with friends, call it progress."
      },
      {
        "question": "I will absolutely flirt by",
        "answer": "Repairing the pocket you mentioned once, then pretending that was casual."
      }
    ],
    "poll": {
      "question": "Pick our workshop project",
      "options": [
        "A wobbly chair",
        "A suspicious lamp",
        "Patch each other’s jackets"
      ]
    },
    "photos": [
      {
        "kind": "portrait",
        "caption": "Fern, caught in their natural habitat."
      },
      {
        "kind": "friends",
        "caption": "The repair crew. We fixed the table before eating off it."
      },
      {
        "kind": "life",
        "caption": "Solder, inspecting my work from a strictly non-supervisory position."
      }
    ]
  }
];
