const readline = require("readline");

// Configure readline for better control over output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Lyrics to be displayed letter by letter
const lyrics = [
  "It's stuck with you forever, so promise you won't let it go",
  "I'll trust the universe will always bring me to you",
  ".............................",
  "I'll imagine we fell in love",
  "I'll nap under moonlight skies with you",
  "I think I'll picture us, you with the waves",
  "The ocean's colors on your face",
  "I'll leave my heart with your air",
  "So let me fly with you",
  "Will you be",
  "forever with me?",
];

// ANSI escape codes for blue color
const blue = "\x1b[38;2;100;149;237m";
const reset = "\x1b[0m";

async function printLyrics() {
  for (let i = 0; i < lyrics.length; i++) {
    await printLine(lyrics[i]);
  }
  await animateHeart(14); // Larger heart
  process.exit();
}

async function printLine(text) {
  return new Promise(async (resolve) => {
    let line = "";
    for (let i = 0; i < text.length; i++) {
      line += text[i];
      process.stdout.write(blue + text[i] + reset);
      await delay(90); // Adjust speed of letter appearance
    }
    process.stdout.write("\n");
    await delay(500); // Pause before the next line
    resolve();
  });
}

async function animateHeart(size) {
  let pattern = "";
  const n = Math.floor(size / 2) * 2;
  let maxUpperWidth = 0;

  // Calculate maximum width from upper pattern
  for (let i = size / 2; i < size; i += 2) {
    const currentWidth = i * 2 + (n - i);
    if (currentWidth > maxUpperWidth) maxUpperWidth = currentWidth;
  }

  // Enhanced upper heart pattern
  for (let i = size / 2; i < size; i += 2) {
    const spaces = Math.floor((n - i) / 2);
    let line = " ".repeat(spaces);

    // Left lobe
    for (let j = 0; j < i; j++) {
      line += "*";
      await renderPattern(pattern + line);
    }

    // Center spacing
    line += " ".repeat(n - i);

    // Right lobe
    const rightStart = line.length;
    for (let j = 0; j < i; j++) {
      line += "*";
      await renderPattern(pattern + line);
    }

    pattern += line + "\n";
  }

  // Perfect proportional V-shape
  for (let i = maxUpperWidth; i >= 1; i -= 2) {
    const spaces = (maxUpperWidth - i) / 2;
    let line = " ".repeat(spaces);

    // Animate stars from center outwards
    for (let j = 0; j < i; j++) {
      line += "*";
      await renderPattern(pattern + line);
    }

    pattern += line + "\n";
  }
}

async function renderPattern(output) {
  return new Promise((resolve) => {
    setTimeout(() => {
      process.stdout.write("\x1B[2J\x1B[3J\x1B[H");
      process.stdout.write(blue + output + reset);
      resolve();
    }, 50); // Smoother animation speed
  });
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Start the lyric animation
printLyrics();

// Handle process exit
process.on("SIGINT", () => {
  process.stdout.write(reset);
  process.exit();
});
