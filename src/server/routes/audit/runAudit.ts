// @ts-ignore
import lighthouse from "lighthouse";
// import puppeteer from "puppeteer";
import { launch } from "chrome-launcher";
import { NextFunction as Next } from "express";
import AuditTable from "../../database/AuditTable";
import mapLighthouseResult from "../../utils/mapLighthouseResult";

export default async function runAudit(req: any, res: any, next: Next) {
  const url = process.env.AUDIT_URL;
  const chromeFlags = [
    "--headless",
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--no-first-run",
    "--disable-gpu",
    "--disable-translate",
    "--disable-default-apps",
    "--disable-extensions",
    "--disable-background-networking",
    "--disable-sync",
    "--metrics-recording-only",
    "--safebrowsing-disable-auto-update",
    "--disable-setuid-sandbox"
  ];
  const chrome = await launch({ chromeFlags });
  const options = {
    port: chrome.port
  };

  try {
    const result = await lighthouse(url, options, null, null);
    console.log(result);
    const audit = mapLighthouseResult(result.lhr);
    console.log(audit);

    // const rows = AuditTable.insertAudit(audit);
    // console.log(rows);
  } catch (error) {
    console.log(error);
    next(error);
  } finally {
    chrome.kill();
  }
}

// const CHROME_FLAGS = [
//   "--no-sandbox",
//   "--disable-dev-shm-usage",
//   "--disable-gpu"
// ];
// const TIMEOUT = 10 * 1000;

// export default async function runAudit(req: any, res: any, next: Next) {
//   console.log("runAudit");
//   const url = process.env.AUDIT_URL;
//   const browser = await puppeteer.launch({
//     args: CHROME_FLAGS,
//     timeout: TIMEOUT
//   });
//   const port = new URL(browser.wsEndpoint()).port;
//   const flags = {
//     onlyCategories: ["performance"],
//     port
//   };

//   try {
//     const result = await lighthouse(url, flags, null, null);
//     console.log("result");
//     const audit = mapLighthouseResult(result.lhr);
//     console.log("audit");

//     // const rows = AuditTable.insertAudit(audit);
//     // console.log(rows);
//   } catch (error) {
//     console.log(error);
//     next(error);
//   } finally {
//     browser.close();
//   }
// }
