export interface HeaderCardMessage {
    default: string,
    secondary: string
}


export interface Product {
    id: number,
    brand: string,
    title: string,
    countPortion: number,
    countMouse: string,
    weight: number,
    selectedMessage: string,
    active: boolean,
    header: HeaderCardMessage
        
}