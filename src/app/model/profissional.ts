import { Endereco } from './endereco';
import { Empresa } from './empresa';

export class Profissional {

    id: number;
	nome: string;
    endereco: Endereco;
    estabelecimento: Empresa;
}
