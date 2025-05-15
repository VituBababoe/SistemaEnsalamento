const Sala = require('../../models/salas-model')

class ListarSalaController {
    async handle(req) {
      try {
        const SalaId = req.params?.id;
        const sala = await Sala.findByPk(SalaIdId);
        if (!sala && SalaId) {
          return {
            statusCode: 404,
            body: { error: 'Sala não encontrado' },
          };
        } else if (userId) {
          return {
            statusCode: 200,
            body: Sala,
          };
        }
        const Salas = await Sala.findAll();
        return {
          statusCode: 200,
          body: Salas,
        };
      } catch (error) {
        return {
          statusCode: 500,
          body: { error: error.message },
        };
      }
    }
  }
  
  module.exports = ListarSalaController;