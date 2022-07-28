class Workbook {
	constructor(name, quizs) {
		this._name = name;
		this._quizs = quizs;
	}
	get name() {
		return this._name;
	}
	get quizs() {
		return this._quizs;
	}
}

export default Workbook;