const Sala = require('../../models/salas-model')

class EditarSalaController {
  async handle(req) {
    const { id } = req.params;
    const { numero, capacidade, tipo } = req.body;
    try {
      const sala = await Sala.findByPk(id);
      if (!sala) {
        return {
          statusCode: 404,
          body: { error: 'Sala não encontrado' },
        };
      }
      await sala.update({
        numero,
        capacidade,
        tipo,
      });
      return {
        statusCode: 200,
        body: usuario,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}

module.exports = EditarSalaController;