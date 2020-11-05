const transform = require("./transform");
module.exports = transform;

const args = require("args");

args.option("id", "CurseForge project ID", 238222);
args.option("port", "Web server port", 3000);
args.option("web", "Start web server", false);

const flags = args.parse(process.argv);
if (flags.web) return require("./web")(flags.port);

if (flags.id) {
    transform(flags.id).then(json => {
        console.log(JSON.stringify(json, null, 2));
    });
}