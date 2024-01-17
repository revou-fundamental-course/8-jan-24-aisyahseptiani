var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

document.getElementById("hitung").addEventListener("click", function() {
  var sisi = parseFloat(document.getElementById("sisi").value);
  var luas = sisi * sisi;
  var keliling = 4 * sisi;
  document.getElementById("luas").value = luas ;
  document.getElementById("keliling").value = keliling;
});

document.getElementById("reset").addEventListener("click", function() {
  document.getElementById("sisi").value = "";
  document.getElementById("luas").value = "";
  document.getElementById("keliling").value = "";
});