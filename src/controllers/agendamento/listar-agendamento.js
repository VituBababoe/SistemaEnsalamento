const Agendamento = require('../../models/agendamentos-model');

class ListarAgendamentoController {
    async handle(req) {
      try {
        const agendamentoId = req.params?.id;
        const agendamento = await Agendamento.findByPk(agendamentoId);
        if (!agendamento && agendamentoId) {
          return {
            statusCode: 404,
            body: { error: 'Agendamento não encontrado' },
          };
        } else if (agendamentoId) {
          return {
            statusCode: 200,
            body: Agendamento,
          };
        }
        const Agendamentos = await Agendamento.findAll();
        return {
          statusCode: 200,
          body: Agendamentos,
        };
      } catch (error) {
        return {
          statusCode: 500,
          body: { error: error.message },
        };
      }
    }
  }
  
  module.exports = ListarAgendamentoController;