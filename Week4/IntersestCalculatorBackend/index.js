async function calculate() {
  const principal = document.getElementById("principal").value;
  const interestRate = document.getElementById("interestRate").value;
  const duration = document.getElementById("durationInYears").value;

  const response = await fetch(
    "https://sum-server.100xdevs.com/interest?principal=" +
      principal +
      "&rate=" +
      interestRate +
      "&time=" +
      duration
  );

  const obj = await response.json();
  const totalAmount = obj["total"];
  const interestAmount = obj["interest"];

  document.getElementById("totalAmountDisplay").innerHTML =
    "Total Amount:- " + totalAmount;
  document.getElementById("interestDisplay").innerText =
    "Interest Amount:- " + interestAmount;
}
