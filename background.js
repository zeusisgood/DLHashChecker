// ダウンロードされたURLのリスト
let downloadedURLList = [];
//ダウンロードに使用されたURL
var downloadUrl = "";
function downloadStart(item) {
  console.log("First Download started: " + item.url);
  downloadUrl = item.url;
}

function downloadCompleted(download) {
  if (download.state && download.state.current === "complete") {
    console.log(`first Download Completed:`);

    if (!downloadedURLList.includes(downloadUrl)) {
      console.log(`Second Download Start:` + downloadUrl);

      downloadedURLList.push(downloadUrl);
      let downloading = browser.downloads.download({
        url: downloadUrl,
        filename: "ForCheckHash",
        conflictAction: "overwrite",
      });
    }
  }
}

console.log("Download File Hash Checker is loaded");

browser.downloads.onCreated.addListener(downloadStart);
browser.downloads.onChanged.addListener(downloadCompleted);
