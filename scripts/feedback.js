
document.getElementById('formReclamacao').addEventListener('submit', function (e) {
    e.preventDefault(); // se seu backend for real, remova isto e trate via AJAX ou permita o submit normal
    // aqui você enviaria via fetch()/XHR, ou simplesmente:
    // this.submit();

    // Exibe o modal de sucesso
    var sucessoModal = new bootstrap.Modal(document.getElementById('sucessoModal'));
    sucessoModal.show();

    // Limpa o form (opcional):
    this.reset();
});
