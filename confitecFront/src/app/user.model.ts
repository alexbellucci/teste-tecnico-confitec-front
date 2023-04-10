export class User {
    id: number;
    nome: string;
    sobrenome: string;
    email: string;
    dataNascimento: Date;
    escolaridade: number;

    constructor() {
        this.id = 0;
        this.nome = '';
        this.sobrenome = '';
        this.email = '';
        this.dataNascimento = new Date;
        this.escolaridade = 0;
    }
}