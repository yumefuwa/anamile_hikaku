document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("compareBtn").addEventListener("click", function () {
    const miles = parseInt(document.getElementById("miles").value);
    const yenPerMile = parseFloat(document.getElementById("yenPerMile").value);
    const cashFare = parseInt(document.getElementById("cashFare").value);
    const togetherFare = parseInt(document.getElementById("togetherRoundtripFare").value);

    if (isNaN(miles) || isNaN(yenPerMile) || isNaN(cashFare) || isNaN(togetherFare)) {
      document.getElementById("result").innerText = "すべての項目を入力してください。";
      return;
    }

    const mileValue = Math.round(miles * yenPerMile);
    const messageLines = [];

    messageLines.push(`✅ <マイル支払い>`);
    messageLines.push(`・必要マイル数：${miles.toLocaleString()}マイル`);
    messageLines.push(`・1マイル＝${yenPerMile}円換算 → ${mileValue.toLocaleString()}円相当`);
    messageLines.push("");

    messageLines.push(`✅ <現金支払い>`);
    messageLines.push(`・通常の現金運賃：${cashFare.toLocaleString()}円`);
    messageLines.push("");

    messageLines.push(`✅ <いっしょにマイル割>`);
    messageLines.push(`・10,000マイル × ${yenPerMile}円 ＝ ${(10000 * yenPerMile).toLocaleString()}円`);
    messageLines.push(`・同行者運賃合計：${togetherFare.toLocaleString()}円`);
    const togetherTotal = Math.round(10000 * yenPerMile) + togetherFare;
    messageLines.push(`・合計：${togetherTotal.toLocaleString()}円相当`);
    messageLines.push("");

    // 比較結果
    messageLines.push(`💡 <お得度比較>`);

    const diffMileVsCash = cashFare - mileValue;
    if (diffMileVsCash > 0) {
      messageLines.push(`・マイル支払いは現金より ${diffMileVsCash.toLocaleString()}円お得！`);
    } else if (diffMileVsCash < 0) {
      messageLines.push(`・現金の方がマイルより ${Math.abs(diffMileVsCash).toLocaleString()}円安い。`);
    } else {
      messageLines.push(`・マイルと現金は同等の価値です。`);
    }

    const diffTogetherVsCash = cashFare - togetherTotal;
    if (diffTogetherVsCash > 0) {
      messageLines.push(`・いっしょにマイル割の方が現金より ${diffTogetherVsCash.toLocaleString()}円お得！`);
    } else if (diffTogetherVsCash < 0) {
      messageLines.push(`・現金の方がいっしょにマイル割より ${Math.abs(diffTogetherVsCash).toLocaleString()}円安い。`);
    } else {
      messageLines.push(`・いっしょにマイル割と現金は同等の価値です。`);
    }

    // 結果出力
    document.getElementById("result").innerText = messageLines.join("\n");
  });
});
