# 🐉 HSK 2 — Atlas Interativo Completo
### 汉语水平考试二级 · Aplicativo de Estudo em Português do Brasil

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?logo=github&logoColor=white)](https://pages.github.com)

---

Aplicativo web interativo para estudo completo do **HSK 2** (Exame Oficial de Chinês Mandarim — Nível 2), com **interface em Português do Brasil**, construído como projeto de arquivo único (sem dependências de backend).

---

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| 🃏 **Cartões 3D** | Flashcards com animação flip 3D para cada palavra da lição |
| 💬 **Textos e Diálogos** | Diálogos reais do livro HSK Standard Course 2, com caracteres, pinyin e tradução PT-BR |
| ✍️ **Caligrafia** | Canvas de escrita livre com grade tradicional e caractere guia translúcido |
| 🎯 **Quiz** | Quiz de múltipla escolha com 4 opções, pontuação em tempo real |
| 🔤 **300 Palavras** | Grade completa com todo o vocabulário oficial do HSK 2, filtrável |
| 🔍 **Busca** | Busca em tempo real por caractere, pinyin ou significado |
| ⌨️ **Teclado** | Atalhos: `←→` navegar · `Espaço` virar · `↑↓` lição · `1/2/3` modo |
| 📱 **Responsivo** | Suporte a toque (touch) para escrita em tablets e celulares |

---

## 📚 Conteúdo — 15 Lições Completas

| # | Título (中文) | Tradução (PT-BR) | Palavras |
|---|---|---|---|
| L1 | 九月去北京旅游最好 | Setembro é o melhor mês para visitar Pequim | 12 |
| L2 | 我每天六点起床 | Eu me levanto às seis todos os dias | 14 |
| L3 | 左边那个红色的是我的 | O vermelho à esquerda é meu | 14 |
| L4 | 这个工作是他帮我介绍的 | Foi ele quem me recomendou para este trabalho | 13 |
| L5 | 就买这件吧 | Então compre este | 14 |
| L6 | 你怎么不吃了 | Por que você parou de comer? | 13 |
| L7 | 你家离公司远吗 | Sua casa fica longe da empresa? | 13 |
| L8 | 让我想想再告诉你 | Deixa eu pensar, depois te digo | 10 |
| L9 | 题太多，我没做完 | Havia questões demais, não terminei | 11 |
| L10 | 别找了，手机在桌子上呢 | Para de procurar, o celular está na mesa | 10 |
| L11 | 他比我大三岁 | Ele é três anos mais velho do que eu | 11 |
| L12 | 你穿得太少了 | Você está vestindo roupas de menos | 11 |
| L13 | 门开着呢 | A porta está aberta | 11 |
| L14 | 你看过那个电影吗 | Você já viu aquele filme? | 8 |
| L15 | 新年就要到了 | O Ano Novo está chegando | 8 |

> Cada lição inclui **vocabulário completo**, **pinyin**, **tradução PT-BR** e **diálogos reais** do livro *HSK Standard Course 2* (Beijing Language and Culture University Press).

---

## 📁 Estrutura do Projeto

```
hsk2-atlas-interativo/
│
├── index.html       ← Estrutura HTML da interface
├── style.css        ← Estilos (CSS Variables, animações, layout)
├── index.js         ← Dados das 15 lições + toda a lógica do app
├── package.json     ← Metadados e scripts de desenvolvimento
└── README.md        ← Este arquivo
```

---

## 🚀 Como Usar

### Opção 1 — Direto no navegador (sem instalar nada)
```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/hsk2-atlas-interativo.git

# Entre na pasta
cd hsk2-atlas-interativo

# Abra o arquivo no navegador
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

### Opção 2 — Servidor local com npm
```bash
# Clone e entre na pasta
git clone https://github.com/SEU_USUARIO/hsk2-atlas-interativo.git
cd hsk2-atlas-interativo

# Instale as dependências de dev
npm install

# Inicie o servidor local (abre em http://localhost:3000)
npm run dev
```

### Opção 3 — GitHub Pages (deploy gratuito)
1. Faça fork ou push deste repositório para sua conta GitHub
2. Vá em **Settings → Pages**
3. Em *Branch*, selecione `main` e pasta `/ (root)`
4. Clique **Save** — seu app estará em:
   ```
   https://SEU_USUARIO.github.io/hsk2-atlas-interativo
   ```

---

## ⌨️ Atalhos de Teclado

| Tecla | Ação |
|---|---|
| `←` / `h` | Palavra anterior |
| `→` / `l` | Próxima palavra |
| `Espaço` | Virar cartão |
| `↑` | Lição anterior |
| `↓` | Próxima lição |
| `1` | Modo Cartões |
| `2` | Modo Quiz |
| `3` | Modo Escrita |

---

## 🛠️ Tecnologias

- **HTML5** — estrutura semântica
- **CSS3** — variáveis, gradientes, `perspective`, animações `@keyframes`
- **JavaScript ES6+** — puro, sem frameworks
- **Canvas API** — fundo animado de partículas e quadro de caligrafia
- **Google Fonts** — Noto Serif SC, Noto Sans SC, Inter
- **CSS 3D Transforms** — efeito flip dos cartões

Nenhuma dependência de runtime. Funciona 100% offline após o primeiro carregamento das fontes.

---

## 📖 Fonte dos Dados

O vocabulário e os diálogos são baseados no livro oficial:

> **HSK Standard Course 2**
> Autor principal: Jiang Liping
> Editora: Beijing Language and Culture University Press (北京语言大学出版社)
> Publicado em colaboração com o Instituto Confúcio / Hanban

As traduções para o Português do Brasil são de autoria própria do projeto.

---

## 🤝 Contribuindo

Pull requests são bem-vindos! Para mudanças maiores, abra uma *issue* primeiro para discutir o que você gostaria de mudar.

1. Fork o projeto
2. Crie sua branch: `git checkout -b feature/minha-feature`
3. Commit: `git commit -m 'Adiciona minha feature'`
4. Push: `git push origin feature/minha-feature`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 💡 Dicas de Estudo

- Use o modo **Cartões** para revisão rápida diária
- Leia os **Textos e Diálogos** para ver as palavras em contexto real
- Pratique **Escrita** para memorizar os traços dos caracteres
- Use o **Quiz** para testar seu progresso
- A aba **300** permite revisar todo o vocabulário do HSK 2 de uma vez

---

*Feito com ❤️ para estudantes de chinês mandarim de língua portuguesa.*
