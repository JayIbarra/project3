
import config from './config';
let urlLib = {};
let apiLib = {};

urlLib.websitePrefix = () => {
  // WEBSITE PREFIX UKLJUCUJE CEO POCETAK URL-a (i podomen i domen) NA KOJEM SE HOSTUJE SAJT
  let url = ''; // moze da bude i 'http://mysite.com' kasnije

  return url;
};

urlLib.staticFolder = () => {
  let url = '/static';
  return url;
};


// TODO za kasnije
apiLib.apiPrefix = () => {
  // API PREFIX UKLJUCUJE CEO POCETAK URL-a (i podomen i domen) NA KOJEM SE HOSTUJE API
  // let url = 'api.sajtzaapi.com'; // TODO...
  let url = config.apiUrlPrefix;
  return url;
};


// AUTHENTICATION API

apiLib.postAuthLogout = function () {
  // backend logout
  let url = apiLib.apiPrefix() + '/api/v1/auth/logout'; // POST
  return url;
};

apiLib.postAuthFormLogin = function () {
  let url = apiLib.apiPrefix() + '/api/v1/auth/formlogin'; // POST
  console.log(url)
  return url;
};

apiLib.postAuthRegister = function () {
  let url = apiLib.apiPrefix() + '/api/v1/auth/register'; // POST
  console.log(url)
  return url;
};

apiLib.getAuthMyUserData = (userid) => {
  // AUTOLOGIN + USER PROFILE GET
  // let url = apiLib.apiPrefix() + '/api/v1/user/profile/get?userid=' + userid; // GET_METHOD
  let url = apiLib.apiPrefix() + '/api/v1/user/profile/me'; // GET_METHOD
  return url;
};


// USERS

apiLib.getUserList = () => {
  let url = apiLib.apiPrefix() + '/api/v1/user/list'; // GET
  return url;
};

apiLib.postUserUpdate = () => {
  let url = apiLib.apiPrefix() + '/api/v1/user/update'; // POST
  return url;
};

apiLib.postUserCreate = () => {
  let url = apiLib.apiPrefix() + '/api/v1/user/create'; // POST
  return url;
};


export { urlLib, apiLib };