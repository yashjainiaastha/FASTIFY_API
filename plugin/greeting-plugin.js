async function greetingPlugin(fastify, options) {
    fastify.get('/greet', async (request, reply) => {
      const { name } = request.query;
      const greetingName = name || 'Guest';
      const greeting = `Hello, ${greetingName}!`;
      reply.send({ greeting });
    });
}
module.exports = greetingPlugin;
  