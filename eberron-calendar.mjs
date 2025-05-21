Hooks.once("init", () => {
    CONFIG.calendar = {
        name: "Eberron.CalendarName",
        description: "Eberron.CalendarDescription",
        years: {
            yearZero: 998,
            firstWeekDay: 0
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
            values: [
                {
                    name: "Sul",
                    abbreviation: "Su",
                    ordinal: 1,
                },
                {
                    name: "Mol",
                    abbreviation: "M",
                    ordinal: 2,
                },
                {
                    name: "Zol",
                    abbreviation: "Zl",
                    ordinal: 3,
                },
                {
                    name: "Wir",
                    abbreviation: "W",
                    ordinal: 4,
                },
                {
                    name: "Zor",
                    abbreviation: "Zr",
                    ordinal: 5,
                },
                {
                    name: "Far",
                    abbreviation: "F",
                    ordinal: 6,
                },
                {
                    name: "Sar",
                    abbreviation: "Sa",
                    ordinal: 7,
                }
            ],
            daysPerYear: 336,
            hoursPerDay: 24,
            minutesPerHour: 60,
            secondsPerMinute: 60
        },
        seasons: {
            values: [
                {
                    name: "CALENDAR.GREGORIAN.Winter",
                    abbreviation: "W",
                    monthStart: 12,
                    monthEnd: 2,
                    dayStart: 1,
                },
                {
                    name: "CALENDAR.GREGORIAN.Spring",
                    abbreviation: "Sp",
                    monthStart: 3,
                    monthEnd: 5,
                    dayStart: 1,
                },
                {
                    name: "CALENDAR.GREGORIAN.Summer",
                    abbreviation: "Su",
                    monthStart: 6,
                    monthEnd: 8,
                    dayStart: 1,
                },
                {
                    name: "CALENDAR.GREGORIAN.Fall",
                    abbreviation: "A",
                    monthStart: 9,
                    monthEnd: 11,
                    dayStart: 1,
                },
            ]
        }
    }
})