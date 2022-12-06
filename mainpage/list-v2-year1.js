const year1Chapter = (req, res) => {
  res.json({
    test: '2022 고1 2학기 2회고사',
    listOfText: [
      {
        fileName: 'unit14',
        title: 'Unit 14',
      },
      {
        fileName: 'unit15',
        title: 'Unit 15',
      },
      {
        fileName: 'unit16',
        title: 'Unit 16',
      },
      {
        fileName: 'unit19',
        title: 'Unit 19',
      },
      {
        fileName: 'unit20',
        title: 'Unit 20',
      },
      {
        fileName: 'unit21',
        title: 'Unit 21',
      },
      {
        fileName: 'unit22',
        title: 'Unit 22',
      },
      {
        fileName: 'unit23',
        title: 'Unit 23',
      },
      // {
      //   fileName: 'nov',
      //   title: '11월 고1 학령평가',
      // },
      // {
      //   fileName: 'textbook',
      //   title: '교과서',
      // },
    ],
  });
};

module.exports = { year1Chapter };
