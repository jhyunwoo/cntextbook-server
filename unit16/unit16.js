const Unit16 = (req, res) => {
    res.json([
        {
            test: "2022 2학기 2회고사",
            chapter: "Unit 16",
            question: "p.104",
            title: "u16p104"
        },
        {
            test: "2022 2학기 2회고사",
            chapter: "Unit 16",
            question: "p.106",
            title: "u16p106"
        },
    ])
}

module.exports = { Unit16 }