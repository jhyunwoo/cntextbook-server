const y2textbook = (req, res) => {
  res.json([
    {
      test: '2022 2학기 2회고사',
      chapter: '영어2 능률[김]',
      question: 'Lesson 4',
      title: 'y2textbookc4',
    },
  ]);
};

module.exports = { y2textbook };
