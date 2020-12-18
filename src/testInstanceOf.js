// use transitively included package
const bitcoin = require('@bitgo/utxo-lib');
const { BitGo } = require('bitgo/dist/src/bitgo');
const { AbstractUtxoCoin } = require('bitgo/dist/src/v2/coins/abstractUtxoCoin');
const { Btc } = require('bitgo/dist/src/v2/coins/btc');

const bitgo = new BitGo();

function testInstanceofBtc() {
  const btc = new Btc(bitgo);

  console.log('btc instanceof AbstractUtxoCoin', btc instanceof AbstractUtxoCoin);
  console.log('bitgo.coin("btc") instanceof AbstractUtxoCoin', bitgo.coin('btc') instanceof AbstractUtxoCoin);
}

async function testInstanceofHDKey() {
  const userKey = `{"iv":"FEUkDFVGossbOrPnDs+weA==","v":1,"iter":10000,"ks":256,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"Ld05tZ7I2z4=","ct":"Zt6r3qQ+p428J6RNPJEkPaw9WlnTvrH8lBp6sGIYPZrp+b0+CXb45U/yiqEadD05sAP14TxAmX991kTjwdFYaBSSPPzm3THqFSn3CEIsZsV2L0GMvAL1+efHqREAHsW1oACXBZVsijLBSEq2QgWvXyK3Vsep+ZI="}`;
  const backupKey = `xpub68exSypVhDAjuewzaGL6t2YyHBtzo2Ywy15ARwJnXumDhTs3dxCpGtsEhLs2UohpMRpXzgmoP21Ek7SZmYU3dP2qbUxoWeWt2TVhQvhSPuU`;
  const bitgoKey = `xpub661MyMwAqRbcFzMkYUvRzvqV4YTqZMmDCshbLeCLRQ62CCeQdcTVkD7MKD44P8WVR7k8y5tu9dqxXujvDyepVy9NdFoA3Qugqpa8HXeufog`;
  const walletPassphrase = `testwrwtestwrw`;
  const recoveryDestination = `2N7SNicrUuoLFn8myqzdpnq9EYPWreu7RD9`;
  const keys = await bitgo.coin('tbtc').initiateRecovery({
    userKey,
    backupKey,
    bitgoKey,
    walletPassphrase,
    recoveryDestination,
  });
  keys.forEach((k) => {
    console.log('k instanceof bitcoin.HDNode', k instanceof bitcoin.HDNode);
  });
}

if (require.main === module) {
  testInstanceofBtc();
  testInstanceofHDKey();
}
