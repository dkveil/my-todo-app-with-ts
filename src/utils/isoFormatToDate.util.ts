export const formatToDate = (iso: string) => {
    const date = new Date(iso)
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()


    return `${hour}:${minutes} ${day}.${month}.${year}`
}