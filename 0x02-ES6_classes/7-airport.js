export default class Airport {
	constructor (name, code) {
		this._name = name
		this._code = code
	}

	first() {
		return `Airportttt ${this._code} { _name: '${this._name}', _code: '${this._code}' }`
	}
	toString() {
		return `[object ${this._code}]`
	}
	[Symbol.toPrimitive](hint) {
		if (hint === 'string') {
			return this.first()
		}
		return this.toString()
	}
}
