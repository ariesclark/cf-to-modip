const fetch = require("node-fetch")

module.exports = async function curse (path, text = false) {
    return fetch("https://curse.nikky.moe/api/" + path).then(r => text ? r.text() : r.json());
}