# Spud 🥔

A playful potato matchmaking demo with 24 illustrated profiles, likes, matches, undo, keyboard controls, and mobile swiping. Matches are saved in your browser. All matches are simulated; no account or backend is required.

## Run

From this directory:

```sh
python3 -m http.server 3000 --bind 0.0.0.0
```

Use the Discover and Matches tabs, or the left/right arrow keys to pass/like. No build or package installation is needed.

## Chat

Open Matches and select Say hello to chat with a matched potato. Replies are scripted, not real people or AI. Conversations and existing matches stay in this browser’s local storage; nothing is sent to a server.

## Personalities

Profiles range from thoughtful romantics and quiet introverts to one-word texters, gym obsessives, unreliable planners, and accidental networkers. Each has a bio, prompt answer, interests, and a distinct scripted chat voice. Original profile positions and the storage key are preserved so existing matches and conversations remain intact. Append new profiles rather than reordering them.

## Secret Admirer

Tap the envelope banner above Discover to choose from up to four hidden, unmatched potatoes. Reveal one, then pass or like back to match and open chat. This is a simulated game: each hidden card reveals an admirer. Picks survive closing or reloading; previously revealed potatoes are excluded from future rounds. When everyone has been revealed or matched, the game shows an empty state.

## Matched profiles and portraits

Click a photo or View profile in Matches to reopen the full profile. You can also view a profile from its chat and return via Send a message. All 18 generated portraits are bundled locally in assets/potato-portraits.png, a 3-column by 6-row sprite sheet in profile order. No external image service is needed.

## Detailed profiles

Open Photos, prompts & more in Discover or View profile in Matches. Every potato has three photos, a captioned gallery, lifestyle facts, multiple prompt answers, and a unique three-option poll. Votes are local preferences, not simulated public percentages, and persist in browser storage. Photo sheets and profile-details.js are bundled with the site. Detail and photo quality intentionally vary by personality.

## Free personality chats

Chats run entirely in the browser without accounts, API keys, billing, or a backend. chat-engine.js selects topic-aware scripted responses from chat-personalities.js and each profile. It handles greetings, pets, work, music, hobbies, relationship intentions, dates, food, compliments, low moods, and boundaries. Short follow-ups reuse the prior topic. Replies avoid recently used lines where alternatives exist. Names introduced with “Call me Alex” and favorites such as “My favorite food is pizza” can be recalled from the saved conversation; memory stays separate per potato. This is limited scripted conversation, not general-purpose AI. Run `node --test tests/chat.test.cjs` for the conversation checks.

## Discovery

Discover skips matched potatoes, including after reload and matches made through profiles or Secret Admirer. When all potatoes are matched, an empty state links to Matches. Undo still reverses the most recent swipe. Run `node --test tests/*.test.cjs` for chat and discovery checks.

Passes in Discover and Secret Admirer are saved and excluded from future cards and admirer rounds. Undo restores the latest Discover swipe, including a pass. Older Discover passes from before this feature were not stored and cannot be reconstructed.

## Each visitor’s experience

All 24 profiles are available to a new visitor, with no matches, passes, chats, or poll votes. State is stored only in this browser profile under the app’s storage key. Returning visitors retain their progress, and matched/passed potatoes stay excluded. Separate browsers have independent experiences; people sharing a browser profile share its progress. There is no sign-in or cross-device sync. The footer’s Start fresh action opens a confirmation before clearing only this app’s progress and restoring all cards.

The six newest potatoes use assets/potato-new-arrivals.png, one character per row with portrait/friends/pet columns. Original photos and saved profile indices remain unchanged.
