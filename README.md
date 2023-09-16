# CLI-Solutions
Esse repositório contém uma série soluções operadas por linhas de comando no terminal.

## github-repositories-seeker
Essa solução permite consultar o nome dos repositórios do github, criados entre duas data, usando a API do próprio github.<br/>
Cada consulta retorna os 100 nomes por página.

```
  Como iniciar o processo.
  node git-repositories-seeker.js --initial_date YYYY-MM-DD --last_date YYYY-MM-DD --page n
```
## image-batch-to-jpeg
Essa solução permite converter todas as images no formato PNG, GIF, WebP, AVIF, SVG e TIFF para JPEG.

```
  Como iniciar o processo.
  node image-batch-to-jpeg.js -dir_in (Caminho do diretório das images.) --dir_out (Caminho onde a pasta com as imagens jpeg será criada. Esse atributo é opcional.)
```
## cli-to-do
Essa solução permite criar lista de tarefas para usuários independentes, os usuários e tarefas são armazenados no banco de dados postgresql.