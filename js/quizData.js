const BIO_QUIZ = [
  {
    id: "bq1",
    question: "Quel animal a inspiré le nez ultra-silencieux du train japonais Shinkansen ?",
    hint: "C'est un petit oiseau capable de plonger dans l'eau sans faire d'éclaboussures.",
    options: [
      "Le faucon pèlerin",
      "Le martin-pêcheur",
      "Le manchot empereur"
    ],
    correctIndex: 1,
    explanation: "La forme effilée du bec du martin-pêcheur permet de passer de l'air à l'eau sans onde de choc, exactement ce dont le train avait besoin en sortant des tunnels !"
  },
  {
    id: "bq2",
    question: "Comment est née l'idée de la fermeture Velcro en 1941 ?",
    hint: "L'inventeur est revenu d'une promenade en forêt avec des graines accrochées à ses chaussettes.",
    options: [
      "En observant des fruits de bardane au microscope",
      "En étudiant les pattes d'une araignée",
      "En observant des écailles de pomme de pin"
    ],
    correctIndex: 0,
    explanation: "Les petits crochets souples des fruits de bardane ont inspiré les deux bandes du Velcro : une face avec des crochets, l'autre avec des boucles."
  },
  {
    id: "bq3",
    question: "Quelle plante a inspiré les peintures et vitres autonettoyantes ?",
    hint: "Ses feuilles poussent dans les étangs boueux mais restent toujours impeccables.",
    options: [
      "Le tournesol",
      "La feuille de lotus",
      "Le cactus"
    ],
    correctIndex: 1,
    explanation: "La surface microscopique de la feuille de lotus empêche l'eau de s'étaler : les gouttes roulent comme des billes et emportent la saleté."
  },
  {
    id: "bq4",
    question: "Quel insecte bâtisseur a inspiré des immeubles qui gardent une température stable sans climatisation électrique ?",
    hint: "Il construit d'immenses monticules de terre percés de cheminées d'aération en Afrique.",
    options: [
      "La termite",
      "L'abeille domestique",
      "La libellule"
    ],
    correctIndex: 0,
    explanation: "Les galeries et cheminées des termitières créent une ventilation naturelle continue entre l'air chaud et l'air frais."
  },
  {
    id: "bq5",
    question: "Grâce à quoi le gecko peut-il marcher au plafond sur une vitre lisse ?",
    hint: "Ce n'est ni de la colle liquide, ni des ventouses !",
    options: [
      "Des griffes métalliques très pointues",
      "Des millions de poils microscopiques sous ses doigts",
      "Un liquide collant sécrété par sa peau"
    ],
    correctIndex: 1,
    explanation: "Les millions de nano-poils (setae) créent une attraction physique sans laisser aucune trace de colle."
  },
  {
    id: "bq6",
    question: "Quelle est la première étape essentielle d'une démarche de bio-inspiration ?",
    hint: "Avant de construire un objet, que fait le scientifique face à la nature ?",
    options: [
      "Observer attentivement un être vivant et comprendre son fonctionnement",
      "Copier exactement la couleur de l'animal",
      "Utiliser uniquement du plastique recyclé"
    ],
    correctIndex: 0,
    explanation: "La bio-inspiration commence toujours par l'observation du vivant et la compréhension du principe scientifique derrière son adaptation."
  }
];

if (typeof module !== "undefined") {
  module.exports = { BIO_QUIZ };
}