
Finlar
Assistente financeiro da família no Telegram. Você escreve como fala — gastei 45 no almoço, recebi 5500 de salário — e o bot organiza receitas, despesas, cartões, contas e o resumo do mês.

Ele só funciona no grupo da família, não no chat privado.

Como encontrar o bot
No Telegram, busque Finlar ou abra:

@finance_house_bot

Toque em Iniciar. O bot vai pedir para você usar o grupo da família.

Como colocar no grupo
Crie um grupo só da família (ou use o que vocês já têm).
Toque no nome do grupo → Adicionar membros.
Busque @finance_house_bot e adicione.
No grupo, envie:
/configuracoes
Use os botões:
Adicionar membros — quem já falou no grupo entra na família
Todos / Só admins / Membros selecionados — quem pode registrar gastos
Pronto. Cada pessoa da casa precisa mandar pelo menos uma mensagem no grupo para o bot reconhecê-la (por exemplo oi).

Se o bot responder que o grupo não está autorizado, envie o id que ele mostrar para quem administra o Finlar.

Como usar no dia a dia
Não precisa de comando. Escreva no grupo:

gastei 45 no almoço
mercado 350
recebi meu salário 5500
minha esposa recebeu 3500
gastei 120 no Nubank
Contas que se repetem, parcelas e cartão
todo dia 10 pago 289 do terreno
Netflix 55,90 todo dia 7
comprei uma TV de 2400 em 10x no Nubank
cartão Nubank limite 5000 fecha dia 22 vence dia 29
Perguntar como está o mês
como estão nossas finanças?
quanto gastamos com mercado?
quanto eu gastei?
quanto minha esposa gastou?
onde estamos gastando mais?
quanto ainda temos para pagar?
como devemos terminar o mês?
Corrigir o último lançamento
na verdade foram 46 reais
coloca como restaurante
foi no Nubank
Ou use /editar e /desfazer.

Foto e PDF
Mande no grupo:

foto ou PDF de comprovante (PIX, TED, boleto)
fatura do cartão em PDF
conta de energia, água ou internet
PIX entre os bancos da casa (Nubank → Inter) vira transferência, não despesa. Depois dá para confirmar no card ou escrever paguei a energia.

Comandos
No grupo, o Telegram também sugere a lista ao digitar /.

Comando	O que faz
/ajuda	Ajuda completa e exemplos
/resumo	Receitas, despesas e saldo do mês
/extrato	Histórico. Ex.: /extrato hoje, /extrato agosto
/categorias	Gastos do mês por categoria
/contas	Contas do mês
/fatura	O que ainda falta pagar (fatura, parcelas, recorrentes)
/previsao	Como o mês deve terminar
/cartoes	Lista os cartões. Cadastro: /cartao Nubank limite 5000 fecha dia 22 vence dia 29
/limites	Limite usado e disponível. Ex.: /limite Santander usado 4500
/orcamento	Limite por categoria. Ex.: /orcamento mercado 1200
/metas	Meta de guardar. Ex.: /metas 2000
/recorrentes	Contas que se repetem. Ex.: /recorrentes Terreno 289 todo dia 10
/receita	Registrar receita. Ex.: /receita 5000 salario
/despesa	Registrar despesa. Ex.: /despesa 350 mercado
/transferencia	Entre contas. Ex.: /transferencia 500 do nubank para o inter
/editar	Corrigir o último lançamento
/desfazer	Arquivar o último registro (não apaga de vez)
/auditoria	Quem criou, alterou ou arquivou cada lançamento
/subcategorias	Lista de categorias
/configuracoes	Vincular o grupo e definir quem pode registrar
/ping	Testar se o bot está no ar
Dicas
Fale eu, esposa, nós ou o nome da pessoa para filtrar gastos.
O /fatura lista cada recorrência do mês e as atrasadas à parte.
Em dúvida, mande /ajuda no grupo.
No grupo, /subcategorias mostra esta lista.
Categorias padrão
O bot já cria estas categorias. O nome (e o da subcategoria) também vale como palavra-chave: gastei 45 no almoço cai em Almoço.

Palavras com menos de 3 letras são ignoradas. Se nada casar, vai para Outros.

Despesas
Categoria	Palavras-chave
🏠 Moradia	moradia
🍔 Alimentação	alimentacao, alimentação, comida, refeicao, refeição
└ 🥗 Almoço	almoco, almoço
└ 🍽️ Jantar	jantar
└ 🍽️ Restaurante	restaurante
└ 🛵 Delivery	delivery, ifood, rappi
└ 🥪 Lanche	lanche
└ ☕ Café	cafe, café
🛒 Mercado	mercado
🚗 Transporte	transporte
└ ⛽ Combustível	combustivel, combustível, gasolina, etanol, alcool, álcool, diesel, gnv
└ 🚕 Uber	uber
└ 🔧 Manutenção	manutencao, manutenção
└ 🅿️ Estacionamento	estacionamento
💡 Energia	energia, luz, enel, cemig, copel, cpfl, light, energisa
💧 Água	agua, água, sabesp, cedae, sanepar
🌐 Internet	internet, vivo, claro, net, virtua
📱 Telefonia	telefonia
💳 Cartão	cartao, cartão
🏥 Saúde	saude, saúde, academia
💊 Farmácia	farmacia, farmácia
🎓 Educação	educacao, educação, curso, faculdade, escola, udemy, alura
🎮 Lazer	lazer
👕 Roupas	roupas, tenis, tênis, sapato, calca, calça, camisa, roupa
🐶 Pets	pets
🎁 Presentes	presentes
✈️ Viagem	viagem
💰 Investimentos	investimentos
🏦 Empréstimos	emprestimos, empréstimos
📺 Assinaturas	assinaturas, netflix, spotify
💼 Trabalho	trabalho
Receitas
Categoria	Palavras-chave
💵 Salário	salario, salário, holerite, decimo terceiro, décimo terceiro, 13 salario
💸 Renda extra	renda extra, freelance, extra, bico
↩️ Reembolso	reembolso, estorno, devolucao, devolução, refund
📈 Rendimento	rendimento, dividendos, dividendo, juros
💵 Outras receitas	outras receitas
Fallback
Categoria	Palavras-chave
📦 Outros	(nenhuma — é o destino quando o bot não reconhece a categoria)
Também reconhece em fatura e comprovante
Se o texto parecer nome de loja (PDF, foto ou lançamento), estas regras entram antes das palavras-chave:

Se aparecer	Categoria
Uber Eats	Delivery
Uber	Uber
Posto, Posto Shell, Shell, Ipiranga, gasolina, etanol, diesel, combustível	Combustível
alimentação, comida	Alimentação
almoço	Almoço
Netflix, Spotify	Assinaturas
supermercado, mercadinho, Carrefour, Atacadão, mercado	Mercado
iFood, Rappi	Delivery
farmácia, drogaria	Farmácia
Enel, Cemig	Energia
Amazon	Outros
Autoria
Copyright © 2026 Weslley Fernando Teixeira Chaves (@Weslley-hub).

Este é um projeto de código aberto. Você pode usar, copiar, modificar, estudar e distribuir — inclusive comercialmente — desde que mantenha o aviso de copyright e a licença MIT.

Fork, pull request e commit de outras pessoas são bem-vindos. Quem contribui aparece no histórico do Git; a autoria do Finlar continua sendo de Weslley. Veja o guia de contribuição.