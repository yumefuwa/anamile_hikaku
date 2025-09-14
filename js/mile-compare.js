document.addEventListener("DOMContentLoaded", function () {
  // 通常マイル vs 現金 比較
  document.getElementById("compareBtn").addEventListener("click", function () {
    const miles = parseInt(document.getElementById("miles").value);
    const yenPerMile = parseFloat(document.getElementById("yenPerMile").value);
    const cashFare = parseInt(document.getElementById("cashFare").value);

    if (isNaN(miles) || isNaN(yenPerMile) || isNaN(cashFare)) {
      document.getElementById("result").innerText = "すべての項目を入力してください。";
      return;
    }

    const mileValue = Math.round(miles * yenPerMile);
    let message = `マイル価値：${mileValue}円相当\n現金：${cashFare}円\n`;

    if (mileValue > cashFare) {
      message += "👉 マイルの方が価値が高くてお得！";
    } else if (mileValue < cashFare) {
      message += "👉 現金で払う方が安いです。";
    } else {
      message += "👉 同じくらいの価値です。";
    }

    document.getElementById("result").innerText = message;
  });

  // いっしょにマイル割り 比較
  document.getElementById("togetherCompareBtn").addEventListener("click", function () {
    const yenPerMile = parseFloat(document.getElementById("togetherYenPerMile").value);
    const companionFare = parseInt(document.getElementById("companionFare").value);
    const normalFare = parseInt(document.getElementById("normalFare").value);

    if (isNaN(yenPerMile) || isNaN(companionFare) || isNaN(normalFare)) {
      document.getElementById("togetherResult").innerText = "すべての項目を入力してください。";
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

    document.getElementById("togetherResult").innerText = message;
  });
});
