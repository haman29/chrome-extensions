chrome.contextMenus.create({
  title: "画像URLをコピー (with 出典リンク)",
  contexts: ["all"],
  onclick: function(info, tab) {
    var image_url = info.linkUrl;
    var reference_url = info.pageUrl;
    copyTextToClipboard(image_url + "\n" + reference_url);
  }
});
var copyTextToClipboard = function(txt){
    var copyArea = $("<textarea/>");
    copyArea.text(txt);
    $("body").append(copyArea);
    copyArea.select();
    document.execCommand("copy");
    copyArea.remove();
}
