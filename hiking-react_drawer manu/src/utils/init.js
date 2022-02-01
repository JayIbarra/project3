import ajax from './ajax-adapter';
import { local_token_get } from './auth-utils';
import config from './config';


export const init = () => {
  // INITIAL PROCEDURE
  console.log('init');

  // INIT HTTP HEADERS
  ajax.init();

  // CHECK IS TOKEN STORED LOCALY
  local_token_get()
    .then((token) => {
      console.log('TOKEN IS STORED LOCALY');
      console.log(token);
      if (token && typeof token === 'string') {
        const TOKEN_HEADER_KEY = config.TOKEN_HEADER_KEY;
        // configure http headers with real token
        ajax.ajaxHeadersConfigurator.setHeader(TOKEN_HEADER_KEY, token);
      }
    })

  //
  console.log('init() completed');
  return Promise.resolve(true);
};
