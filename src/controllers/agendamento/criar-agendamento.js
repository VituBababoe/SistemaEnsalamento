const Agendamento = require('../../models/agendamentos-model');

const CriarAgendamentoController ={
     /**
      * @param {HttpRequest} request
      * @return {Promise<HttpResponse>}
      */
     async handle(HttpRequest) {
        try {
            const {data, horario, professor, disciplina, sala, status, turno} = HttpRequest.body

            const agendamento = await Agendamento.create ({
                data,
                horario,
                professor,
                disciplina,
                sala,
                status,
                turno
            });
            return {
                status: 201,
                body: agendamento,
            };
        } catch (error) {
            return {
                statusCode: 500,
                body: {error: error.message}
            };
        };
     }
};

module.exports = CriarAgendamentoController;