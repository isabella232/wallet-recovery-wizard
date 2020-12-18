const { Btc } = require('bitgo/dist/src/v2/coins/btc');

function main() {
  const btc = new Btc();
}

if (require.main === module) {
  main();
}
