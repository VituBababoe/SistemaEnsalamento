const Sala = require('../../models/salas-model')
const CriarSalaController = {
    /**
     * @param {HttpRequest} request
     * @return {Promise<HttpResponse>}
     */
    async handle(HttpRequest) {
        try {
            const { numero, capacidade, tipo} = HttpResponse.body;

            const sala = await Sala.create ({
                numero,
                capacidade,
                tipo
            });

            return {
                status: 201,
                body: sala,
            };
            } catch (error) { 
                return {
                    statusCode: 500,
                    body: {error: error.message}
                };
        };
    }
};

module.exports = CriarSalaController;