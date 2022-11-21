const year1Chapter = (req, res) => {
  res.json([
    {
      test: "2022 고1 2학기 1회고사",
    },
    {
      test: "2022 고1 2학기 2회고사",
      listOfText: [
        {
          fileName: "ERC2",
          title: "영어독해연습 Chapter 2",
        },
        {
          fileName: "ERC4",
          title: "영어독해연습 Chapter 4",
        },
        // {
        //   fileName:"ERC10",
        //   title: "영어독해연습 Chapter 10",
        // },
        // {
        //   fileName:"ERC11",
        //   title: "영어독해연습 Chapter 11",
        // },
        // {
        //   fileName:"ERC12",
        //   title: "영어독해연습 Chapter 12",
        // },
      ],
    },
  ]);
};

module.exports = { year1Chapter };
