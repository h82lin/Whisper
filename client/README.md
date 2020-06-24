# Whisper

## Installation Steps

### Step 1
Clone Whisper from Github
```bash
git clone https://github.com/h82lin/Whisper.git
```

### Step 2
Download Ganache from:  https://www.trufflesuite.com/ganache
Setup Ganache
1. Create new workspace
2. At workspace tab add 'Whisper/truffle-config.js' into 'Truffle Projects'
3. Click 'save workspace' at top right
4. minimize Ganache

### Step 3
Download Metamask chrome extension from:  https://metamask.io/download.html
Setup Metamask
1. Login to Metamask with password, if not create one
2. At the top add a 'custom RPC' network
3. At 'New RPC URL' add 'RPC Server' from the Ganache software, it should be:  HTTP://127.0.0.1:7545
4. Click 'Save'
5. Open Ganache and click the key symbol, copy 'private key' to clipboard
5. Open Metamask extension
6. Click the circle at top right of Metamask, select 'import account'
7. Paste the key from Ganache
8. Click 'Import'

### Step 4
Install Truffle
```bash
npm install -g truffle
```

### Step 5
Enter Client Folder
```bash
cd Whisper/Client
```

### Step 6
Install everything from 'Whisper/Client/package.json'
```bash
npm install
```


### Step 7
Start the Webpage and it should work perfectly
```bash
npm start
```
