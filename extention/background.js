console.log("Download File Hash Checker is loaded");
// ダウンロードされたURLのリスト
let downloadedURLList = [];
//ダウンロードに使用されたURL
let downloadUrl = "";

browser.downloads.onCreated.addListener(downloadStart); //DL開始時に呼び出す関数を指定
browser.downloads.onChanged.addListener(downloadCompleted); //DL完了時に呼び出す関数を指定

function downloadStart(item) {
  console.log("First Download started: " + item.url);
  downloadUrl = item.url;
}

function downloadCompleted(download) {
  if (download.state && download.state.current === "complete") {
    console.log(`first Download Completed:`);

    if (!downloadedURLList.includes(downloadUrl)) {
      console.log(
        `File is not Hashchecked Second Download Start:` + downloadUrl
      );
      downloadedURLList.push(downloadUrl);
      browser.downloads.download({
        url: downloadUrl,
        filename: "ForCheckHash",
        conflictAction: "overwrite",
      });
      //ハッシュ値を比較
    } else {
      console.log(`Already Hashchecked:` + downloadUrl);
    }
  }
}
