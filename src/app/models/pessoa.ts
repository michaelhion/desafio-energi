import { DadosPessoais } from "./dadosPessoais";
import { Endereco } from "./endereco";

export interface Pessoa{
    dadosPessoais:DadosPessoais,
    endereco:Endereco;
}