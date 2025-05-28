const Agendamento = require('../../models/agendamentos-models');

class EditarAgendamentoController {
    async handle(req) {
      const { id } = req.params;
      const { data, horario, professor, disciplina, sala, status, turno } = req.body;
      try {
        const agendamento = await Agendamento.findByPk(id);
        if (!agendamento) {
          return {
            statusCode: 404,
            body: { error: 'Sala não encontrado' },
          };
        }
        await agendamento.update({
            data,
            horario,
            professor,
            disciplina,
            sala,
            status,
            turno
        });
        return {
          statusCode: 200,
          body: agendamento,
        };
      } catch (error) {
        return {
          statusCode: 500,
          body: { error: error.message },
        };
      }
    }
  }
  
  module.exports = EditarAgendamentoController;