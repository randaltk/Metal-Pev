const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const htmlPath = path.join(__dirname, "proposta-comercial-metalpev.html");
const pdfPath = path.join(__dirname, "Proposta-Comercial-MetalPev-Redesign.pdf");

async function main() {
  if (!fs.existsSync(htmlPath)) {
    console.error("Arquivo HTML não encontrado:", htmlPath);
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.goto(`file:///${htmlPath.replace(/\\/g, "/")}`, {
    waitUntil: "networkidle0",
    timeout: 60000,
  });

  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true,
  });

  await browser.close();
  console.log("PDF gerado com sucesso:");
  console.log(pdfPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
