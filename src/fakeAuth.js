class User {
	constructor(userId, email, nickName) {
		this._userId = userId;
		this._email = email;
		this._nickName = nickName;
	}

	get id() {
		return this._userId;
	}

	get email() {
		return this._email;
	}

	get nickName() {
		return this._nickName;
	}
}

const fakeUser = new User('1','wjdcksdnfw@cksdnf.com','mynameischanwool');

export {fakeUser};