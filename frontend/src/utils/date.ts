export const formatDate = (date: string) => {
    const [month, day, year] = date.split('-')

    return `${day}-${month}-${year}`
}