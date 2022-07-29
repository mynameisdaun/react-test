class Quizs {
	constructor(quizs) {
		this._quizs = quizs;
	}
	get quizs() {
		return this._quizs;
	}

	//TODO: calculate 정답률 (정답 / 전체)
	calculateAnswerRate() {
		return this._quizs.filter(quiz=>quiz.isCorrect()).length / this._quizs.length;
	}
}

export default Quizs;