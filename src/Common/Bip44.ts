// eslint-disable-next-line no-unused-vars
import { Cryptos } from './Enums'

export class Bip44 {
	static path (cripto: Cryptos, account: number, change: number, index: number) {
		return `m/44'/${cripto}'/${account}'/${change}/${index}`
	}
}
