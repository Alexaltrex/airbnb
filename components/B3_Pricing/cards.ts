export interface ICard {
    tooltip: string
    label: string
    price: string
    span: string
    items: string[]
    dark: boolean
}

export const cards: ICard[] = [
    {
        tooltip: "Competitive Rate",
        label: "On-Boarding:",
        price: "Free",
        span: "",
        items: [
            "Design concept development",
            "Space planning and layout",
            "Color palette suggestions",
            "Assistance with DET approvals",
            "Professional photography",
            "Property listing",
            "Organise insurance ",
        ],
        dark: true
    },
    {
        tooltip: "Competitive Rate",
        label: "Full Management Fee:",
        price: "15%",
        span: "/MO",
        items: [
            "Guest communication and support",
            "Listing optimization ",
            "Cleaning and maintenance services",
            "Pricing optimization",
            "Check-in / Check-out coordination ",
            "Luxury toileteries / Linens / Towels",
            "24/7 availability for guests",
        ],
        dark: false
    },
    {
        tooltip: "Competitive Rate",
        label: "Custom Interior Design",
        price: "Price on request",
        span: "",
        items: [
            "Initial consultation",
            "Design concept development",
            "Customized plan and mood boards",
            "Furniture and decor selection",
            "Procurement and installation ",
            "Styling and finishing touches",
            "Other requests",
        ],
        dark: true
    },
]
