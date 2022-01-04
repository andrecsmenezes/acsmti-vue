interface AddressFilter {
    street        : string,
    neighbourhood : string,
    number        : number | string,
    city          : string,
    zip_code      : string,
    complement    : string,
}

const toAddress = ( address: AddressFilter ) => {
    if( !address ) return '-'

    const { 
        street, 
        neighbourhood, 
        number, 
        city, 
        zip_code, 
        complement 
    } = address

    return    `${ street }`
            + `${ number && number > 0 ? `, ${number}` : '' }`
            + `${ neighbourhood ? `, ${neighbourhood}` : '' }`
            + `${ complement ? `, ${complement}` : '' } `
            + `${ city ? ` - ${city}` : '' }`
            + `${ city && city ? `/${city}` : '' }`
            + `${ zip_code ? ` - ${zip_code}` : '' }`
}
