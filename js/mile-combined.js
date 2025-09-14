document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("compareBtn").addEventListener("click", function () {
    const miles = parseInt(document.getElementById("miles").value);
    const yenPerMile = parseFloat(document.getElementById("yenPerMile").value);
    const cashFare = parseInt(document.getElementById("cashFare").value);
    const togetherFare = parseInt(document.getElementById("togetherRoundtripFare").value); // ← ← ← ✅ ID名を正確に！

    if (isNaN(miles) || isNaN(yenPerMile) || isNaN(cashFare) || isNaN(togetherFare)) {
      document.getElementById("result").innerText = "すべての項目を入力してください。";
      return;
    }

    const mileValue = Math.round(miles * yenPerMile);
    const togetherMileValue = Math.round(10000 * yenPerMile); // ← ← ← 10,000マイル固定！
    const togetherTotal = togetherMileValue + togetherFare;

    const messageLines = [];

    messageLines.push(`✅ <マイル支払い>`);
    messageLines.push(`・${miles.toLocaleString()}マイル × ${yenPerMile}円 ＝ ${mileValue.toLocaleString()}円相当`);
    messageLines.push("");

    messageLines.push(`✅ <現金支払い>`);
    messageLines.push(`・${cashFare.toLocaleString()}円`);
    messageLines.push("");

    messageLines.push(`✅ <いっしょにマイル割>`);
    messageLines.push(`・10,000マイル × ${yenPerMile}円 ＝ ${togetherMileValue.toLocaleString()}円`);
    messageLines.push(`・同行者往復料金：${togetherFare.toLocaleString()}円`);
    messageLines.push(`・合計：${togetherTotal.toLocaleString()}円`);
    messageLines.push("");

    // お得度比較
    const diffMileVsCash = cashFare - mileValue;
    const diffTogetherVsCash = cashFare - togetherTotal;

    messageLines.push(`💡 <お得度比較>`);

    if (diffMileVsCash > 0) {
      messageLines.push(`・マイル支払いの方が ${diffMileVsCash.toLocaleString()}円お得`);
    } else if (diffMileVsCash < 0) {
      messageLines.push(`・現金の方がマイルより ${Math.abs(diffMileVsCash).toLocaleString()}円安い`);
    } else {
      messageLines.push(`・マイルと現金は同等`);
    }

    if (diffTogetherVsCash > 0) {
      messageLines.push(`・いっしょにマイル割の方が ${diffTogetherVsCash.toLocaleString()}円お得`);
    } else if (diffTogetherVsCash < 0) {
      messageLines.push(`・現金の方がいっしょにマイル割より ${Math.abs(diffTogetherVsCash).toLocaleString()}円安い`);
    } else {
      messageLines.push(`・いっしょにマイル割と現金は同等`);
    }

    document.getElementById("result").innerText = messageLines.join("\n");
  });
});
