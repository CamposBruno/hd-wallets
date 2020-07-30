// eslint-disable-next-line no-unused-vars
import Wallet, { hdkey as EthereumHDKey } from 'ethereumjs-wallet'
import { Bip39 } from '../Common/Bip39'
import { Bip44 } from '../Common/Bip44'
import { Cryptos } from '../Common/Enums'

export class EthereumWallet {
    private readonly _ethereumHDKey: EthereumHDKey
    private readonly _account: number

    constructor (mnemonic: string, account: number) {
    	this._ethereumHDKey = EthereumHDKey.fromMasterSeed(
    		Bip39.getSeed(mnemonic)
    	)
    	this._account = account
    }

    public getWallet (idx: number): HDEthereumWallet {
    	return this._ethereumHDKey.derivePath(
    		Bip44.path(Cryptos.Ethereum, this._account, 0, idx)
    	).getWallet()
    }
}

export class HDEthereumWallet extends Wallet {}
