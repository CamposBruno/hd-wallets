import { EthereumWallet } from './Wallets/EthereumWallet'
import { BitcoinWallet } from './Wallets/BitcoinWallet'

async function bootstrap () {
	const ethereumAddress = new EthereumWallet(process.env.MNEMONIC || '', 0).getWallet(0).getAddressString()
	const bitcoinAddress = new BitcoinWallet(process.env.MNEMONIC || '', 0).getWallet(0).getAddressString()

	console.log('ethereumAddress', ethereumAddress)
	console.log('bitcoinAddress', bitcoinAddress)
}

bootstrap().catch(e => {
	console.error(e.message)
	process.exit(1)
})
