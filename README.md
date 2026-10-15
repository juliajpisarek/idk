# Spud 🥔

A playful potato matchmaking demo with 18 illustrated profiles, likes, matches, undo, keyboard controls, and mobile swiping. Matches are saved in your browser. All matches are simulated; no account or backend is required.

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
