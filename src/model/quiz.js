class Quiz {
	constructor(word, type) {
		this._word = word;
		this._type = type;
	}
	get word() {
		return this._word;
	}

	get type() {
		return this._type;
	}
}
const quizType = {
	englishToKorean : "ENGLISH_TO_KOREAN",
	koreanToEnglish : "KOREAN_TO_ENGLISH"
}
Object.freeze(quizType);

export default Quiz;
export {quizType};