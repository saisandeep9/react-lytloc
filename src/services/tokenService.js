import http from "./httpService";



function tokenUrl(id) {
  return process.env.REACT_APP_API_URL + "/tokens" ;
}


export function gettoken() {
  return http.get(tokenUrl());
}

export function posttoken() {
  return http.post(tokenUrl());
}