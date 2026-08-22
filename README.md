# Eduarda Lopes Films — exportação estática

Esta pasta contém a versão estática do site institucional da Eduarda Lopes Films, pronta para ser enviada a um repositório GitHub.

A página principal está obrigatoriamente no arquivo `index.html` localizado na raiz. Os arquivos compilados ficam em `assets/build/` e as imagens locais ficam em `assets/`.

## Publicação pelo GitHub Pages

Crie ou abra um repositório no GitHub e envie todos os arquivos desta pasta, mantendo exatamente esta estrutura. O arquivo `index.html` deve permanecer na raiz do repositório.

Depois, abra **Settings → Pages** no repositório. Em **Build and deployment**, escolha **Deploy from a branch**, selecione a branch principal — normalmente `main` — e a pasta `/ (root)`. Salve. O GitHub Pages publicará o site usando o `index.html` da raiz.

## Atualização do site

Para atualizar o site, gere uma nova exportação a partir do projeto original e substitua no repositório os arquivos `index.html`, `assets/build/` e `assets/`. As imagens que você desejar manter podem continuar na pasta `assets/`.

Esta exportação não inclui painel administrativo, banco de dados ou dependências do Manus. O formulário presente no layout é apenas visual nesta versão estática e precisará ser conectado a um serviço de formulários ou backend separado para receber mensagens automaticamente.
