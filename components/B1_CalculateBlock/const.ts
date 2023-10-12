export const areasDefault = [
    "Choose area",
    "Al Barsha",
    "Al Barsha South",
    "Al Furjan",
    "Al Jaddaf",
    "Arabian Ranches",
    "Al Wasl",
    "Arjan",
    "Bluewater Island",
    "Bur Dubai",
    "Business Bay",
    "Damac Hills",
    "Deira",
    "DIFC",
    "Discovery Gardens",
    "Creek harbour",
    "Downtown",
    "Festival City",
    "Dubai Hills",
    "Marina",
    "Media City",
    "Silicone Oasis",
    "Sports City",
    "International City",
    "Production City",
    "Jebel Ali Village",
    "Jumeirah Lakes Towers",
    "JVC / JVT",
    "Nad Al Seba",
    "Palm Jumeirah",
    "Umm Suquim",
    "Zabeel 2",
    "Jumeirah Beach Residence",
    "The Greens",
    "Madinat Jumeirah",
    "Springs",
    "Tecom",
];

export const areas = [
    ...[...areasDefault].sort((a, b) => {
        if (a === "Choose area") return -1
        if (b === "Choose area") return 1
        if (a > b) return 1
        if (a < b) return -1
        return 0
    })
];

export const menuItemsArea = areas
    .map(el => ({value: el, label: el}));

// bedrooms
export const bedrooms = [
    "Choose bedrooms",
    "One Bedroom",
    "Two Bedroom",
    "Three Bedrooms",
    "Four Bedrooms",
    "Five Bedrooms",
    "Six Bedrooms+",
];
export const menuItemsBedrooms = bedrooms.map(el => ({value: el, label: el}));

export const furnishings = [
    "Choose furnishing",
    "Standard",
    "Premium"
];
export const menuItemsFurnishing = furnishings.map(el => ({value: el, label: el}));

export const rentalPrices = [
    // standard
    [
        [592, 1695, 2400, 4465, 0, 0],
        [420, 677, 974, 0, 0, 0],
        [395, 794, 1049, 0, 0, 2047],
        [509, 1229, 1754, 0, 0, 0],
        [387, 848, 1361, 2025, 0, 0],
        [1109, 2437, 2249, 2435, 4412, 0],
        [396, 580, 0, 0, 0, 0],
        [685, 767, 958, 1095, 0, 0],
        [611, 1486, 2192, 2213, 0, 0],
        [713, 1078, 1662, 2064, 0, 0],
        [525, 1013, 1524, 1492, 0, 0],
        [376, 1627, 2781, 0, 0, 0],
        [567, 1068, 1452, 0, 0, 0],
        [313, 0, 0, 0, 0, 0],
        [575, 840, 1285, 1353, 0, 0],
        [713, 1078, 1662, 2064, 2315, 0],
        [575, 840, 1285, 1353, 0, 0],
        [620, 877, 1210, 2001, 2649, 0],
        [665, 1154, 1685, 1910, 2682, 2868],
        [382, 643, 1335, 0, 0, 0],
        [334, 753, 0, 0, 0, 0],
        [396, 684, 1175, 0, 0, 0],
        [230, 931, 0, 0, 0, 0],
        [374, 714, 0, 0, 0, 0],
        [342, 767, 0, 0, 0, 0],
        [451, 754, 2031, 0, 0, 0],
        [379, 718, 974, 0, 0, 0],
        [487, 745, 1041, 0, 0, 0],
        [819, 1446, 2339, 5336, 8162, 8614],
        [630, 1085, 1908, 0, 0, 0],
        [792, 1316, 1727, 1863, 0, 0],
        [665, 1154, 1685, 1910, 2682, 2868],
        [382, 643, 1335, 0, 0, 0],
        [630, 1085, 1908, 0, 0, 0],
        [527, 1184, 1421, 1741, 0, 0],
        [592, 1695, 2400, 4465, 0, 0],
    ],
    // Premium
    [
        [618, 1772, 2508, 4666, 0, 0],
        [602, 971, 1397, 0, 0, 0],
        [489, 982, 1298, 0, 0, 2532],
        [705, 1702, 2428, 0, 0, 0],
        [472, 1035, 1661, 2470, 0, 0],
        [1191, 2616, 2414, 2613, 4412, 0],
        [511, 749, 0, 0, 0, 0],
        [685, 767, 958, 1095, 0, 0],
        [826, 2008, 2960, 2990, 0, 0],
        [875, 1323, 1898, 2252, 0, 0],
        [658, 1269, 1662, 1628, 0, 0],
        [588, 2546, 3034, 0, 0, 0],
        [710, 1338, 1584, 0, 0, 0],
        [359, 0, 0, 0, 0, 0],
        [687, 1003, 1402, 1476, 0, 0],
        [875, 1323, 1813, 2252, 2526, 0],
        [687, 1003, 1402, 1476, 0, 0],
        [677, 958, 1320, 2183, 2890, 0],
        [769, 1334, 1838, 2083, 2925, 3130],
        [537, 903, 1457, 0, 0, 0],
        [466, 1051, 0, 0, 0, 0],
        [471, 813, 1282, 0, 0, 0],
        [382, 1545, 0, 0, 0, 0],
        [420, 803, 0, 0, 0, 0],
        [420, 943, 0, 0, 0, 0],
        [532, 889, 2216, 0, 0, 0],
        [433, 821, 1063, 0, 0, 0],
        [562, 859, 1136, 0, 0, 0],
        [1275, 2249, 2551, 5821, 8904, 9572],
        [723, 1247, 2082, 0, 0, 0],
        [869, 1445, 1885, 2032, 0, 0],
        [769, 1334, 1838, 2083, 2925, 3130],
        [537, 903, 1457, 0, 0, 0],
        [723, 1247, 2082, 0, 0, 0],
        [582, 1307, 1550, 1899, 0, 0],
        [618, 1772, 2508, 4666, 0, 0],
    ],
]
