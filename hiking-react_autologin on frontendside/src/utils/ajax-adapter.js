import { ajax_fetch } from "./ajax-fetch";
import config from "./config";
import { apiLib } from "./url-lib";


const CONTENT_TYPE_JSON = 'application/json';
const CONTENT_TYPE_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8';

const convert_to_json = (obj) => {
  const json = JSON.stringify(obj);
  return json;
};


const ajax = {};


ajax.ajaxHeadersConfigurator = {};
ajax.ajaxHeadersConfigurator.headers = {};
ajax.ajaxHeadersConfigurator.setHeader = (key, value) => {
  // default headers for use with ajax requests
  // real backend
  // ajax_fetch.log();
  const initial_getmethod_headers_arr = [
    [key, value]
  ];
  const initial_postmethod_headers_arr = [
    [key, value],
    ['Content-Type', CONTENT_TYPE_JSON]
  ];
  ajax_fetch.getmethod_headers_set_arr(initial_getmethod_headers_arr);
  ajax_fetch.postmethod_headers_set_arr(initial_postmethod_headers_arr);
  ajax_fetch.log();
  return true;
};


ajax.init = () => {
  // pravi backend
  ajax_fetch.init(); // INIT HEADERS FOR AJAX REQUESTS
  ajax_fetch.log();
  // const CONTENT_TYPE_JSON = CONTENT_TYPE_JSON; // 'application/json';
  const header_token_key = config.TOKEN_HEADER_KEY;
  const test_token = config.initial_token_value; // 'none_token_placeholder';
  const initial_getmethod_headers_arr = [
    [header_token_key, test_token]
  ];
  const initial_postmethod_headers_arr = [
    [header_token_key, test_token],
    ['Content-Type', CONTENT_TYPE_JSON]
  ];
  ajax_fetch.getmethod_headers_set_arr(initial_getmethod_headers_arr);
  ajax_fetch.postmethod_headers_set_arr(initial_postmethod_headers_arr);
  ajax_fetch.log();
  return true;

};


ajax.postAuthLogout = async () => {
  // real backend
  let data_prepared = convert_to_json({}); // ENCODE...
  let response = await ajax_fetch.postmethod_send(apiLib.postAuthLogout(), data_prepared);
  return response;
};

ajax.postAuthFormLogin = async (formData) => {
  // real backend
  let data_prepared = convert_to_json({ formData }); // ENCODE...
  let response = await ajax_fetch.postmethod_send(apiLib.postAuthFormLogin(), data_prepared);
  return response;
};

ajax.postAuthRegister = async (formData) => {
  // real backend
  let data_prepared = convert_to_json({ formData }); // ENCODE...
  let response = await ajax_fetch.postmethod_send(apiLib.postAuthRegister(), data_prepared);
  return response;
};

ajax.getAuthMyUserData = async () => {
  // real backend
  let response = await ajax_fetch.getmethod_send(apiLib.getAuthMyUserData());
  return response;
};

export default ajax;