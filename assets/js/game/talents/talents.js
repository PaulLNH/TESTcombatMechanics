const talents = [
  {
    id: 1,
    title: "Slice",
    description:
      "Close range attack aimed at the opponent's forearms and hands, can be made with both the lead and back edges.",
    applies: [],
    gainAbility: ["slice"],
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
    applies: ["sharpening_stone"],
    gainAbility: [],
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
    applies: [],
    gainAbility: ["setting_aside"],
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
    description:
      "Successful attacks with an edged weapon cause the opponent to bleed, this effect can stack up to 5 times.",
    applies: ["serrated_blade"],
    gainAbility: [],
    maxPoints: 1,
    stats: [
      {
        title: "Strength",
        value: 1
      }
    ]
  },
  {
    id: 5,
    title: "Pommel",
    dependsOn: [],
    description: "Bash your opponent with the pommel of your sword.",
    applies: [],
    gainAbility: ["pommel"],
    maxPoints: 1,
    stats: [
      {
        title: "Strength",
        value: 1
      }
    ]
  },
  {
    id: 6,
    title: "Parry",
    dependsOn: [5],
    description: "Parry your opponents attack.",
    applies: ["parry"],
    gainAbility: [],
    maxPoints: 1,
    stats: [
      {
        title: "Strength",
        value: 1
      }
    ]
  },
  {
    id: 7,
    title: "Front Kick",
    dependsOn: [5, 6],
    description: "Front kick your opponent in the chest koncking them back.",
    applies: [],
    gainAbility: ["front_kick"],
    maxPoints: 1,
    stats: [
      {
        title: "Strength",
        value: 1
      }
    ]
  },
  {
    id: 8,
    title: "Overpower",
    dependsOn: [5, 6, 7],
    description: "While locked in combat, overpower your opponent.",
    applies: ["overpower"],
    gainAbility: [],
    maxPoints: 1,
    stats: [
      {
        title: "Strength",
        value: 1
      }
    ]
  },
  {
    id: 9,
    title: "Execute",
    dependsOn: [1, 2, 3, 4, 5, 6, 7, 8],
    description: "Deliver a fatal blow to your enemy.",
    applies: [],
    gainAbility: ["execute"],
    maxPoints: 1,
    stats: [
      {
        title: "Strength",
        value: 1
      }
    ]
  }
];
