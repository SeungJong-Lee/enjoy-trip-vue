import http from "../http";

function sidoList(success, fail) {
  http.get(`/trail/sido`).then(success).catch(fail);
}

function gugunList(params, success, fail) {
  http.get(`/trail/gugun/${params.sido}`).then(success).catch(fail);
}

export { sidoList, gugunList };
