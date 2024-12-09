Hooks.once("init", () => {
    CONFIG.calendar = {
        name: "Eberron.CalendarName",
        description: "Eberron.CalendarDescription",
        years: {
            yearZero: 998
        },
        months: {
            values: [
                {
                    name: "Zarantyr",
                    abbreviation: "Zar",
                    ordinal: 1,
                    days: 28,
                },
                {
                    name: "Olarune",
                    abbreviation: "Ola",
                    ordinal: 2,
                    days: 28,
                },
                {
                    name: "Therendor",
                    abbreviation: "Thr",
                    ordinal: 3,
                    days: 28,
                },
                {
                    name: "Eyre",
                    abbreviation: "Eyr",
                    ordinal: 4,
                    days: 28,
                },
                {
                    name: "Dravago",
                    abbreviation: "Drv",
                    ordinal: 5,
                    days: 28,
                },
                {
                    name: "Nymm",
                    abbreviation: "Nym",
                    ordinal: 6,
                    days: 28,
                },
                {
                    name: "Lharvion",
                    abbreviation: "Lhr",
                    ordinal: 7,
                    days: 28,
                },
                {
                    name: "Barrakas",
                    abbreviation: "Bar",
                    ordinal: 8,
                    days: 28,
                },
                {
                    name: "Rhaan",
                    abbreviation: "Rha",
                    ordinal: 9,
                    days: 28,
                },
                {
                    name: "Sypheros",
                    abbreviation: "Sph",
                    ordinal: 10,
                    days: 28,
                },
                {
                    name: "Aryth",
                    abbreviation: "Ary",
                    ordinal: 11,
                    days: 28,
                },
                {
                    name: "Vult",
                    abbreviation: "Vlt",
                    ordinal: 12,
                    days: 28,
                },
            ]
        },
        days: {
            weekdays: [
                {
                    name: "Sul",
                    abbreviation: "Su",
                    ordinal: 1,
                    isRestDay: true,
                },
                {
                    name: "Mol",
                    abbreviation: "M",
                    ordinal: 2,
                    isRestDay: false,
                },
                {
                    name: "Zol",
                    abbreviation: "Zl",
                    ordinal: 3,
                    isRestDay: false,
                },
                {
                    name: "Wir",
                    abbreviation: "W",
                    ordinal: 4,
                    isRestDay: false,
                },
                {
                    name: "Zor",
                    abbreviation: "Zr",
                    ordinal: 5,
                    isRestDay: false,
                },
                {
                    name: "Far",
                    abbreviation: "F",
                    ordinal: 6,
                    isRestDay: false,
                },
                {
                    name: "Sar",
                    abbreviation: "Sa",
                    ordinal: 7,
                    isRestDay: true,
                }
            ],
            daysPerYear: 336
        },
        seasons: {
            values: [
                {
                    name: "Winter",
                    abbreviation: "W",
                    startMonth: 12,
                    startDay: 1,
                },
                {
                    name: "Spring",
                    abbreviation: "Sp",
                    startMonth: 3,
                    startDay: 1,
                },
                {
                    name: "Summer",
                    abbreviation: "Su",
                    startMonth: 6,
                    startDay: 1,
                },
                {
                    name: "Autumn",
                    abbreviation: "A",
                    startMonth: 9,
                    startDay: 1,
                },
            ]
        }
    }
})