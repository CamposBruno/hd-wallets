/* eslint-disable no-undef */
import { BitcoinWallet, HDWBitcoinWallet } from '../Wallets/BitcoinWallet'

describe('BitcoinWallet', () => {
	it('Should create an Bitcoin wallet', () => {
		const bitcoinWallet = new BitcoinWallet('my week and poor written mnemonic seed phrase test', 0).getWallet(0)
		expect(bitcoinWallet).toBeDefined()
		expect(bitcoinWallet).toBeInstanceOf(HDWBitcoinWallet)
		expect(bitcoinWallet.getAddressString()).toEqual('msUhAHm2M7A9M6c15Ya9jkSPL7yjpFBhDk')
		expect(bitcoinWallet.publicKey).toBeDefined()
		expect(bitcoinWallet.raw).toBeDefined()
		expect(bitcoinWallet.sign).toBeDefined()
	})
})
