typeof web3 !== "undefined"
  ? (web3 = new Web3(web3.currentProvider))
  : (web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545")));

if (web3.isConnected()) {
  console.log("connected");
} else {
  console.log("not connected");
  exit;
}

const contractAddress = "0xf3c06d383278a1a1f776e994483ab319905e4c3b";
const contract = web3.eth.contract(abi).at(contractAddress);

const account = web3.eth.accounts[0];

function decrement() {
  contract.decrement({ from: account, gas: 3000000 }, (err, result) => {
    if (err) alert("decrement error!");
  });
}

function increment() {
  contract.increment({ from: account, gas: 3000000 }, (err, result) => {
    if (err) alert("increment error!");
  });
}

function getCount() {
  contract.getCount((err, result) => {
    document.getElementById("count").innerText = result;
  });
}
