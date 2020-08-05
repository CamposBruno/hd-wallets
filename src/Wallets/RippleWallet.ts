// eslint-disable-next-line no-unused-vars
import { Cryptos } from '../Common/Enums'
import { Bip39 } from '../Common/Bip39'
import { Bip44 } from '../Common/Bip44'
import * as RippleBip32 from 'ripple-bip32'

export class RippleWallet {
    private readonly _rippleHDWallet: typeof RippleBip32
    private readonly _account: number

    constructor (mnemonic: string, account: number) {
    	this._rippleHDWallet = RippleBip32.fromSeedBuffer(
    		Bip39.getSeed(mnemonic)
    	)
    	this._account = account
    }

    public getWallet (idx: number): HDXRPWallet {
    	return this._rippleHDWallet.derivePath(
    		Bip44.path(Cryptos.Ripple, this._account, 0, idx)
    	)
    }
}

export interface HDXRPWallet {
    toBase58 : typeof Function
    getAddress : typeof Function
    keyPair : {
        getKeyPairs : any
    }
}
