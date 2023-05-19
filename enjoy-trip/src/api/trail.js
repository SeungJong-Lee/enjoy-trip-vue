import http from './http';

function trailList(params, success, fail) {
  console.log(params);
  http.get(`/trail/${params.sido}/${params.gugun}`).then(success).catch(fail);
}

function trailBoardList(params, success, fail) {
  http
    .get(`/trail/board?${params.key}&${params.word}`)
    .then(success)
    .catch(fail);
}

export { trailList, trailBoardList };
