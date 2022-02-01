const API_URL_PREFIX = 'http://localhost:3001'; // URL prefix of API urls
const config = {};
config.apiUrlPrefix = API_URL_PREFIX;
config.TOKEN_LOCAL_KEY = 'hiking_client_token'; // name of the token key in local storage
config.TOKEN_COOKIE_KEY = 'hiking-token'; // name of the cookie for token
config.TOKEN_HEADER_KEY = 'x-hiking-token'; // name of the token key in http request headers

export default config;