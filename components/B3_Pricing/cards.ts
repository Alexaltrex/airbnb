export interface ICard {
    tooltip: string
    price: number
    items: string[]
    dark: boolean
}

export const cards: ICard[] = [
    {
        tooltip: "Most popular tariff",
        price: 27,
        items: [
            "Most popular tariff",
            "Second sentence",
            "Second sentence",
            "Fourth sentence",
            "Fourth sentence",
            "Fourth sentence",
            "Seventh sentence",
        ],
        dark: true
    },
    {
        tooltip: "Most popular tariff",
        price: 27,
        items: [
            "Most popular tariff",
            "Second sentence",
            "Second sentence",
            "Fourth sentence",
            "Fourth sentence",
            "Fourth sentence",
            "Seventh sentence",
        ],
        dark: false
    },
    {
        tooltip: "Most popular tariff",
        price: 27,
        items: [
            "Most popular tariff",
            "Second sentence",
            "Second sentence",
            "Fourth sentence",
            "Fourth sentence",
            "Fourth sentence",
            "Seventh sentence",
        ],
        dark: true
    },
]
