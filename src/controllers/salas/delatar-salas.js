const Sala = require("../../models/salas-model")

class DeletarSalaController {
    async handle(req) {
      const { id } = req.params;
      try {
        const sala = await Sala.findByPk(id);
  
        if (!sala) {
          return {
            statusCode: 404,
            body: { error: 'Sala não encontrado' },
          };
        }
        await sala.destroy();
        return {
          statusCode: 204,
          body: {},
        };
      } catch (error) {
        return {
          statusCode: 500,
          body: { error: error.message },
        };
      }
    }
  }
  
  module.exports = DeletarSalaController;