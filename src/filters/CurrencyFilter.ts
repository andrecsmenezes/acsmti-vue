export const toCurrency = ( 
    value                 : number, 
    language              : string = 'pt_BR', 
    currency              : string = 'BRL',
    minimumFractionDigits : number = 2,
) => {
    if( isNaN( value ) ) return '-'

    const formatter = new Intl.NumberFormat( language, {
        style                 : 'currency',
        currency              : currency,
        minimumFractionDigits : minimumFractionDigits,
    });
    
    return formatter.format( value )
}
