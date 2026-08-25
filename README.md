# Eduarda Lopes Films

Site institucional da Eduarda Lopes Films, produtora audiovisual e operação de gestão digital para marcas que querem ganhar presença, ritmo e movimento. O projeto combina direção visual editorial, portfólio fotográfico, vídeos de trabalhos, formulário de orçamento e contatos diretos.

## Código-fonte

A aplicação editável fica em `client/src/`. A página principal está em `client/src/pages/Home.tsx` e o sistema visual está em `client/src/index.css`. As imagens e os vídeos de portfólio ficam em `assets/` e são importados pelo Vite durante o build, sem depender do proxy de armazenamento do ambiente Manus.

## Desenvolvimento local

Use Node.js e pnpm. Depois de clonar o repositório, execute:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

A aplicação estará disponível em `http://localhost:3000/`. Para validar o projeto antes de publicar, execute:

```bash
pnpm check
pnpm build
```

## Publicação no GitHub Pages

O repositório já está preparado para o GitHub Pages. A branch `main` publica a raiz do projeto, o arquivo `CNAME` aponta para `eduardalopesfilms.com.br` e `.nojekyll` evita o processamento desnecessário pelo Jekyll. A versão estática publicada é gerada a partir de `dist/public/`.

Para atualizar a publicação manualmente após alterar o código-fonte, gere o build e copie o conteúdo de `dist/public/` para a raiz do repositório, preservando `CNAME`, `.nojekyll`, `README.md` e os arquivos de configuração do projeto. O `index.html` deve permanecer na raiz; o `404.html` deve acompanhar o mesmo build para que as rotas e âncoras funcionem quando o Pages retornar uma página não encontrada.

O domínio publicado é [eduardalopesfilms.com.br](https://eduardalopesfilms.com.br). O GitHub Pages está ativo na branch `main` e o certificado HTTPS do domínio está aprovado.

## Contato e formulário

O formulário de orçamento atualmente valida os campos no navegador e confirma o envio visualmente. Ele ainda não encaminha os dados para uma caixa de e-mail ou CRM; essa integração pode ser adicionada posteriormente com um serviço de formulários ou backend seguro. Os links de Instagram, WhatsApp, e-mail, YouTube e LinkedIn ficam no rodapé e na seção de contato.

## Recuperação

A versão publicada anterior foi preservada na branch `recovery/published-state-2026-08-25`. Essa branch deve ser mantida como ponto de retorno enquanto novas alterações forem feitas.
