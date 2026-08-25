# Eduarda Lopes Films

Site institucional da Eduarda Lopes Films, produtora audiovisual e operação de gestão digital para marcas que querem ganhar presença, ritmo e movimento. O projeto combina direção visual editorial, portfólio fotográfico, vídeos de trabalhos, formulário de orçamento e contatos diretos.

## Código-fonte

A aplicação editável fica em `client/src/`. A página principal está em `client/src/pages/Home.tsx` e o sistema visual está em `client/src/index.css`. As imagens e os vídeos de portfólio ficam em `assets/`; o link `client/public/assets` aponta para essa pasta durante o build, mantendo uma única cópia das mídias e os caminhos públicos `/assets/`. A assinatura horizontal oficial do manual está em `assets/eduarda-lopes-films-logo-official.png` e é usada no cabeçalho, na chamada de marca e no rodapé. A identidade visual usa a paleta do manual, com preto `#13110F`, marrom sofisticado, dourado champagne `#E3CCB6` e bege `#FAF0E3`.

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

O formulário de orçamento atualmente valida os campos no navegador e confirma o envio visualmente. Ele ainda não encaminha os dados para uma caixa de e-mail ou CRM; essa integração pode ser adicionada posteriormente com um serviço de formulários ou backend seguro. Os canais públicos foram reduzidos a Instagram, WhatsApp e `lopeseduarda.mkt@gmail.com`. O botão flutuante usa o WhatsApp `+55 51 99016-5073`, com símbolo circular em champagne e marrom, seguindo a identidade visual.

## Mídias e painel

Os vídeos locais do portfólio foram remuxados sem trilhas de áudio, preservando o stream de imagem. Os arquivos que carregavam referências a clientes foram renomeados para títulos neutros, como `filme-marca.mp4`, `projeto-imobiliario.mp4` e `campanha-residencial.mp4`. Não foram encontrados arquivos byte a byte duplicados entre os ativos originais. A galeria “Em movimento” exibe os 16 vídeos uma única vez em uma faixa horizontal com navegação pelas setas anterior/próximo e rolagem lateral.

O site publicado no GitHub Pages continua sendo uma aplicação estática. Um painel persistente para adicionar vídeos por URL do Instagram exige autenticação, armazenamento de dados e uma API; editar apenas no navegador com `localStorage` não atualizaria o portfólio para os visitantes. A próxima etapa recomendada é criar um painel seguro separado ou migrar a publicação para uma aplicação full-stack, mantendo o site público com a mesma identidade visual.

## Recuperação

A versão publicada anterior foi preservada na branch `recovery/published-state-2026-08-25`. Essa branch deve ser mantida como ponto de retorno enquanto novas alterações forem feitas.
