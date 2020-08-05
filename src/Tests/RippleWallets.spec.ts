/* eslint-disable no-undef */
import { RippleWallet } from '../Wallets/RippleWallet'

describe('RippleWallets', () => {
	it('Should create an Bitcoin wallet', () => {
		const rippleWallet = new RippleWallet('my week and poor written mnemonic seed phrase test', 0).getWallet(0)
		expect(rippleWallet).toBeDefined()
		expect(rippleWallet.getAddress()).toEqual('rpmCTW5tu6g1HeaNiN1zHVSkxcY7hrEt2A')
		expect(rippleWallet.keyPair).toBeDefined()
		expect(rippleWallet.keyPair.getKeyPairs).toBeDefined()
		const pair = rippleWallet.keyPair.getKeyPairs()
		expect(pair.privateKey).toEqual('00BFAB261196DD3AD73973EA02F624769AC7BCEC928EF09E434EB03C7EF405275A')
		expect(pair.publicKey).toEqual('032D6D45BCCCE7FFFE4319D9968B3A97B1FDFAA13723A9805D032F65D2FC511CB7')
		expect(rippleWallet.toBase58).toBeDefined()
		expect(rippleWallet.toBase58()).toEqual('xprvA2o2PKauG3Wyco8iPBomUnritJmHwFgijBQts4xRUExbkioQQrBiMJvhCyuYryGTa3cVFqiLBArgeULDqvkTpGvCcCCtDRPiDruB3jJEcfc')
	})
})
