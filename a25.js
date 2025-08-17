const { execSync } = require("child_process");
const fs = require("fs");

// Boshlanish sanasi (25 yil oldin)
const start = new Date("2025-01-01");
// Tugash sanasi — bugungi sana
const end = new Date();

while (start <= end) {
  // 60% kunlarda commit bo‘ladi
  if (Math.random() < 0.6) {
    // Har safar 1–6 commit bo‘ladi
    const commits = Math.floor(Math.random() * 10) + 2;
    for (let i = 0; i < commits; i++) {
      const content = `${start.toISOString()} commit ${i}\n`;
      fs.appendFileSync("commit.txt", content);
      execSync("git add commit.txt");
      execSync(
        `git commit -m "Update ${start.toISOString()} (#${i})" --date="${start.toISOString()}"`
      );
    }
  }

  // Kunlar 1–4 kunga oldinga o‘tadi
  start.setDate(start.getDate() + Math.floor(Math.random() * 4) + 1);
}

console.log("✅ 1999 yildan bugungi kungacha random commitlar yaratildi!");
