export const normalizeText = (text: string | undefined) => text? text.replace(/ /g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase(): ''

export const formatCurrency = (value: number | undefined | string ) => value? Number(value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}): 0

export const normalizePriceText = (value: string ) => value ? value.replace('R$','').replace(',00','') : ''