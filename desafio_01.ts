// Como podemos rodar isso em um arquivo .ts sem causar erros? 

interface employee {// solucao 2
    code: number,
    name: string
};

const employee: {code: Number, name: String} = {//solucao 01 
    code: 30,
    name: 'Cassio'
};

employee.code = 27;
employee.name = "Junio";