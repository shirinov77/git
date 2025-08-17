const { execSync } = require("child_process");
const fs = require("fs");

const start = new Date("2024-01-01");
const end = new Date("2024-12-31");

while (start <= end) {
  // Endi 85% kunlarda commit bo‘ladi
  if (Math.random() < 0.85) {
    // Har safar 2–12 commit bo‘ladi
    const commits = Math.floor(Math.random() * 11) + 2;
    for (let i = 0; i < commits; i++) {
      const content = `${start.toISOString()} commit ${i}\n`;
      fs.appendFileSync("commit.txt", content);
      execSync("git add commit.txt");
      execSync(
        `git commit -m "Update ${start.toISOString()} (#${i})" --date="${start.toISOString()}"`
      );
    }
  }

  // Kunlar 1–3 gacha oldinga o‘tadi (ya’ni tezroq)
  start.setDate(start.getDate() + Math.floor(Math.random() * 3) + 1);
}

console.log("✅ 2024 yil uchun ko‘proq random commitlar yaratildi!");
