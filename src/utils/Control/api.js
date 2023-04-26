async function api(url, method = "GET", body = null) {
  let fetch_config = {
    method: method,
    headers: {},
  };
  if (body) {
    fetch_config.body = JSON.stringify(body);
    fetch_config.headers["Content-type"] = "application/json; charset=UTF-8";
  }
  return (
    await fetch("http://127.0.0.1:8080/control/" + url, fetch_config)
  ).json();
}

function apiGetAttrs(scene) {
  return api(`scene/${scene}/attr`, "GET");
}

function apiDelAttrs(scene, comp) {
  return api(`scene/${scene}/attr`, "DELETE", {
    comp: comp,
  });
}

function apiSetAttr(scene, comp, attr, value) {
  api(`scene/${scene}/attr`, "POST", {
    comp: comp,
    attr: attr,
    value: value,
  });
}

export { apiSetAttr, apiGetAttrs, apiDelAttrs };
