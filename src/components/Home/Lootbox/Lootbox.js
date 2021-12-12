import { useState, useEffect } from "react";
import Web3 from "web3";
import { VaporcrateModal } from "../../Home/Dialog/Dialog";

const contract_abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "buyToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const contract_address = {
  "Basic Vaporcrate": "0x5469B1b2a5E184dbFa3658347A34caFAA9D72D9a",
  "Epic Vaporcrate": "0x6f3D16572F39b150eaB7Ce4A6C9B75E321bc3A7c",
  "Legendary Vaporcrate": "0xb8B1c1507d42A53CCBa331DEaBD3739aE1906ED3",
};

export default function Lootbox(props) {
  const [tokenRemain, setTokenRemain] = useState(props.count);

  useEffect(() => {
    if (!props.metamaskProvider) return;
    props.metamaskProvider
      .request({ method: "eth_accounts" })
      .then()
      .catch((err) => {
        console.error(err);
      });

    props.metamaskProvider
      .request({ method: "eth_chainId" })
      .then((chainId) => {
        if (chainId === 56) {
          const web3 = new Web3(props.metamaskProvider);
          const tokenContract = new web3.eth.Contract(
            contract_abi,
            contract_address[props.title]
          );
          tokenContract.methods
            .balanceOf(contract_address[props.title])
            .call()
            .then((data) => {
              setTokenRemain(data);
            });
        } else {
          setTokenRemain("???");
        }
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function buyItem() {
    if (!props.metamaskProvider.selectedAddress) {
      alert("Please connect wallet!");
      return;
    }

    props.metamaskProvider
      .request({ method: "eth_chainId" })
      .then((chainId) => {
        if (chainId === 56) {
          props.metamaskProvider
            .request({
              method: "eth_sendTransaction",
              params: [
                {
                  from: props.metamaskProvider.selectedAddress,
                  to: contract_address[props.title],
                  value: "0x" + (props.price * 10 ** 18).toString(16),
                  data:
                    "0x2d296bf1" +
                    "0000000000000000000000000000000000000000000000000000000000000001",
                  gas: "0x5208",
                  gasPrice: "0x174876E800",
                },
              ],
            })
            .then((data) => setTokenRemain(tokenRemain - 1))
            .catch((error) => {});
        } else {
          props.metamaskProvider
            .request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: "0x38" }],
            })
            .then()
            .catch((error) => {
              if (error.code === 4902) {
                props.metamaskProvider.request({
                  method: "wallet_addEthereumChain",
                  params: [
                    {
                      chainId: "0x38",
                      chainName: "Binance Smart Chain Mainnet",
                      nativeCurrency: {
                        name: "BNB",
                        symbol: "BNB",
                        decimals: 18,
                      },
                      rpcUrls: ["https://bsc-dataseed1.binance.org/"],
                    },
                  ],
                });
              } else {
                console.error(error);
              }
            });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function buyClickHandle() {
    if (!props.metamaskProvider) {
      alert("Please install metamask!");
      return;
    }
    props.metamaskProvider
      .request({ method: "eth_requestAccounts" })
      .then(buyItem)
      .catch((error) => {
        if (error.code === 4001) {
          console.log("Please connect to MetaMask.");
        } else {
          console.error(error);
        }
      });
  }

  return (
    <div>
      <div className="custom-box-shadow rounded-xl pt-2 pb-5 px-2">
        <img src={props.src} className="mx-auto p-4" alt="" />
        <p className="text-white text-base">{props.title}</p>
        <p className="flex items-center justify-center text-white text-opacity-50 text-xs h-8 md:h-20 lg:h-12">
          {props.desc}
        </p>
        <p className="text-white text-base">{props.price + " BNB"}</p>
        <VaporcrateModal
          src={props.src}
          title={props.title}
          desc={props.desc}
          count={props.count}
          color={props.color}
          buyClickHandle={buyClickHandle}
          tokenRemain={tokenRemain}
        />
      </div>
      <p className="text-white text-opacity-50 text-xs py-2">
        {tokenRemain}/{props.count} Left
      </p>
    </div>
  );
}
