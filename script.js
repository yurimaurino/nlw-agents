const apiKeyInput = document.getElementById('apiKey')
const gameSelect = document.getElementById('gameSelect')
const questionInput = document.getElementById('questionInput')
const askButton = document.getElementById('askButton')
const aiResponse = document.getElementById('aiResponse')
const form = document.getElementById('form')

const markDownToHtml = (text) => {
  const converter = new showdown.Converter()
  return converter.makeHtml(text)
}

const perguntarIA = async (question, game, apiKey) => {
  const model = 'gemini-2.5-flash'
  const geminiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`

  const pergunta = `
    ## Especialidade
      Você é um especialista assistente de meta para o jogo ${game}
    ## Tarefa
      Você deve responder as perguntas do usuário com base no seu conhecimento do jogo, estratégias, builds e dicas.
    ## Regras
      - Se você não sabe a resposta, responda com 'Não sei' e não tente inventar resposta.
      - Se a pergunta não está relacionada ao jogo, responda com 'Essa pergunta não está relacionada ao jogo.'
      - Considere a data atual ${new Date().toLocaleDateString()}
      - Faça pesquisas atualizadas sobre o patch atual, baseado na data atual, para uma resposta coerente.
      - Nunca responda itens que você não tenha certeza de que existe no patch atual.
    ## Resposta
      - Economize na resposta, seja direto e responda no máximo 500 caracteres.
      - Responda em markdown
      - Não precisa fazer nenhuma saudação ou despedida, apenas responda o que o usuário está querendo.
    ## Exemplo de resposta
      Pergunta do usuário: Melhor build para rengar jungle
      resposta: A build mais atual é: \n\n **itens:** \n\n coloque os itens aqui. \n\n**Runas:**\n\nexemplo de Runas

      ---

      Aqui está a pergunta do usuário ${question}
  `

  // formato da API 
  const contents = [{
    role: 'user',
    parts: [{
      text: pergunta
    }]
  }]

  const tools = [{
    google_search: {}
  }]

  // Chamada API
  const response = await fetch(geminiURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'aplication/json'
    },
    body: JSON.stringify({
      contents,
      tools
    })
  })
  
  const data = await response.json()
  return data.candidates[0].content.parts[0].text
  
}

const sendForm = async (event) => {
  event.preventDefault()
  const apiKey = apiKeyInput.value
  const game = gameSelect.value
  const question = questionInput.value

  if (apiKey == "" || game == "" || question == "") {
    alert('Por favor, preencha todos os campos')
    return 
  }

  askButton.disabled = true
  askButton.textContent = 'Perguntando...'
  askButton.classList.add('loading')

  try {
    // perguntar para a IA
    const text = await perguntarIA(question, game, apiKey)
    aiResponse.querySelector('.response-content').innerHTML = markDownToHtml(text)
    aiResponse.classList.remove('hidden')
  } catch(error) {
    console.log("Erro...", error)
  } finally {
    askButton.disabled = false
    askButton.textContent = "Perguntar"
    askButton.classList.remove('loading')
  }

}
form.addEventListener('submit', sendForm)