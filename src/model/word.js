class Word {
	constructor(wordId, english, korean) {
		this._wordId = wordId;
		this._english = english;
		this._korean = korean;
	}

	get wordId() {
		return this._wordId;
	}

	get english() {
		return this._english;
	}

	get korean() {
		return this._korean;
	}
}

export default Word;