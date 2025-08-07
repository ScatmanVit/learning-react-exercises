import { useEffect, useState } from 'react'
import axios from 'axios'

export default function SearchUser() {
   type User = {
      id: number,
      name: string,
      username: string,
      email: string,
      address: {
         street: string,
         suite: string,
         city: string,
         zipcode: string,
         geo: {
            lat: string,
            lng: string
         }
      },
      phone: string,
      website: string,
      company: {
         name: string,
         catchPhrase: string,
         bs: string
      }
   }

   const [user, setUser] = useState<User | null>(null)
   const [loading, setLoading] = useState<boolean>(false)
   const [idToSearch, setIdToSearch] = useState<string>("")
   const [value, setValue] = useState<string>("")

   async function getUser(id: string): Promise<User | null> {
      if (!id) {
         console.log("Sem ID para buscar")
         return null
      }
      try {
         const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${Number(id)}`)
         return res.data
      } catch (err) {
         console.error("Erro ao buscar usuário:", err)
         return null
      }
   }

   useEffect(() => {
      if (!idToSearch) return

      const timer = setTimeout(async () => {
         setLoading(true)
         const user = await getUser(idToSearch) // pausa o fluxo até a resposta chegar.
         setUser(user)
         setLoading(false)
      }, 500)
      console.log("entrou")
      return () => clearTimeout(timer)
   }, [idToSearch])

   return (
      <div style={{
         display: "flex",
         flexDirection: "column",
         justifyContent: "center",
         alignItems: "center",
         marginTop: 40
      }}>
         <h3>Pesquise por ID, começa com 1 e vai até 10</h3>
         <h1>Digite um ID</h1>

         <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
         />
         <button onClick={() => {
               if (value) {
                  setIdToSearch(value)
                  setValue("")
               }
            }}
         >
            Pesquisar
         </button>

         {loading && <p>Carregando...</p>}
         {!loading && idToSearch && (
            user
               ? <pre>{JSON.stringify(user, null, 2)}</pre>
               : <p>Usuário não encontrado</p>
         )}
      </div>
   )
}

/* foram usados dois estados para o input (value, idToSearch), pra que o componente não rendenize sempre que digitar,
e também pra poder controlar a requisição

value = pra salvar o texto do input no idToSerch pra pesquisa,
idToSearch = pra ser usado como dependencia no useEffect e evitar re-rendenização
   além de ser usado para condicionar a requisição na api
*/

