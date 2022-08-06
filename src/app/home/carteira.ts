export class Carteira{
    id: number
    valor: number
    caixa: string
    descricao: string
    data_valor: string
    nome: string
    fone: number
    qtd: number
    
    constructor(id?: number, qtd?:number, fone?:number, nome?:string, valor?: number, caixa?:string, descricao?: string, data_valor?: string){
        this.id = id
        this.valor = valor
        this.caixa = caixa
        this.descricao = descricao
        this.data_valor = data_valor
        this.nome = nome
        this.fone = fone
        this.qtd = qtd
    }
}