const transform = require("./transform");

module.exports = function web (port) {
    const fastify = require('fastify')({logger: true});

    fastify.get("/", (request, reply) => reply.redirect("/238222"));
    
    fastify.get("/:id", async (request, reply) => {
        let id = `${request.params.id}`.split(".")[0];
        reply.send(JSON.stringify(await transform(id)));
    });

    fastify.listen(port, "0.0.0.0", (err, address) => {
        if (err) throw err;
        fastify.log.info(`server listening on ${address}`)
    })
}