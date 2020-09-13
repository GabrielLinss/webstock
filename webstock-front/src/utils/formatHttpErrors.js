export default function(status) {
    switch(status) {
        case 401:
            return 'Não autorizado!'
        case 404:
            return 'Não encontrado!'
        case 500:
            return 'Erro no servidor!'
        case 400:
            return 'Erro na requisição!'
    }
}
