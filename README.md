# Portfólio — Weslley Teixeira

Site pessoal em [Hugo](https://gohugo.io/) + tema [hugo-coder](https://github.com/luizdepra/hugo-coder).  
Conteúdo em **PT-BR** (padrão) e **EN**.

## Pré-requisitos

- [Git](https://git-scm.com/)
- [Hugo Extended](https://gohugo.io/installation/) (versão recente)

Se o Hugo não estiver no PATH, use o binário local `.tools/hugo.exe` (já inclusível no projeto após o setup).

## Rodar localmente

```bash
git submodule update --init --recursive
hugo server -D
```

Abra [http://localhost:1313/](http://localhost:1313/).  
Inglês: [http://localhost:1313/en/](http://localhost:1313/en/).

Build de produção:

```bash
hugo --minify
```

## Estrutura

```
content/          # Páginas (about, resume, projects, contact) em pt-br e en
data/
  experience.yaml # Experiências e formação (timeline)
  projects.yaml   # Projetos (cards)
layouts/          # Partials próprios (timeline, project-card, CTAs)
assets/scss/      # custom.scss — variáveis e glassmorphism
static/cv/        # PDFs do currículo
static/images/    # Avatar, favicon, OG
i18n/             # Textos de interface
themes/hugo-coder # Tema (submódulo git)
```

## Como adicionar experiência

Edite `data/experience.yaml`:

1. Nova empresa em `companies` **ou** novo cargo em `roles` da empresa existente.
2. Preencha `title`, `start`, `end`/`current`, `summary`, `responsibilities` e `stack` em `pt` e `en`.
3. Salve — a timeline atualiza sozinha (sem mudar HTML).

## Como adicionar projeto

Edite `data/projects.yaml`:

1. Novo item em `items` com `name`, `description`, `status` (`wip` | `done` | `paused`), `tags` e `links`.
2. Deixe `links.repo` / `demo` / `store` vazios se não houver URL — o botão não aparece.
3. Salve — o card aparece automaticamente.

## Contato

- E-mail: weslleyfernando71609@gmail.com
- LinkedIn: https://www.linkedin.com/in/weslley-fernando
- GitHub: https://github.com/Weslley-hub

## Licença

MIT
