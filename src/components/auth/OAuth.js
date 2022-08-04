const JS_APP_KEY = "dcb22091e397cc3e33bfc4a7d502022d";
const KAKAO_REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
const KAKAO_AUTH_HOST = "https://kauth.kakao.com/oauth/authorize";
const KAKAO_AUTH_URL = `${KAKAO_AUTH_HOST}?client_id=${JS_APP_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

export {KAKAO_AUTH_URL}
