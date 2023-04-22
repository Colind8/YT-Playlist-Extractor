# YT-Playlist-Extractor
YT Playlist Extractor is a tool that allows you to easily extract all video URLs from a YouTube playlist without the need of an API

## Requirements
[Node.JS](https://nodejs.org/en)

## How to use
1. Download the file index.js
2. Open your YouTube playlist, and scroll all the way down to the bottom
3. Inspect the page to copy the HTML code containing the list of videos. Pick the parent element that contains the list of videos.
4. Copy the HTML from that element and save it to a text file called `playlist.txt`
5. Open shell or whatever you use and run `node index.js`
6. The program should do it's thing. If there's any issues, report them in... well issues.
7. Once the program finishes, it'll tell you the amount of videos it extracted.
8. The extracted videos should be saved in a new text file called `EXTRACT.txt`
