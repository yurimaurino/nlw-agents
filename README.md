# Assistente de Meta - eSports

Assistente inteligente que usa a API do Google Gemini para fornecer estratégias e dicas para jogos de eSports.

## Sobre o Projeto

Aplicação web que oferece conselhos especializados para:
- Valorant
- League of Legends
- Counter Strike 2

O assistente utiliza a API do Google Gemini com busca na web para fornecer informações atualizadas sobre patches, meta atual e estratégias dos jogos.

## Tecnologias Utilizadas

- **HTML5** - Estrutura da página
- **CSS3** - Estilização e animações
- **JavaScript** - Lógica da aplicação
- **Google Gemini API** - Inteligência artificial
- **Showdown.js** - Conversão de Markdown para HTML

## Estrutura do Projeto

```
agents/
├── assets/
│   ├── bg.jpg          # Imagem de fundo
│   └── logo.png        # Logo do projeto
├── styles/
│   └── style.css       # Estilos da aplicação
├── index.html          # Página principal
├── script.js           # Lógica JavaScript
└── README.md           # Este arquivo
```

## Configuração

### Pré-requisitos
- Navegador web moderno
- API Key do Google Gemini

### Como obter a API Key
1. Acesse [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Faça login com sua conta Google
3. Crie uma nova API Key
4. Copie a chave para usar no projeto

### Como executar
1. Clone o repositório
2. Abra o arquivo `index.html` no navegador
3. Insira sua API Key do Google Gemini
4. Selecione o jogo desejado
5. Faça sua pergunta sobre estratégias, builds ou dicas

### Exemplos de uso
- "Melhor build para Rengar jungle"
- "Estratégias para Mirage no CS2"
- "Agentes mais fortes no patch atual do Valorant" 