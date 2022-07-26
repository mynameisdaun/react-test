import Word from "./model/word";
import Quiz, {quizType} from "./model/quiz";

const justify = new Word(1, 'justify', '정당화하다');
const accurate = new Word(2, 'accurate', '정확한');
const capable = new Word(3, 'capable', '유능한');
const personnel = new Word(4, 'personnel', '인사과');
const capacity = new Word(5, 'capacity', '용량');
const conscious = new Word(6, 'conscious', '의식하는, 자각하는');

const createDummyWrongAnswers = (word) => {
	const words = [justify, accurate, capable, personnel, capacity, conscious];
	const wrongAnswers = words.filter(w => w.wordId !== word.wordId);
	for (let i = wrongAnswers.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[wrongAnswers[i], wrongAnswers[j]] = [wrongAnswers[j], wrongAnswers[i]];
	}
	return wrongAnswers.slice(0,2);
}

const DUMMY_QUIZS = new Quizs([
	new Quiz(justify, quizType.englishToKorean, createDummyWrongAnswers(justify)),
	new Quiz(accurate, quizType.englishToKorean, createDummyWrongAnswers(accurate)),
	new Quiz(capable, quizType.englishToKorean, createDummyWrongAnswers(capable)),
	new Quiz(personnel, quizType.englishToKorean, createDummyWrongAnswers(personnel)),
	new Quiz(capacity, quizType.englishToKorean, createDummyWrongAnswers(capacity)),
	new Quiz(conscious, quizType.englishToKorean, createDummyWrongAnswers(conscious)),
]);

const DUMMY_WORKBOOKS = new Workbook('공무원 9급 준비 필수 영단어', DUMMY_QUIZS);

export default DUMMY_QUIZS;
export {DUMMY_WORKBOOKS};