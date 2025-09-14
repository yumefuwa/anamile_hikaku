document.addEventListener("DOMContentLoaded", function () {
  // マイル vs 現金 比較
  document.getElementById("compareBtn").addEventListener("click", function () {
    const miles = parseInt(document.getElementById("miles").value);
    const yenPerMile = parseFloat(document.getElementById("yenPerMile").value);
    const cashFare = parseInt(document.getElementById("cashFare").value);

    if (isNaN(miles) || isNaN(yenPerMile) || isNaN(cashFare)) {
      document.getElementById("result").innerText = "すべての項目を入力してください。";
      return;
    }

    const mileValue = Math.round(miles * yenPerMile);
    let diff = mileValue - cashFare;
    let message = `マイル価値：${mileValue}円相当\n現金運賃：${cashFare}円\n`;

    if (diff > 0) {
      message += `👉 マイルの方が ${diff.toLocaleString()} 円分お得！`;
    } else if (diff < 0) {
      message += `👉 現金で払う方が ${Math.abs(diff).toLocaleString()} 円安いです。`;
    } else {
      message += "👉 同じくらいの価値です。";
    }

    document.getElementById("result").innerText = message;
  });

  // いっしょにマイル割 比較
  document.getElementById("togetherCompareBtn").addEventListener("click", function () {
    const yenPerMile = parseFloat(document.getElementById("togetherYenPerMile").value);
    const companionFare = parseInt(document.getElementById("companionFare").value);
    const normalFare = parseInt(document.getElementById("normalFare").value);

    if (isNaN(yenPerMile) || isNaN(companionFare) || isNaN(normalFare)) {
      document.getElementById("togetherResult").innerText = "すべての項目を入力してください。";
      return;
    }

    const mileValue = Math.round(10000 * yenPerMile);
    const totalValue = mileValue + companionFare;
    const diff = normalFare - totalValue;

    let message = `いっしょにマイル割り：${mileValue}円（マイル価値）＋${companionFare}円 = ${totalValue}円相当\n`;
    message += `通常運賃（2人分）：${normalFare}円\n\n`;

    if (diff > 0) {
      message += `👉 いっしょにマイル割りで ${diff.toLocaleString()} 円お得！`;
    } else if (diff < 0) {
      message += `👉 通常運賃の方が ${Math.abs(diff).toLocaleString()} 円安いです。`;
    } else {
      message += "👉 どちらも同じくらいの金額です。";
    }

    document.getElementById("togetherResult").innerText = message;
  });
});
