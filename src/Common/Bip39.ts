import { mnemonicToSeedSync } from 'bip39'

export class Bip39 {
	static getSeed (mnemonic: string) {
		return mnemonicToSeedSync(mnemonic.trim())
	}
}
