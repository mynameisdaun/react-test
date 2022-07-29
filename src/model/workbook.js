//TODO: 표지용, 문제풀이 결과용 등 쓰임새를 세분화하여 최적화 할 수 있을 듯
class Workbook {
	constructor(workBookId, name, quizs, author, createdAt, updatedAt, bookCoverImage) {
		//TODO: validate this constructor
		this._workBookId = workBookId;
		this._name = name;
		this._quizs = quizs;
		this._author = author;
		this._createdAt = createdAt;
		this._updatedAt = updatedAt;
		this._bookCoverImage = bookCoverImage;
	}

	get workBookId() {
		return this._workBookId;
	}

	get author() {
		return this._author;
	}

	get createdAt() {
		return this._createdAt;
	}

	get updatedAt() {
		return this._updatedAt;
	}

	get name() {
		return this._name;
	}

	get quizs() {
		return this._quizs;
	}

	get bookCoverImage() {
		return this._bookCoverImage;
	}
}

export default Workbook;