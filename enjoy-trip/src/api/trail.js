import http from './http';

function trailList(params, success, fail) {
  console.log(params);
  http.get(`/trail/${params.sido}/${params.gugun}`).then(success).catch(fail);
}

function trailBoardList(params, success, fail) {
  http
    .get(`/trail/board?key=${params.key}&word=${params.word}`)
    .then(success)
    .catch(fail);
}

function getTrailBoardLatest(success, fail) {
  http.get(`/trail/board/view`).then(success).catch(fail);
}

export { trailList, trailBoardList, getTrailBoardLatest };
