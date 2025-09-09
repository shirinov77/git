const { execSync } = require("child_process");
const fs = require("fs");

const start = new Date("2025-01-01"); 
const end = new Date(); 

while (start <= end) {
  if (Math.random() < 0.85) {
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

  start.setDate(start.getDate() + Math.floor(Math.random() * 3) + 1);
}

console.log("✅ 2025 yil uchun (hozirgi kungacha) random commitlar yaratildi!");
