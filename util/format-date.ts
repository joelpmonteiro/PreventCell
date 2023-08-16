export const formatDateEnUs = (date: Date) => [
    date.getFullYear(),
    ('0' + (date.getMonth() + 1)).slice(-2),
    ('0' + (date.getUTCDate())).slice(-2)
].join('-');