/**
 * 
 * @param {string} dateISO 
 */
export function formatDate(dateISO) {
    const date = new Date(dateISO);

    const day = `${("0" + date.getDate()).slice(-2)}`;
    const month = `${("0" + date.getMonth()).slice(-2)}`;
    const year = date.getFullYear().toString().slice(2);

    const dateFormatted = `${day}.${month}.${year}`
    const timeFormatted = `${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}`

    return `${dateFormatted} ${timeFormatted}`;
}
