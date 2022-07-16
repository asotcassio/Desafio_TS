// Como podemos melhorar o esse código usando TS? 
enum EProfissao {
    Padeiro,
    Atriz

}

type Pessoa ={
    nome: String,
    idade: Number,
    profissao: EProfissao
}


let pessoa1 = {
nome: "maria",
idade: 29,
profissao: EProfissao.Atriz
}

let pessoa2 = {
nome: "roberto",
idade: 19,
profissao: EProfissao.Padeiro
}

let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: EProfissao.Atriz
};

let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: EProfissao.Padeiro
}