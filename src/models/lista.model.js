var Lista = /** @class */ (function () {
    function Lista(titulo) {
        this.titulo = titulo;
        this.terminada = false;
        this.creadaEn = new Date();
        this.items = [];
        this.id = new Date().getTime();
    }
    return Lista;
}());
export { Lista };
//# sourceMappingURL=lista.model.js.map