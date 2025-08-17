const { execSync } = require("child_process");
const fs = require("fs");

const start = new Date("2021-01-01");
const end = new Date("2021-12-31");

while (start <= end) {
  // Endi faqat 30% kunlarda commit bo‘ladi
  if (Math.random() < 0.3) {
    // Commitlar soni ham 1–5 oralig‘ida
    const commits = Math.floor(Math.random() * 5) + 1;
    for (let i = 0; i < commits; i++) {
      const content = `${start.toISOString()} commit ${i}\n`;
      fs.appendFileSync("commit.txt", content);
      execSync("git add commit.txt");
      execSync(
        `git commit -m "Update ${start.toISOString()} (#${i})" --date="${start.toISOString()}"`
      );
    }
  }

  // Kunlar endi 2–6 kunga oldinga o‘tadi
  start.setDate(start.getDate() + Math.floor(Math.random() * 5) + 2);
}

console.log("✅ 2021 yil uchun siyrak random commitlar yaratildi!");
