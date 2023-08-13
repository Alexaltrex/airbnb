export interface IServiceCard {
    title: string
    description: string
    src: string
    faq: {
        question: string
        answer: string
    }[]
}


export const items: IServiceCard[] = [
    {
        title: "Full management",
        description: "Sit back and relax while we take care of every aspect of your property. From bookings and guest communication to maintenance and cleaning, we handle it all.",
        src: "/jpeg/B2_Services/0.jpg",
        faq: [
            {
                question: "What does full management include?",
                answer: "Our full management service includes guest communication, 24/7 support, listing optimization, cleaning, maintenance, and pricing optimization.",
            },
            {
                question: "How do you handle guest bookings?",
                answer: "We handle guest bookings through various platforms, ensuring a seamless experience for guests and maximizing your occupancy rate.",
            },
            {
                question: "Do you offer key exchange services?",
                answer: "Yes, we offer key exchange services to ensure a smooth check-in and check-out process for your guests.",
            },
            {
                question: "How often do you clean the property?",
                answer: "We provide regular cleaning services based on guest turnover, ensuring your property is always spotless for new arrivals.",
            },
            {
                question: "How do you handle maintenance issues?",
                answer: "We have a network of trusted contractors who promptly address any maintenance issues that may arise during guest stays.",
            },
            {
                question: "Can I use my property for personal stays?",
                answer: "Absolutely! We work with you to block off dates for your personal use, ensuring your property is available when you need it.",
            },
        ]
    },
    {
        title: "Cleaning & Maintenance",
        description: "Maintain a pristine and well-managed rental property with our comprehensive cleaning and maintenance services.",
        src: "/jpeg/B2_Services/1.jpg",
        faq: [
            {
                question: "What cleaning services do you provide?",
                answer: "We provide thorough cleaning services between guest stays, ensuring your property is immaculate for each new arrival.",
            },
            {
                question: "Can you handle maintenance issues?",
                answer: "Yes, we have a dedicated team of professionals who can promptly address any maintenance issues that may arise.",
            },
            {
                question: "Do you offer linen and towel services?",
                answer: "Yes, we can provide high-quality linen and towel services to ensure your guests have a comfortable stay.",
            },
            {
                question: "How do you ensure quality control?",
                answer: "We have rigorous quality control measures in place to ensure our cleaning and maintenance services meet the highest standards.",
            },
            {
                question: "What if guests damage my property?",
                answer: "We document the condition of your property before and after each guest stay, and in case of damages, we assist with the resolution process.",
            },
            {
                question: "Can I schedule cleaning at specific times?",
                answer: "Yes, we work with your preferred schedule to ensure minimal disruption to your guests and your personal use of the property.",
            },
        ]
    },
    {
        title: "Interior Design",
        description: "Transform your rental property into a stylish and inviting space with our professional interior design services.",
        src: "/jpeg/B2_Services/2.jpg",
        faq: [
            {
                question: "What interior design services do you offer?",
                answer: "We offer comprehensive interior design solutions, including space planning, furniture selection, color schemes, and decor placement.",
            },
            {
                question: "Can you work with existing furnishings?",
                answer: "Yes, we can work with your existing furnishings and suggest enhancements to create a cohesive and appealing aesthetic.",
            },
            {
                question: "Do you provide custom design packages?",
                answer: "Absolutely! We offer custom design packages tailored to your property's unique needs and your personal style preferences.",
            },
            {
                question: "Can you manage the installation process?",
                answer: "Yes, we handle all aspects of procurement and installation, ensuring a seamless and hassle-free design transformation.",
            },
            {
                question: "How do you stay within budget?",
                answer: "We work closely with you to establish a budget and provide transparent pricing and cost estimates throughout the design process.",
            },
            {
                question: "Can you handle projects of any size?",
                answer: "Yes, we have experience with projects of various sizes, from small studio apartments to large vacation homes.",
            },
        ]
    },
]
