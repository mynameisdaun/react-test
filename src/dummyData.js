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
const calibre = new Word(9, 'calibre', '역량');
const words = [justify, accurate, capable, personnel, capacity, conscious, damp, brief, calibre];

const createDummyWrongAnswers = (word) => {
	const wrongAnswers = words.filter(w => w.wordId !== word.wordId);
	for (let i = wrongAnswers.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[wrongAnswers[i], wrongAnswers[j]] = [wrongAnswers[j], wrongAnswers[i]];
	}
	return wrongAnswers.slice(0, 3);
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

const DUMMY_QUIZS_WITH_USER_ANSWER = new Quizs(Array.from(DUMMY_QUIZS.quizs));
DUMMY_QUIZS_WITH_USER_ANSWER.quizs.forEach(quiz => quiz.saveUserChoice([quiz.word, ...quiz.wrongChoices][Math.floor(Math.random() * 4)]));

const DUMMY_WORKBOOKS = [
	new Workbook(1, '해커스 토익 빈출', DUMMY_QUIZS, '정찬울', Date.now(), Date.now(), '/assets/images/hackers_toeic.jpeg'),
	new Workbook(2, '경선식 영단어', DUMMY_QUIZS, '정다운', Date.now(), Date.now(), '/assets/images/kyeong.jpeg'),
	new Workbook(3, '어휘 끝', DUMMY_QUIZS, '최해미', Date.now(), Date.now(), '/assets/images/word_done.jpeg'),
	new Workbook(4, '워드 마스터', DUMMY_QUIZS, '송주하', Date.now(), Date.now(), '/assets/images/word_master.jpeg')
];

export {DUMMY_WORKBOOKS, DUMMY_QUIZS, DUMMY_QUIZS_WITH_USER_ANSWER};