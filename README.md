# Convite — Passagem de Comando CPOR/SP

Convite interativo em uma página só (`index.html` + imagens em `assets/`).

1. **Envelope**: clicar no selo de cera (ou em qualquer parte do envelope) abre as abas a partir do selo e o cartão sai de dentro.
2. **Frente (Antigos Comandantes)**: botões *Voltar* (fecha o envelope) e *Ver o convite* (vira a folha).
3. **Verso (Convite)**: botão *Voltar* (vira a folha de volta).

Os botões são estáticos; só a troca de página é animada.

No verso, o botão **Confirmar presença** (no lugar do antigo QR code) abre o formulário. Ele leva ao Google Forms de confirmação; para trocar o link, edite o `href` da classe `rsvp` no `index.html` e gere as outras capas de novo.

O cartão aberto pode ser ampliado com os gestos de sempre: pinça ou dois toques no celular; Ctrl + rolagem, pinça no trackpad, Ctrl e + ou duplo clique no computador. Ampliado, dá para arrastar. Ao virar ou fechar, ele volta ao tamanho normal.

## Publicar
- **GitHub Pages**: Settings → Pages → Branch `main`, pasta `/ (root)`.
- **Netlify**: arraste a pasta do repositório ou conecte o repositório (sem build).

Para trocar uma arte, substitua o arquivo em `assets/` mantendo o nome e a proporção 1240 × 1748.

## Capas
Todas ficam lado a lado em `opcoes.html`. Nas opções 1 a 3 só a capa muda; as opções 4 a 7 têm capa, frente e verso próprios (`assets/opcao-N/`).
- `index.html` — capa 1: brasão ao centro, selo de cera embaixo
- `capa-2.html` — capa 2: brasão como selo
- `capa-3.html` — capa 3: selo de cera no alto, brasão embaixo
- `opcao-4.html` — artes 11, 12, 13: brasão como selo, verso estampado
- `opcao-5.html` — artes 14, 15, 16: selo de cera no alto, brasão embaixo, verso estampado
- `opcao-6.html` — artes 17, 18, 19: brasão como selo, verso com foto do quartel
- `opcao-7.html` — artes 20, 21, 22: selo de cera no alto, brasão embaixo, verso com foto do quartel

Cada página indica onde fica o selo (o anel de foco do teclado) pelas variáveis `--selo-x`, `--selo-y` e `--selo-w` no `style` do `#convite`.
Se mudar algo no `index.html`, copie para `capa-2.html` e `capa-3.html` trocando só a imagem da capa (`assets/convite-1b.jpg` / `assets/convite-1c.jpg`) e esse `style`.
