// eslint-disable-next-line no-unused-vars
import { BIP32Interface } from 'bip32'
import { Bip32 } from '../Common/Bip32'
import { Bip39 } from '../Common/Bip39'
import { Bip44 } from '../Common/Bip44'
import { Cryptos } from '../Common/Enums'
import * as bitcoin from 'bitcoinjs-lib'

export class BitcoinWallet {
    private readonly _bip32Key: BIP32Interface
    private readonly _account: number

    constructor (mnemonic: string, account: number) {
    	this._bip32Key = Bip32.generateFromSeed(
    		Bip39.getSeed(mnemonic)
    	)
    	this._account = account
    }

    public getWallet (idx: number): Wallet {
    	return new Wallet(
    		process.env.BITCOIN_NETWORK || 'testnet',
    		this._bip32Key.derivePath(
    			Bip44.path(Cryptos.Ethereum, this._account, 0, idx)
    		)
    	)
    }
}

export class Wallet {
    private _network: bitcoin.networks.Network;
    private _bip32: BIP32Interface;

    private getNetwork (network: string): bitcoin.networks.Network {
    	return network === 'bitcoin' ? bitcoin.networks.bitcoin : bitcoin.networks.testnet
    }

    constructor (network: string, bip32: BIP32Interface) {
    	this._network = this.getNetwork(network)
    	this._bip32 = bip32
    }

    public raw (): BIP32Interface {
    	return this._bip32
    }

    public sign (toSignHex: string): string {
    	const signature = this._bip32.sign(Buffer.from(toSignHex, 'hex'))
    	const encodedSignature = bitcoin.script.signature.encode(signature, bitcoin.Transaction.SIGHASH_NONE).slice(0, -1)
    	return encodedSignature.toString('hex')
    }

    public publicKey (): string {
    	return this._bip32.publicKey.toString('hex')
    }

    public getAddressString (): string | undefined {
    	return bitcoin.payments.p2pkh({ pubkey: this._bip32.publicKey, network: this._network }).address
    }
}
