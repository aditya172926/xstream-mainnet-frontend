export const bridgeDataConfig = {
  5: {
    // goerli testnet
    erc20TokenAddress: "0x7ea6eA49B0b0Ae9c5db7907d139D9Cd3439862a1", // TEST
    superTokenAddress: "0x3427910EBBdABAD8e02823DFe05D34a65564b1a0", // TESTx
    xstreamContractAddress: "0x53B61f49b189dD81AeB22F4Dfe1c09E6EC7Cb305", // contract deployed on Goerli
    connextDomainId: 1735353714,
    acceptedTokens: [
      {
        address: "0x3427910EBBdABAD8e02823DFe05D34a65564b1a0",
        name: "TESTx",
        type: "superToken",
      },
      {
        address: "0x7ea6eA49B0b0Ae9c5db7907d139D9Cd3439862a1",
        name: "TEST",
        type: "erc20",
      },
    ],
  },
  80001: {
    //mumbai testnet
    erc20TokenAddress: "0xeDb95D8037f769B72AAab41deeC92903A98C9E16",
    superTokenAddress: "0xFB5fbd3B9c471c1109A3e0AD67BfD00eE007f70A",
    xstreamContractAddress: "0xfE079E7cF55e49Fa13011E4Eff9C22DBad27934A", // contract deployed on Mumbai testnet
    connextDomainId: 9991,
    acceptedTokens: [
        {
          address: "0xFB5fbd3B9c471c1109A3e0AD67BfD00eE007f70A",
          name: "TESTx",
          type: "superToken",
        },
        {
          address: "0xeDb95D8037f769B72AAab41deeC92903A98C9E16",
          name: "TEST",
          type: "erc20",
        },
      ],
  },
  100: { // Gnosis Mainnet Chain
    erc20TokenAddress: "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83", // USDC on gnosis
    superTokenAddress: "0x1234756ccf0660E866305289267211823Ae86eEc", // USDCx on gnosis
    xstreamContractAddress: "", // Contract deployed on gnosis
    connextDomainId: 6778479,
    acceptedTokens: [
      {
        address: "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83",
        name: "USDC",
        type: "erc20"
      }
    ]
  },
  137: { // Polygon Mainnet
    erc20TokenAddress: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC on Polygon
    superTokenAddress: "0xCAa7349CEA390F89641fe306D93591f87595dc1F", // USDCx on Polygon
    xstreamContractAddress: "", // Contract deployed on Polygon
    connextDomainId: 1886350457,
    acceptedTokens: [
      {
        address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        name: "USDC",
        type: "erc20"
      }
    ]
  }
};
