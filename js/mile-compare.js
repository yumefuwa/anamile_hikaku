document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("compareBtn");
  if (btn) {
    btn.addEventListener("click", function () {
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
  }
});
