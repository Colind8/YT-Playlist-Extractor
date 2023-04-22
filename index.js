console.log("INITIALIZING...");
const fs = require('fs');
file = fs.readFileSync('playlist.txt').toString();
text = [];
number = 0;
console.log("INITIALIZATION COMPLETE...");
console.log("STARTING...");

while (file.includes("/watch?v=")) {
	
	
	inx = file.indexOf("/watch?v=");
	extract = "https://youtube.com" + file.slice(inx, inx + 20);
	if (text[text.length - 1] != extract) {
		text.push(extract);
		number++;
		console.log("-- File " + number + "complete");
	}
	
	file = file.slice(inx + 20, file.length);
	
}

console.log("CREATING TEXT...");
listtext = "";
for (i=0; i < text.length; i++) {
	listtext += text[i] + "\n";
}


console.log("SAVING...");
console.log(number + " total links extracted");
fs.writeFileSync("EXTRACT.txt", listtext);