class User {
	constructor(userId, email, nickName, password) {
		this._userId = userId;
		this._email = email;
		this._nickName = nickName;
		this._password = password;
	}
	get userId() {
		return this._userId;
	}
	get password() {
		return this._password;
	}
	get email() {
		return this._email;
	}
	get nickName() {
		return this._nickName;
	}
}

const fakeUser = new User('1','tester@tester.com','tester','test123@');

export {fakeUser};