const year1Chapter = (req, res) => {
  res.json({
    test: '2022 고1 2학기 2회고사',
    listOfText: [
      {
        fileName: 'ERC2',
        title: '지원 예정',
      },
    ],
  });
};

module.exports = { year1Chapter };
