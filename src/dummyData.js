import Word from "./model/word";
import Quiz, {quizType} from "./model/quiz";

import Workbook from "./model/workbook";
import Quizs from "./model/quizs";

const justify = new Word(1, 'justify', '정당화하다');
const accurate = new Word(2, 'accurate', '정확한');
const capable = new Word(3, 'capable', '유능한');
const personnel = new Word(4, 'personnel', '인사과');
const capacity = new Word(5, 'capacity', '용량');
const conscious = new Word(6, 'conscious', '의식하는, 자각하는');
const damp = new Word(7, 'damp', '축축한');
const brief = new Word(8, 'brief', '간략한');
const calibre = new Word(9, 'calibre','역량');

const createDummyWrongAnswers = (word) => {
	const words = [justify, accurate, capable, personnel, capacity, conscious, damp, brief, calibre];
	const wrongAnswers = words.filter(w => w.wordId !== word.wordId);
	for (let i = wrongAnswers.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[wrongAnswers[i], wrongAnswers[j]] = [wrongAnswers[j], wrongAnswers[i]];
	}
	return wrongAnswers.slice(0,3);
}

const DUMMY_QUIZS = new Quizs([
	new Quiz(justify, quizType.englishToKorean, createDummyWrongAnswers(justify)),
	new Quiz(accurate, quizType.englishToKorean, createDummyWrongAnswers(accurate)),
	new Quiz(capable, quizType.englishToKorean, createDummyWrongAnswers(capable)),
	new Quiz(personnel, quizType.englishToKorean, createDummyWrongAnswers(personnel)),
	new Quiz(capacity, quizType.englishToKorean, createDummyWrongAnswers(capacity)),
	new Quiz(conscious, quizType.englishToKorean, createDummyWrongAnswers(conscious)),
	new Quiz(damp, quizType.englishToKorean, createDummyWrongAnswers(damp)),
	new Quiz(brief, quizType.englishToKorean, createDummyWrongAnswers(brief)),
	new Quiz(calibre, quizType.englishToKorean, createDummyWrongAnswers(calibre)),
]);

const DUMMY_QUIZS_WITH_USER_ANSWER = new Quizs([
	new Quiz(justify, quizType.englishToKorean, createDummyWrongAnswers(justify)).saveUserChoice(Math.floor(Math.random() * 3) + 1),
	new Quiz(accurate, quizType.englishToKorean, createDummyWrongAnswers(accurate)).saveUserChoice(Math.floor(Math.random() * 3) + 1),
	new Quiz(capable, quizType.englishToKorean, createDummyWrongAnswers(capable)).saveUserChoice(Math.floor(Math.random() * 3) + 1),
	new Quiz(personnel, quizType.englishToKorean, createDummyWrongAnswers(personnel)).saveUserChoice(Math.floor(Math.random() * 3) + 1),
	new Quiz(capacity, quizType.englishToKorean, createDummyWrongAnswers(capacity)).saveUserChoice(Math.floor(Math.random() * 3) + 1),
	new Quiz(conscious, quizType.englishToKorean, createDummyWrongAnswers(conscious)).saveUserChoice(Math.floor(Math.random() * 3) + 1),
	new Quiz(damp, quizType.englishToKorean, createDummyWrongAnswers(damp)).saveUserChoice(Math.floor(Math.random() * 3) + 1),
	new Quiz(brief, quizType.englishToKorean, createDummyWrongAnswers(brief)).saveUserChoice(Math.floor(Math.random() * 3) + 1),
	new Quiz(calibre, quizType.englishToKorean, createDummyWrongAnswers(calibre)).saveUserChoice(Math.floor(Math.random() * 3) + 1),
]);

const DUMMY_WORKBOOKS = new Workbook('공무원 9급 준비 필수 영단어', DUMMY_QUIZS);

export {DUMMY_WORKBOOKS, DUMMY_QUIZS, DUMMY_QUIZS_WITH_USER_ANSWER};