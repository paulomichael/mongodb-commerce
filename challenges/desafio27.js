db.produtos.find(
  { nome: /mc/gi },
  {},
).count();