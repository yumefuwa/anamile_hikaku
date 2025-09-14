document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("compareBtn").addEventListener("click", function () {
    const yenPerMile = parseFloat(document.getElementById("yenPerMile").value);
    const companionFare = parseInt(document.getElementById("companionFare").value);
    const normalFare = parseInt(document.getElementById("normalFare").value);

    if (isNaN(yenPerMile) || isNaN(companionFare) || isNaN(normalFare)) {
      document.getElementById("result").innerText = "すべての項目を入力してください。";
      return;
    }

    const mileValue = Math.round(10000 * yenPerMile); // 10,000マイル固定
    const totalValue = mileValue + companionFare;

    let message = `いっしょにマイル割り：${mileValue}円（マイル価値）＋${companionFare}円 = ${totalValue}円相当\n`;
    message += `通常運賃（2人分）：${normalFare}円\n\n`;

    if (totalValue < normalFare) {
      message += "👉 いっしょにマイル割りの方がお得です！";
    } else if (totalValue > normalFare) {
      message += "👉 通常運賃の方が安いです。";
    } else {
      message += "👉 どちらも同じくらいの金額です。";
    }

    document.getElementById("result").innerText = message;
  });
});
