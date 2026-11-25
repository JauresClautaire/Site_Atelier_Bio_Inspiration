const assert = require("node:assert/strict");
const { BIO_EXAMPLES } = require("../js/examplesData.js");
const { BIO_QUIZ } = require("../js/quizData.js");

console.log("Vérification des données pédagogiques de l'atelier Bio-Inspiration...");

assert.ok(BIO_EXAMPLES.length >= 6, "Au moins 6 exemples de bio-inspiration requis.");
BIO_EXAMPLES.forEach((ex) => {
  assert.ok(ex.natureTitle && ex.inventionTitle, `Titres manquants pour ${ex.id}`);
  assert.ok(ex.principle.startsWith("Principe scientifique :"), `Principe mal formaté pour ${ex.id}`);
  assert.ok(ex.sourceTitle && ex.sourceUrl, `Source manquante pour ${ex.id}`);
});

assert.ok(BIO_QUIZ.length >= 6, "Au moins 6 questions de quiz requises.");
BIO_QUIZ.forEach((q) => {
  assert.ok(q.options.length === 3, `La question ${q.id} doit proposer 3 choix.`);
  assert.ok(q.correctIndex >= 0 && q.correctIndex < q.options.length, `Indice invalide pour ${q.id}`);
  assert.ok(q.hint.length > 10, `Indice manquant pour ${q.id}`);
});

console.log("✅ Toutes les vérifications pédagogiques et structurelles ont réussi !");