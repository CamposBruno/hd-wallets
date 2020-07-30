import * as bip32 from 'bip32'

export class Bip32 {
	static generateFromSeed (seed: Buffer): bip32.BIP32Interface {
		return bip32.fromSeed(seed)
	}
}
