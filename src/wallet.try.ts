import { EthereumWallet } from './Wallets/EthereumWallet'
import { BitcoinWallet } from './Wallets/BitcoinWallet'
import { RippleWallet } from './Wallets/RippleWallet'

async function bootstrap () {
	const ethereumAddress = new EthereumWallet(process.env.MNEMONIC || '', 0).getWallet(0).getAddressString()
	const bitcoinAddress = new BitcoinWallet('testnet', process.env.MNEMONIC || '', 0).getWallet(0).getAddressString()
	const rippleAddress = new RippleWallet(process.env.MNEMONIC || '', 0).getWallet(0).keyPair.getKeyPairs()

	console.log('ethereumAddress', ethereumAddress)
	console.log('bitcoinAddress', bitcoinAddress)
	console.log('rippleAddress', rippleAddress)
}

bootstrap().catch(e => {
	console.error(e.message)
	process.exit(1)
})
