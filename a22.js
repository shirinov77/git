const { execSync } = require("child_process");
const fs = require("fs");

const start = new Date("2022-01-01");
const end = new Date("2022-12-31");

while (start <= end) {
  if (Math.random() < 0.7) {
    const commits = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < commits; i++) {
      const content = `${start.toISOString()} commit ${i}\n`;
      fs.appendFileSync("commit.txt", content);
      execSync("git add commit.txt");
      execSync(
        `git commit -m "Update ${start.toISOString()} (#${i})" --date="${start.toISOString()}"`
      );
    }
  }

  start.setDate(start.getDate() + Math.floor(Math.random() * 4) + 1);
}

console.log("✅ 2022 yil uchun random commitlar yaratildi!");