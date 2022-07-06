// set up the web3 library
const web3 = new Web3(Web3.givenProvider)

// select the form in the page
const form = document.querySelector("form")

// make an async function that needs an amount passed to it
const send = async function (amount) {
  // get a list of accounts from metamask
  const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })

  // turn the amount into the base unit of currency, wei
  const wei = web3.utils.toWei(amount, "ether")
  
  // if at least one account
  if (accounts.length > 0) {
    // set up a transaction from logged in account
    // to a set amount, with the value in hex format
    window.ethereum.request({ 
      method: "eth_sendTransaction",
      params: [{
        from: accounts[0],
        // service address
        to: "0x9202dD9d9307742F0F8B3296a086b46305ab5045",
        value: web3.utils.toHex(wei)
      }]
    })
  }
}

// only show the form if theres a wallet
if (window.ethereum) {
  form.classList.add("has-eth")
}

// set up a listener for form submission
form.addEventListener("submit", function (event) {
  // stop the default thing happening, e.g. going to the next page
  event.preventDefault()

  // if a wallet installed
  if (window.ethereum) {
    // get the input and pass to send function
    const input = form.querySelector("input")
    send(input.value)
  } else {
    // pop up an install alert
    alert("Please install a wallet")
  }
})