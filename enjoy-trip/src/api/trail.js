import http from "./http";

function trailList(params, success, fail) {
  console.log(params);
  http.get(`/trail/${params.sido}/${params.gugun}`).then(success).catch(fail);
}

export { trailList };
