class Quiz {
	constructor(word, type, wrongChoices) {
		validateQuiz(word, type, wrongChoices);
		this._word = word;                                  /* 단어 */
		this._type = type;                                  /* 문제 유형 */
		this._wrongChoice = wrongChoices;                   /* 잘못된 선택지들 */
		this._userChoice = {}                              /* 유저의 선택지 */
	}

	get word() {
		return this._word;
	}

	get type() {
		return this._type;
	}

	get wrongChoice() {
		return this._wrongChoice;
	}

	createChoices = () => {
		return this._shuffle([...this._wrongChoice, this._word]);
	}

	isCorrect = () => {
		return this._word.wordId === this._userChoice.wordId;
	}

	saveUserChoice = (choice) => {
		this._userChoice=choice;
	}
	_shuffle = (choices) => {
		for (let i = choices.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[choices[i], choices[j]] = [choices[j], choices[i]];
		}
		return choices;
	}
}

const quizType = {
	englishToKorean: "ENGLISH_TO_KOREAN",
	koreanToEnglish: "KOREAN_TO_ENGLISH"
}
Object.freeze(quizType);

//TODO: validation 이렇게 하는거 맞나?
const validateQuiz = (word, type, wrongChoice) => {
	//TODO: 최소 문제 개수 관리 어떻게 하면 좋을까?
	const minimumWrongAnswerNumber = 2;
	if (!word) {
		throw new Error('단어는 질문의 필수 요소 입니다.');
	}
	if (!type) {
		throw new Error('질문 유형은 질문의 필수 요소 입니다.');
	}
	if (!wrongChoice || wrongChoice.length < minimumWrongAnswerNumber) {
		throw new Error(`오답이 최소 ${minimumWrongAnswerNumber}개 존재 해야 질문을 만들 수 있습니다.`);
	}
}

export default Quiz;
export {quizType};