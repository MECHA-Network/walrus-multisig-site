# Walrus MultiSig DAO Website

### Install and setup Walrus
- Download and setup walrus binary:
```
SYSTEM=ubuntu-x86_64 # or macos-x86_64 or macos-arm64
curl https://storage.googleapis.com/mysten-walrus-binaries/walrus-latest-$SYSTEM -o walrus
chmod +x walrus
```
Then move the binary to: `~/../../usr/local/bin/`
- Setup walrus config:
```

```

### Prerequisites
Before you start, make sure you
- have a recent version of Rust installed;
- have git installed;
- followed all Walrus setup instructions.
- Interacting with Walrus requires a valid Sui Testnet wallet with some amount of SUI tokens. The easiest way to set this up is via the Sui CLI; see the installation instructions in the Sui documentation.
After installing the Sui CLI, you need to set up a Testnet wallet by running sui client, which prompts you to set up a new configuration. Make sure to point it to Sui Testnet, you can use the full node at https://fullnode.testnet.sui.io:443 for this. See here for further details.
If you already have a Sui wallet configured, you can directly set up the Testnet environment (if you don't have it yet),
```
sui client new-env --alias testnet --rpc https://fullnode.testnet.sui.io:443
```
and switch the active environment to it:
```
sui client switch --env testnet
```
After this, you should get something like this (everything besides the testnet line is optional):
```
$ sui client envs
╭──────────┬─────────────────────────────────────┬────────╮
│ alias    │ url                                 │ active │
├──────────┼─────────────────────────────────────┼────────┤
│ devnet   │ https://fullnode.devnet.sui.io:443  │        │
│ localnet │ http://127.0.0.1:9000               │        │
│ testnet  │ https://fullnode.testnet.sui.io:443 │ *      │
│ mainnet  │ https://fullnode.mainnet.sui.io:443 │        │
╰──────────┴─────────────────────────────────────┴────────╯
```
Finally, make sure you have at least one gas coin with at least 1 SUI. You can obtain one from the Testnet faucet:
```
sui client faucet
```
After some seconds, you should see your new SUI coins:
```
sui client gas
```

# Build the website
First, clone and enter this repo:
```
git clone https://github.com/Tahlil/walrus-site-nextjs.git
cd walrus-site-nextjs/walrus-sites
```
Then, build the release version of the site builder:
```
cargo build --release
```

### Publish the site
Since we have placed the walrus binary and configuration in their default locations, publishing the ./examples/snake site is as simple as calling the publishing command:
```
./target/release/site-builder --config site-builder/assets/builder-example.yaml publish ./examples/snake
```

The output should look like the following:
```
Operations performed:
- created resource /Oi-Regular.ttf with blob ID 2YLU3Usb-WoJAgoNSZUNAFnmyo8cfV8hJYt2YdHL2Hs
- created resource /file.png with blob ID R584P82qm4Dn8LoQMlzkGZS9IAkU0lNZTVlruOsUyOs
- created resource /index.html with blob ID SSzbpPfO2Tqk6xNyF1i-NG9I9CjUjuWnhUATVSs5nic
- created resource /walrus.png with blob ID SGrrw5NQyFWtqtxzLAQ1tLpcChGc0VNbtFRhfsQPuiM

Created new site: test site
New site object ID: 0x5ac988828a0c9842d91e6d5bdd9552ec9fcdddf11c56bf82dff6d5566685a31e

Browse the resulting site at: https://29gjzk8yjl1v7zm2etee1siyzaqfj9jaru5ufs6yyh1yqsgun2.walrus.site
```