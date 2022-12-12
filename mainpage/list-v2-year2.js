const year2Chapter = (req, res) => {
  res.json({
    test: '2022 고2 2학기 2회고사',
    listOfText: [
      {
        fileName: 'ERC2',
        title: '영어독해연습 Chapter 2',
      },
      {
        fileName: 'ERC4',
        title: '영어독해연습 Chapter 4',
      },
      {
        fileName: 'ERC10',
        title: '영어독해연습 Chapter 10',
      },
      {
        fileName: 'ERC11',
        title: '영어독해연습 Chapter 11',
      },
      {
        fileName: 'ERC12',
        title: '영어독해연습 Chapter 12',
      },
      {
        fileName: 'y2nov',
        title: '2022년 고2 11월 학평',
      },
      {
        fileName: 'y2textbook',
        title: '교과서',
      },
    ],
  });
};

module.exports = { year2Chapter };
