type Prefix = 'R$ ' | '$' | '%'

export const currency = (e: React.FormEvent<HTMLInputElement>, prefix: Prefix = 'R$ ') => {
    let value = e.currentTarget.value;

    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

    e.currentTarget.value = prefix +  value;

    return e
}

export const cep = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 9;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
    e.currentTarget.value = value;
    return e;
}

export const date = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 10;

    let value = e.currentTarget.value;

    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "$1/$2");
    value = value.replace(/(\d{2})(\d)/, "$1/$2");
    value = value.replace(/(\d{4})(\d)/, "$1/$2");

    e.currentTarget.value =  value;

    return e
}

export const cpf = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 14;
    let value = e.currentTarget.value;

    if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");

        e.currentTarget.value = value;
    }
    return e;
}

export const cnpj = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 18;

    let value = e.currentTarget.value;

    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1/$2");
    value = value.replace(/(\d{4})(\d)/, "$1-$2");

    e.currentTarget.value = value;

    return e
}

export const phone =  (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 15;

    let value = e.currentTarget.value;

    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{1})(\d)/, "($1$2) ");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    value = value.replace(/(\d{2})$/, "$1");

    e.currentTarget.value = value;

    return e
}


export const percentage = (e: React.FormEvent<HTMLInputElement>, prefix: Prefix = '%') => {     
    let value = e.currentTarget.value

    value = value.replace(/[a-zA-Z]/g, "")
    value = value.replace(/ /g, '')
    
    value = value.replace('\,', '.')

    if(value.split('.').length > 2){
        const lastIndex = value.lastIndexOf('.')
        value = value.slice(0, lastIndex) + value.slice(lastIndex + 1)
    }

    if(Number(value.replace(/\,/, '.')) >= 100) {
        value = '100'
    }

    e.currentTarget.value = value;

    return e 
}
