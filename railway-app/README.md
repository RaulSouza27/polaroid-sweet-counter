# Polaroid & Contadores ♡

Site fofinho com upload de foto estilo polaroid (levemente torta) e dois contadores editáveis. Backend simples em Node.js + Express, pronto para deploy no Railway.

## Estrutura

```
.
├── package.json
├── server.js
└── public/
    ├── index.html
    ├── style.css
    └── script.js
```

## Rodar localmente

```bash
npm install
npm start
```

Depois abra <http://localhost:3000>.

## Deploy no Railway

### Opção 1 — via GitHub (recomendado)

1. Suba este projeto em um repositório no GitHub.
2. Acesse <https://railway.app> → **New Project** → **Deploy from GitHub repo**.
3. Selecione o repositório. O Railway detecta Node.js automaticamente e roda `npm install` + `npm start`.
4. Em **Settings → Networking**, clique em **Generate Domain** para expor a URL pública.

Não é necessário configurar variáveis de ambiente — o Railway injeta `PORT` automaticamente e o `server.js` já usa `process.env.PORT`.

### Opção 2 — via Railway CLI

```bash
npm i -g @railway/cli
railway login
railway init
railway up
railway domain   # gera o domínio público
```

Pronto! 💕
