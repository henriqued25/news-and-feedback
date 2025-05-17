document.addEventListener('DOMContentLoaded', () => {
    const formReclamacao = document.getElementById('formReclamacao');
    const mensagemDiv = document.getElementById('mensagem');
    const apiUrl = 'https://api-connectilha.onrender.com/api/feedback';

    const loadingModal = new bootstrap.Modal(document.getElementById('loadingModal'));
    const sucessoModal = new bootstrap.Modal(document.getElementById('sucessoModal'));

    formReclamacao.addEventListener('submit', async (e) => {
        e.preventDefault();

        loadingModal.show();

        // Coleta os valores dos campos do formulário
        const numeroOnibus = document.getElementById('numeroOnibus').value;
        const linhaOnibus = document.getElementById('linhaOnibus').value;
        const avaliacaoViagem = parseInt(document.getElementById('avaliacaoViagem').value);
        const avaliacaoSeguranca = parseInt(document.getElementById('avaliacaoSeguranca').value);
        const descricao = document.getElementById('descricao').value;
        const sugestao = document.getElementById('sugestao').value;

        // Coleta os problemas marcados
        const problemas = [];
        document.querySelectorAll('#formReclamacao input[type="checkbox"]:checked').forEach(checkbox => {
            problemas.push(checkbox.value);
        });

        // Mapeia os problemas para os campos da API
        const feedbackData = {
            bus_number: numeroOnibus,
            bus_line: linhaOnibus,
            overall_rating: avaliacaoViagem,
            safety_rating: avaliacaoSeguranca,
            comment: descricao,
            improvement_suggestions: sugestao,
            excessive_delay: problemas.includes("Atraso excessivo"),
            bus_overcrowded: problemas.includes("Ônibus lotado"),
            lack_of_accessibility: problemas.includes("Falta de acessibilidade"),
            air_conditioning_broken: problemas.includes("Ar-condicionado quebrado"),
            vehicle_poor_condition: problemas.includes("Veículo sujo ou mal conservado"),
            driver_misconduct: problemas.includes("Má conduta do motorista") ? descricao : undefined, // Se marcado, usa a descrição como detalhe
            route_change: problemas.includes("Mudança inesperada no trajeto") ? descricao : undefined, // Se marcado, usa a descrição como detalhe
        };

        try {
            const response = await axios.post(apiUrl, feedbackData);
            console.log('Feedback enviado com sucesso:', response.data);

            loadingModal.hide();
            sucessoModal.show();
            formReclamacao.reset();

            formReclamacao.reset(); // Limpa o formulário
        } catch (error) {
            console.error('Erro ao enviar feedback:', error.response ? error.response.data : error.message);
            mensagemDiv.textContent = 'Ocorreu um erro ao enviar o feedback.';
            mensagemDiv.className = 'mt-3 text-danger';
            loadingModal.hide();
        }
    });

});