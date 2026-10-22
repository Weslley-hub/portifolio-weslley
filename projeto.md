Portfólio pessoal — Tarefas de desenvolvimento (Parte 1)
5 de out. de 2026 · @Weslley
Visão geral
A Parte 1 entrega o portfólio rodando localmente, completo e revisado, pronto para publicar. A referência é o anetto.dev, com as melhorias anotadas na análise.
• Stack: Hugo (extended) + tema hugo-coder como submódulo git. Componentes próprios (timeline e cards) em layouts/ e dados em data/*.yaml.
• Páginas: Home, Sobre, Currículo (timeline), Projetos e Contato, mais links externos para Blog e GitHub.
• Idiomas: PT-BR (padrão) e EN.
• Fica para a Parte 2: domínio, deploy (GitHub Actions + Pages), HTTPS, analytics e Search Console.
Cada tarefa abaixo tem um critério de aceite curto depois do traço.
Fase 1 — Setup do projeto
[ ] 1.1 Instalar ferramentas: Git, Hugo extended (versão atual) e VS Code com as extensões Hugo e YAML — hugo version mostra "extended".
[ ] 1.2 Criar repositório no GitHub: nome <seu-usuario>.github.io (ou portfolio), com README e licença MIT — repo clonado localmente.
[ ] 1.3 Gerar o site: hugo new site . --force na raiz do repo — pastas content/, layouts/, static/ e data/ criadas.
[ ] 1.4 Adicionar o tema: git submodule add https://github.com/luizdepra/hugo-coder themes/hugo-coder — o tema aparece em .gitmodules.
[ ] 1.5 Configurar o hugo.toml: baseURL provisório, título, autor, theme = "hugo-coder", menu principal e colorScheme = "auto" — o site abre com o tema aplicado.
[ ] 1.6 Criar o .gitignore: public/, resources/_gen/, .hugo_build.lock e .DS_Store — o build não entra no git.
[ ] 1.7 Rodar localmente: hugo server -D sobe em localhost:1313 com live reload — a Home abre sem erros no terminal.
[ ] 1.8 Definir a estrutura de pastas: content/{about,resume,projects,contact}, data/{experience,projects}.yaml, assets/scss/custom.scss e static/images/ — estrutura commitada.
[ ] 1.9 Fazer o primeiro commit e criar a branch de trabalho: main protegida e trabalho em feat/* — primeiro PR aberto.
Fase 2 — Conteúdo
O conteúdo vem antes do código das páginas: sem texto real, o layout é testado com placeholder e quebra depois.
[ ] 2.1 Escrever o posicionamento: uma frase de proposta de valor e o cargo atual — cabe em 2 linhas no celular.
[ ] 2.2 Escrever o Sobre: quem você é, origem e cidade, idiomas, trajetória e stack — de 250 a 400 palavras, em PT e EN.
[ ] 2.3 Separar as fotos: avatar quadrado (800×800 px) e uma foto pessoal opcional, exportadas em WebP — cada uma com menos de 150 KB.
[ ] 2.4 Montar a timeline profissional: em data/experience.yaml, com empresa, logo, cargos (com datas), resumo, responsabilidades, stack e link por item — todas as experiências e a formação preenchidas.
[ ] 2.5 Listar os projetos: em data/projects.yaml, com nome, ícone, status (WIP/Concluído), descrição, tags e links (repo, demo, loja) — mínimo de 3 projetos, todos os links testados.
[ ] 2.6 Exportar o CV em PDF: salvo em static/cv/ (PT e EN) — link direto, sem depender de drive externo.
[ ] 2.7 Reunir contatos e redes: e-mail, LinkedIn, GitHub e outras redes, mais o link de agendamento (ex.: Cal.com) — todas as URLs conferidas.
[ ] 2.8 Revisar os textos: ortografia em PT e EN (corretor + leitura em voz alta) — nenhum erro do tipo "a email" ou "it's main".
Fase 3 — Páginas
Home
[ ] 3.1 Montar o hero: avatar, nome, cargo com link da empresa e frase de valor (via params do hugo.toml) — tudo visível sem rolar a página, em 375 px e em 1440 px.
[ ] 3.2 Adicionar os botões de ação: "Ver currículo" e "Fale comigo", sobrescrevendo layouts/partials/home/ — os dois botões levam às páginas certas.
[ ] 3.3 Configurar os ícones sociais: via [[params.social]], com aria-label correto por rede — o leitor de tela anuncia cada rede pelo nome.
Sobre
[ ] 3.4 Criar content/about/index.md: usando o texto da tarefa 2.2, com subtítulos (Perfil, Stack, Idiomas) e foto com legenda via shortcode — a página renderiza nos dois idiomas.
Currículo (timeline)
[ ] 3.5 Criar o partial timeline.html: lê data/experience.yaml com linha vertical, marcadores, datas à esquerda e cards à direita — adicionar um item no YAML aparece sem mexer no HTML.
[ ] 3.6 Calcular a duração de cada fase: "X anos Y meses", gerada a partir das datas (template ou JS leve) — "Atual" para o emprego presente.
[ ] 3.7 Agrupar cargos por empresa: promoções listadas dentro do mesmo card, do cargo mais recente ao mais antigo — a progressão fica clara.
[ ] 3.8 Fazer o card expansível: detalhes (responsabilidades e stack) em <details>, no lugar do "+info" — funciona por teclado.
[ ] 3.9 Adicionar os links no topo: "Baixar CV (PDF)" e LinkedIn — o download funciona offline no hugo server.
[ ] 3.10 Adaptar ao celular: a timeline vira uma coluna única abaixo de 640 px — sem rolagem horizontal.
Projetos
[ ] 3.11 Criar o partial project-card.html: lê data/projects.yaml e mostra ícone, título, badge de status, descrição, tags e botões — botão sem URL não aparece (nada de link #).
[ ] 3.12 Colorir os badges de status: WIP em laranja, Concluído em verde, Pausado em cinza — contraste AA nos dois temas.
[ ] 3.13 Embutir o gráfico de contribuições do GitHub: imagem SVG ou API pública, com fallback — se falhar, a página não quebra.
[ ] 3.14 Tratar imagens ausentes: ícone padrão quando o projeto não tem imagem — nenhuma imagem quebrada.
Contato
[ ] 3.15 Criar content/contact/index.md: e-mail (mailto), link real de agendamento e redes — todos os links testados.
Menu e rodapé
[ ] 3.16 Configurar o menu: Início, Sobre, Currículo, Projetos, Blog (só se tiver posts) e Contato; links externos com ícone — a página atual fica destacada.
[ ] 3.17 Configurar o rodapé: ano automático (now.Year) e crédito ao Hugo e ao Coder — o ano muda sozinho.
[ ] 3.18 Criar a página 404: personalizada, com link para a Home — aparece ao abrir uma URL inexistente.
Fase 4 — Visual e idiomas
[ ] 4.1 Definir as variáveis de design: cores (fundo, texto, acento, bordas), raios e espaçamentos em CSS vars no custom.scss, para claro e escuro — nenhuma cor fixa fora das variáveis.
[ ] 4.2 Escolher a tipografia: fonte do sistema ou uma web font (ex.: Inter), com font-display: swap e mono para trechos de stack — texto legível a partir de 16 px.
[ ] 4.3 Aplicar o estilo dos cards: glassmorphism (blur + borda translúcida) nos cards de projeto e da timeline — legível nos dois temas.
[ ] 4.4 Configurar o tema claro/escuro: segue o sistema por padrão, com o toggle do Coder — a escolha persiste entre páginas.
[ ] 4.5 Adicionar ícones: Font Awesome do tema, ou SVG próprio para os ícones que o Windows não renderiza (ex.: logo da Apple) — nenhum quadrado vazio no Windows.
[ ] 4.6 Ativar o multilíngue no Hugo: [languages.pt] e [languages.en], arquivos index.pt.md e index.en.md, e i18n/*.yaml para textos de interface — URLs / e /en/ funcionando.
[ ] 4.7 Adicionar o seletor de idioma: no menu, levando à mesma página no outro idioma — trocar de idioma no Currículo mantém o Currículo.
[ ] 4.8 Traduzir os dados: campos pt/en em experience.yaml e projects.yaml — nenhum texto misturado entre idiomas.
[ ] 4.9 Adicionar microinterações: hover nos cards e transições de 150–200 ms, respeitando prefers-reduced-motion — sem animação para quem desativou.
Fase 5 — Qualidade
[ ] 5.1 Configurar SEO básico: title e description por página, Open Graph/Twitter Card com imagem 1200×630, hreflang PT/EN e sitemap.xml + robots.txt (nativos do Hugo) — o link compartilhado no WhatsApp/LinkedIn mostra o preview certo.
[ ] 5.2 Adicionar dados estruturados: JSON-LD Person (nome, cargo, empresa, redes) — validado no Rich Results Test.
[ ] 5.3 Criar o favicon e o manifest: favicon SVG, apple-touch-icon e site.webmanifest — o ícone aparece na aba e no iOS.
[ ] 5.4 Garantir acessibilidade: HTML semântico, alt em todas as imagens, foco visível, contraste AA e navegação por teclado — Lighthouse Acessibilidade ≥ 95.
[ ] 5.5 Otimizar a performance: imagens via Hugo Image Processing (WebP, srcset, lazy), CSS minificado (hugo --minify) e nenhum JS desnecessário — Lighthouse Performance ≥ 95 no mobile.
[ ] 5.6 Testar responsividade: 375, 768, 1024 e 1440 px, no Chrome, Safari e Firefox — nada cortado nem sobreposto.
[ ] 5.7 Checar links: rodar um link checker (ex.: lychee ou htmltest) no public/ — zero links quebrados.
[ ] 5.8 Validar o build: hugo --minify sem warnings e HTML validado no W3C — build limpo.
[ ] 5.9 Fazer a revisão final: reler todas as páginas nos dois idiomas e nos dois temas, de preferência com outra pessoa — lista de ajustes zerada.
[ ] 5.10 Documentar o README: como rodar localmente, como adicionar experiência/projeto no YAML e a estrutura de pastas — alguém novo consegue rodar em 5 minutos.
Critérios de pronto da Parte 1
A Parte 1 termina quando todos os itens abaixo são verdade. Aí seguimos para a publicação.
[ ] As 5 páginas, a 404 e o seletor de idioma funcionam em hugo server, em PT e EN.
[ ] Experiências e projetos são editados só pelos arquivos YAML.
[ ] Lighthouse ≥ 95 em Performance, Acessibilidade, Boas práticas e SEO.
[ ] Zero links quebrados, zero imagens quebradas e nenhum erro de digitação conhecido.
[ ] Código na main, com README atualizado.