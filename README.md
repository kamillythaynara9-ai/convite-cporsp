# Convite — Passagem de Comando CPOR/SP

Convite interativo em uma página só (`index.html` + imagens em `assets/`).

1. **Envelope**: clicar no selo de cera (ou em qualquer parte do envelope) abre as abas a partir do selo e o cartão sai de dentro.
2. **Frente (Antigos Comandantes)**: botões *Voltar* (fecha o envelope) e *Ver o convite* (vira a folha).
3. **Verso (Convite)**: botão *Voltar* (vira a folha de volta).

Os botões são estáticos; só a troca de página é animada.

O cartão aberto pode ser ampliado com os gestos de sempre: pinça ou dois toques no celular; Ctrl + rolagem, pinça no trackpad, Ctrl e + ou duplo clique no computador. Ampliado, dá para arrastar. Ao virar ou fechar, ele volta ao tamanho normal.

## Publicar
- **GitHub Pages**: Settings → Pages → Branch `main`, pasta `/ (root)`.
- **Netlify**: arraste a pasta do repositório ou conecte o repositório (sem build).

Para trocar uma arte, substitua o arquivo em `assets/` mantendo o nome e a proporção 1240 × 1748.

## Capas alternativas
As três ficam lado a lado em `opcoes.html`.

Só a capa (envelope) muda; o resto é igual.
- `index.html` — capa original
- `capa-marca-dagua.html` — brasão colorido do CPOR/SP, translúcido como marca-d'água, grande e centralizado
- `capa-foto.html` — foto aérea do CPOR/SP como uma fotografia sobre o papel, ocupando o espaço abaixo do selo

Se mudar algo no `index.html`, gere as outras duas de novo trocando `assets/convite-1.jpg` por `assets/convite-1-marca.jpg` ou `assets/convite-1-foto.jpg`.
