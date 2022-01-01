require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food cheap rate place assume impulse light army giant'; 
let testAccounts = [
"0x0bf939937e09d64f1c6a509c1326e76e19274f99666101b3d56a8f98fca51ef5",
"0xf55ef07e852e74655b7a89a9829dfcf6f1ab48bf22b96e1807d3c2abff9d4aed",
"0xece8ba365c8db9f8251f42353724330c4817fd7148b748c93127171394643656",
"0x7cbe5da470ae41f004c0c82e5308576bc354170405e21e18c39fa93a7a948d89",
"0xc400bf38835c504bfa5a258a35f2314026a6271aa30fdec525c5decf1674f19e",
"0xb8c4e079ddb23badbaaca0a0d9ba79195bd9a3ff8710cecbb12db7b2041ce7ea",
"0xbb1557ef64405f4e2a7e947e75b4f8fc77fc91f55c1b594edd1c28001789726f",
"0x8114ee616a8f4edd23f8d57c8b37b97c14c7a931d432685f7ef6ed85e16f842b",
"0x694067d34cd39dc749f388997305f0e9d39591c0867ddd465cdd1126a62df08b",
"0xa838b48fcaf4b0c7a9a209d0c7bd8e3af8201164a1defc0749aa73c6a2009b3f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


