const Agendamento = require('../../models/agendamentos-models');

class DeletarAgendamentoController {
    async handle(req) {
      const { id } = req.params;
      try {
        const agendamento = await Agendamento.findByPk(id);

        await agendamento.destroy();
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