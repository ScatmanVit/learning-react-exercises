// 🧪 Exercício 1 – Buscar posts (API JSONPlaceholder)
// Foco: useEffect para requisições assíncronas

// ✅ Crie um componente <PostList />
// ✅ Ao carregar a página, ele deve fazer uma requisição para https://jsonplaceholder.typicode.com/posts
// ✅ Salve os posts com useState
// ✅ Mostre os títulos dos 10 primeiros posts

// 🧩 Extras:
// ✅ Adicione um botão para buscar os próximos 10 (paginação falsa)
// ✅ Mostre um spinner (Carregando...) enquanto os dados não chegam)
// ------ FEITO -------


// 🕒 Exercício 2 – Timer com Start/Pause/Reset
// Foco: useEffect com setInterval e limpeza de efeitos (clearInterval)

// ✅ Crie um cronômetro simples:
// ✅ Um número que começa em 0 e aumenta a cada segundo
// ✅ Botões: Iniciar, Pausar, Resetar
// ✅ Use useEffect para configurar e limpar o setInterval

// 🧩 Extras:
// ✅ Mostre o tempo no formato mm:ss



// 💡 Exercício 3 – Atualizar título da aba do navegador
// Foco: useEffect como side effect

// ✅ Crie um contador (useState)
// ✅ Sempre que o valor mudar, atualize o título da aba com:
// ✅ document.title = "Contador: X"



// 🔍 Exercício 4 – Buscar usuário por ID (JSONPlaceholder)
// Foco: useEffect dependente de estado externo

// ✅ Crie um campo <input /> para digitar um número de ID
// ✅ Quando o usuário parar de digitar (use debounce ou botão de buscar), faça uma requisição para:
// ✅ https://jsonplaceholder.typicode.com/users/ID
// ✅ Mostre o nome, email e cidade

// 🧩 Extras:
// ✅ Se o ID não existir, mostre "Usuário não encontrado"



// 🎧 Exercício 5 – Adicionar/remover listener do teclado
// Foco: Limpeza manual de efeitos (event listeners)

// ✅ Crie um componente que ouve a tecla pressionada pelo usuário (keydown)
// ✅ Toda vez que ele pressionar uma tecla, mostre ela na tela
// ✅ Use addEventListener e removeEventListener corretamente dentro do useEffect

// 🧩 Extras:
// ✅ Mostre também o código da tecla
