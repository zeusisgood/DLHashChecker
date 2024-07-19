// ダウンロードされたURLのリスト
let downloadedURLList = [];
//ダウンロードに使用されたURL
let downloadUrl = "";
console.log("Download File Hash Checker is loaded");
function downloadStart(item) {
  console.log("First Download started: " + item.url);
  downloadUrl = item.url;
}

function downloadCompleted(download) {
  if (download.state && download.state.current === "complete") {
    console.log(`first Download Completed:`);

    if (!downloadedURLList.includes(downloadUrl)) {
      console.log(`Second Download Start:` + downloadUrl);
      1;
      downloadedURLList.push(downloadUrl);
      browser.downloads.download({
        url: downloadUrl,
        filename: "ForCheckHash",
        conflictAction: "overwrite",
      });
    }
  }
}

browser.downloads.onCreated.addListener(downloadStart);
browser.downloads.onChanged.addListener(downloadCompleted);
