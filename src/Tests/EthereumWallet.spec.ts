/* eslint-disable no-undef */
import { EthereumWallet } from '../Wallets/EthereumWallet'
import Wallet from 'ethereumjs-wallet'

describe('EthereumWallet', () => {
	it('Should create an Ethereum wallet', () => {
		const ethereumWallet = new EthereumWallet('my week and poor written mnemonic seed phrase test', 0).getWallet(0)
		expect(ethereumWallet).toBeDefined()
		expect(ethereumWallet).toBeInstanceOf(Wallet)
		expect(ethereumWallet.getAddressString()).toEqual('0x88801c261dc76a19426a35c6643d62c293697105')
		expect(ethereumWallet.getAddress).toBeDefined()
		expect(ethereumWallet.getPrivateKey).toBeDefined()
		expect(ethereumWallet.getPrivateKeyString).toBeDefined()
		expect(ethereumWallet.getChecksumAddressString).toBeDefined()
		expect(ethereumWallet.getPublicKey).toBeDefined()
		expect(ethereumWallet.getPublicKeyString).toBeDefined()
		expect(ethereumWallet.getV3Filename).toBeDefined()
		expect(ethereumWallet.toV3).toBeDefined()
		expect(ethereumWallet.toV3String).toBeDefined()
	})
})
