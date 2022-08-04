class Quizs {

	constructor(name, quizs) {
		this._quizs = quizs;
		this._name = name;
	}
	get quizs() {
		return this._quizs;
	}

	get name() {
		return this._name;
	}

//TODO: calculate 정답률 (정답 / 전체)
	calculateAnswerRate() {
		return this._quizs.filter(quiz=>quiz.isCorrect()).length / this._quizs.length;
	}
}

export default Quizs;