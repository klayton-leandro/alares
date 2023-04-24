export const getNumberFromMoneyValue = (value: string) => value? +value.replace(/R\$/g, '').replace(/\./g, '').replace(/\,00/, '').replace(/\,/, '.'): null
