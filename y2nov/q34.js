const q34 = (req, res) => {
  res.json([
    {
      title: '34번',
      en: 'Observational studies of humans cannot be properly controlled.',
      ko: '인간에 대한 관찰 연구는 적절하게 통제될 수 없다.',
    },
    {
      title: '34번',
      en: 'Humans live different lifestyles and in different environments.',
      ko: '인간은 다양한 생활 방식으로 그리고 다양한 환경에서 살고 있다.',
    },
    {
      title: '34번',
      en: 'Thus, they are insufficiently homogeneous to be suitable experimental subjects.',
      ko: '따라서 그들은 적절한 실험 대상이 되기에 충분히 동질적이지 않다.',
    },
    {
      title: '34번',
      en: 'These confounding factors undermine our ability to draw sound causal conclusions from human epidemiological surveys.',
      ko: '이러한 ‘교란 변수’는 인간 역학 조사로부터 타당한 인과적 결론을 도출하는 우리의 능력을 손상시킨다.',
    },
    {
      title: '34번',
      en: 'Confounding factors are variables (known or unknown) that make it difficult for epidemiologists to isolate the effects of the specific variable being studied.',
      ko: '교란 변수는 역학자가 연구되고 있는 특정한 변수의 영향을 분리하기어렵게 만드는 (알려지거나 알려지지 않은) 변수이다.',
    },
    {
      title: '34번',
      en: 'For example, Taubes argued that since many people who drink also smoke, researchers have difficulty determining the link between alcohol consumption and cancer.',
      ko: '예를 들어, Taubes는 술을 마시는 많은 사람들이 흡연도 하기 때문에 연구자들이 알코올 섭취와 암 사이의 연관성을 결정짓는 데 어려움을 겪는다고 주장했다.',
    },
    {
      title: '34번',
      en: 'Similarly, researchers in the famous Framingham study identified a significant correlation between coffee drinking and coronary heart disease.',
      ko: '마찬가지로 유명한 Framingham 연구의 연구자들은 커피를 마시는 것과 관상 동맥성 심장 질환 사이에 상당한 상관관계를 확인했다.',
    },
    {
      title: '34번',
      en: 'However, most of this correlation disappeared once researchers corrected for the fact that many coffee drinkers also smoke.',
      ko: '그러나 연구자들이 커피를 마시는 많은 사람들이 흡연도 한다는 사실에 대해 수정을 하자 이러한 상관관계의 대부분은 사라졌다.',
    },
    {
      title: '34번',
      en: 'If the confounding factors are known, it is often possible to correct for them.',
      ko: '교란 변수들이 알려져 있다면 그것들을 수정하는 것이 종종 가능하다.',
    },
    {
      title: '34번',
      en: 'However, if they are unknown, they will undermine the reliability of the causal conclusions we draw from epidemiological surveys.',
      ko: '그러나 그것들이 알려져 있지 않다면, 그것들은 우리가 역학 조사로부터 도출하는 인과적 결론의 신뢰성을 손상시킬 것이다.',
    },
  ]);
};

module.exports = { q34 };
