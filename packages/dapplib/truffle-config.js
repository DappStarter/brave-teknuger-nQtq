require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski struggle crawl pumpkin solid guess clog metal gas'; 
let testAccounts = [
"0x8189b964f7c5619a1b8e75f2892a226edf6ceb44678d8f61691f0128fa9de578",
"0x4969d53334be7abf88ece52f906067b00ea6c7d11e63ab2feb82c57ea9ed41f8",
"0x9604e0a67d9f1cfbf2ca5e3028dee3b21358e9466d408e4868391d1f2f10a9db",
"0x8a88770c6c3a88806da97054472886100131270fdc23c3a89ed49f57435ad08a",
"0xa23f2986674a00a2d07488d3c7e8caa97e42f22f91e232d8098dce31128b2701",
"0x4650dac7835a41cd78ef01e438c86a8ec68a82fe9cb268207035f6b50da9991d",
"0x3e191cf5cee0d0fac4b1a38ebc77c2d06e253747da4d3bba9d24f8fcc8b2e5d1",
"0x8d161c718aeccfcb5542bbcc04baf9adef1ae5ddc8ba0947a58db4ed751df39b",
"0xd3e605a4d88eaf1206deef238d848b72925c6cdceb68da8109078e2a95fa87a8",
"0xb1e38f1af801528df58883f712077d62b21535e8d8a9cf8490cfa653a6264d3a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

