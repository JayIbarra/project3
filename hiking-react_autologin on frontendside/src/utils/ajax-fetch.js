// vanilla javascript fetch


export const ajax_fetch = {};

ajax_fetch.init = function () {
  ajax_fetch.getmethod_headers = new Headers();
  ajax_fetch.postmethod_headers = new Headers();
};

ajax_fetch.log = function () {
  // log info
  console.log('ajax_fetch.LOG() ');
  console.log('ajax_fetch.getmethod_headers HEADERS: ', ajax_fetch.getmethod_headers);
  for (var pair of ajax_fetch.getmethod_headers.entries()) {
    console.log(pair[0] + ': ' + pair[1]); // log content of the headers
  }
  console.log('ajax_fetch.postmethod_headers HEADERS: ', ajax_fetch.postmethod_headers);
  for (var pair of ajax_fetch.postmethod_headers.entries()) {
    console.log(pair[0] + ': ' + pair[1]); // log content of the headers
  }
};


ajax_fetch.response_json_smart = function (response) {
  if (response && typeof response.json === 'function') {
    // if this is fetch Respons object then extract json body
    return response.json();
  }
  // if its not json then return response untouched
  return response;
};


ajax_fetch.getmethod_headers_set_arr = function (arr) {
  arr.forEach(pair => {
    ajax_fetch.getmethod_headers_set(pair[0], pair[1]);
  });
};
ajax_fetch.postmethod_headers_set_arr = function (arr) {
  arr.forEach(pair => {
    ajax_fetch.postmethod_headers_set(pair[0], pair[1]);
  });
};

// let ajax_fetch.getmethod_headers_set = async function (key, value) {
ajax_fetch.getmethod_headers_set = function (key, value) {
  // zt_ajax_headers.append('X-PutCut-Session', 'hhhhhhhhhhhh');
  // ajax_fetch.getmethod_headers.append('X-Session-ID', token);
  // ajax_fetch.getmethod_headers.append(key, value); // NE VALJA
  // console.log(key, value);
  ajax_fetch.getmethod_headers.set(key, value);
  return ajax_fetch.getmethod_headers;
};
// let ajax_fetch.postmethod_headers_set = async function (key, value) {
ajax_fetch.postmethod_headers_set = function (key, value) {
  // ajax_fetch.postmethod_headers.append('X-Session-ID', token);
  // headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
  // ajax_fetch.postmethod_headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
  // ajax_fetch.postmethod_headers.append(key, value); // NE VALJA
  // console.log(key, value);
  ajax_fetch.postmethod_headers.set(key, value);
  return ajax_fetch.postmethod_headers;
};


ajax_fetch.getmethod_headers_delete = function (key) {
  ajax_fetch.getmethod_headers.delete(key);
};
ajax_fetch.postmethod_headers_delete = function (key) {
  ajax_fetch.postmethod_headers.delete(key);
};



// FETCHING

ajax_fetch.getmethod_send = async (url = '') => {
  // log
  console.log('ajax_fetch.getmethod_send() HEADERS: ', ajax_fetch.getmethod_headers);
  for (var pair of ajax_fetch.getmethod_headers.entries()) {
    console.log(pair[0] + ': ' + pair[1]); // log content of the headers
  }
  // Default options are marked with *
  return await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    headers: ajax_fetch.getmethod_headers
  })
    .catch(function (error) {
      console.log('catch ERROR GET ajax_fetch.getmethod_send() ');
      console.log(url);
      console.log(error);
    });
};


ajax_fetch.postmethod_send = async (url = '', data = '') => {
  // log
  console.log('ajax_fetch.postmethod_send() my HEADERS: ', ajax_fetch.postmethod_headers);
  for (var pair of ajax_fetch.postmethod_headers.entries()) {
    console.log(pair[0] + ': ' + pair[1]); // log content of the headers
  }
  // Default options are marked with *
  return await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: data, // body data type must match "Content-Type" header
    headers: ajax_fetch.postmethod_headers
  })
    .catch(function (error) {
      console.log('catch ERROR POST ajax_fetch.postmethod_send() ');
      console.log(url);
      console.log(data);
      console.log(error);
    });
};

