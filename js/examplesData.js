const BIO_EXAMPLES = [
  {
    id: "kingfisher",
    category: "Transport",
    natureEmoji: "🐦",
    natureImage: "images/nature-martin-pecheur.jpg",
    natureAlt: "Un martin-pêcheur perché près de l'eau",
    natureTitle: "Le Martin-pêcheur",
    natureDesc: "Cet oiseau plonge dans l'eau à toute vitesse pour attraper des poissons sans faire d'éclaboussures grâce à la forme effilée de son bec.",
    inventionEmoji: "🚄",
    inventionImage: "images/invention-shinkansen.jpg",
    inventionAlt: "Le train à grande vitesse japonais Shinkansen",
    inventionTitle: "Le train à grande vitesse Shinkansen",
    inventionDesc: "Au Japon, l'ingénieur Eiji Nakatsu a redessiné l'avant du train en imitant le bec du martin-pêcheur : moins de bruit à la sortie des tunnels et 15 % d'électricité économisée.",
    principle: "Principe scientifique : Aérodynamisme et réduction des ondes de pression."
  },
  {
    id: "burdock",
    category: "Matériaux",
    natureEmoji: "🌿",
    natureImage: "images/nature-bardane.jpg",
    natureAlt: "Fruits de bardane dotés de minuscules crochets",
    natureTitle: "Les fruits de la bardane",
    natureDesc: "Ces petites boules végétales s'accrochent solidement aux poils des animaux et aux vêtements grâce à des centaines de minuscules crochets souples.",
    inventionEmoji: "👟",
    inventionImage: "images/invention-velcro.jpg",
    inventionAlt: "Gros plan sur une fermeture Velcro",
    inventionTitle: "La fermeture Velcro",
    inventionDesc: "En 1941, l'ingénieur suisse George de Mestral a observé ces crochets au microscope et a créé les bandes auto-agrippantes utilisées sur les chaussures et combinaisons spatiales.",
    principle: "Principe scientifique : Fixation mécanique réversible par micro-crochets."
  },
  {
    id: "lotus",
    category: "Matériaux",
    natureEmoji: "🪷",
    natureImage: "images/nature-lotus.jpg",
    natureAlt: "Gouttes d'eau perlant sur une feuille de lotus",
    natureTitle: "La feuille de lotus",
    natureDesc: "Même lorsqu'elle pousse dans la boue, la feuille de lotus reste parfaitement propre : l'eau perle à sa surface et emporte les poussières.",
    inventionEmoji: "🏠",
    inventionImage: "images/invention-facade-lotus.jpg",
    inventionAlt: "Façade architecturale autonettoyante",
    inventionTitle: "Peintures et vitres autonettoyantes",
    inventionDesc: "En reproduisant les micro-bosses cireuses de la feuille de lotus, les ingénieurs ont conçu des revêtements hydrophobes qui se nettoient simplement avec la pluie.",
    principle: "Principe scientifique : Super-hydrophobie (effet lotus)."
  },
  {
    id: "termite",
    category: "Architecture",
    natureEmoji: "🐜",
    natureImage: "images/nature-termitiere.jpg",
    natureAlt: "Grande termitière africaine en terre",
    natureTitle: "La termitière africaine",
    natureDesc: "Alors que la température extérieure passe de 40 °C le jour à 5 °C la nuit, l'intérieur de la termitière reste stable autour de 30 °C grâce à un réseau de cheminées d'aération.",
    inventionEmoji: "🏢",
    inventionImage: "images/invention-eastgate.jpg",
    inventionAlt: "Immeuble Eastgate Centre inspiré des termitières",
    inventionTitle: "Immeubles climatisés naturellement",
    inventionDesc: "L'immeuble Eastgate Centre au Zimbabwe imite les conduits des termitières pour faire circuler l'air frais et consomme 90 % d'énergie de climatisation en moins.",
    principle: "Principe scientifique : Ventilation passive et convection thermique."
  },
  {
    id: "shark",
    category: "Transport",
    natureEmoji: "🦈",
    natureImage: "images/nature-requin.jpg",
    natureAlt: "Requin nageant sous l'eau",
    natureTitle: "La peau du requin",
    natureDesc: "La peau du requin est recouverte de minuscules écailles rainurées (denticules) qui empêchent les tourbillons d'eau de freiner sa nage.",
    inventionEmoji: "✈️",
    inventionImage: "images/invention-avion.jpg",
    inventionAlt: "Aile d'avion dotée d'un revêtement aérodynamique",
    inventionTitle: "Revêtements d'avions et coques de bateaux",
    inventionDesc: "Des films micro-rainurés inspirés des denticules de requin réduisent la traînée des avions et empêchent les algues de se fixer sur les navires.",
    principle: "Principe scientifique : Hydrodynamisme et réduction de la traînée."
  },
  {
    id: "gecko",
    category: "Robotique",
    natureEmoji: "🦎",
    natureImage: "images/nature-gecko.jpg",
    natureAlt: "Gecko adhérant à une paroi lisse",
    natureTitle: "Les pattes du gecko",
    natureDesc: "Le gecko grimpe sur des vitres verticales sans colle ni ventouse grâce à des millions de poils microscopiques qui créent une attraction moléculaire.",
    inventionEmoji: "🤖",
    inventionImage: "images/invention-robot-gecko.jpg",
    inventionAlt: "Robot grimpeur bio-inspiré",
    inventionTitle: "Robots grimpeurs et pinces spatiales",
    inventionDesc: "Les ingénieurs fabriquent des adhésifs secs réutilisables permettant à des robots d'inspecter des parois lisses ou de capturer des débris dans l'espace.",
    principle: "Principe scientifique : Forces d'adhésion microscopiques (Van der Waals)."
  }
];

if (typeof module !== "undefined") {
  module.exports = { BIO_EXAMPLES };
}