const talents = [
  {
    id: 1,
    title: "Slice",
    description:
      "Close range attack aimed at the opponent's forearms and hands, can be made with both the lead and back edges.",
    maxPoints: 1,
    stats: [
      {
        title: "Strength",
        value: 1
      }
    ]
  },
  {
    id: 2,
    title: "Sharpening Stone",
    dependsOn: [1],
    description:
      "Keep your weapons well honed increasing all weapon damage by {n}.",
    maxPoints: 1,
    stats: [
      {
        title: "Strength",
        value: 1
      }
    ]
  },
  {
    id: 3,
    title: "Setting Aside",
    dependsOn: [1, 2],
    description:
      "Timed counter attack to deflect a thrust or parry a cut. The sword is hooked over the opponent's and forced downward and followed up with a thrust.",
    maxPoints: 1,
    stats: [
      {
        title: "Strength",
        value: 1
      }
    ]
  },
  {
    id: 4,
    title: "Serrated Blade",
    dependsOn: [1, 2, 3],
    description: "Successful attacks with an edged weapon cause the opponent to bleed.",
    maxPoints: 1,
    stats: [
      {
        title: "Strength",
        value: 1
      }
    ]
  }
];
