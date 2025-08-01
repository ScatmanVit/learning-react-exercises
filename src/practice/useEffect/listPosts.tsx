import { useEffect, useState, type ChangeEvent } from 'react'
import Post from "../../components/ListPosts";
import axios from 'axios'
import type { Posts } from '../../components/ListPosts';

export default function ListPostsUseEffect() {
   const [posts, setPosts] = useState<Posts[]>([])
   const [loading, setLoading] = useState<boolean>(true)
   const [viewAmount, setViewAmount] = useState<number>()
   const [quant, setQuant] = useState<number>()

   async function getPosts() {
      try{
         const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
         return res
      } catch(err){
         alert("Ocorreu um erro ao listar os posts")
      } 
   }

   useEffect(() => { 
      setLoading(true)
      const wait = setTimeout(() => {
         setLoading(false)
      }, 1000);

      const fetchPosts = async () => {
         const res = await getPosts()
         console.log(res?.data)
         setPosts(res?.data)
      }
      
      fetchPosts()
      return () => clearTimeout(wait)
   }, [quant])

   return (
   <div style={{
         display: "flex",
         flexDirection: "column",
         justifyContent: "center",
         alignItems: "center",
         marginTop: 40
      }}
   >

      <h1> Quantos posts quer ver? </h1>
      <input type="number" value={viewAmount} onChange={
         (e: ChangeEvent<HTMLInputElement>) => 
            setViewAmount(Number(e.target.value))}
      />
      <button onClick={() => setQuant(viewAmount)}>
         Carregar
      </button>
      {loading ? "Carregando..."
       : posts.slice(0, quant).map((post, index) => (
         <Post 
            key={index} 
            title={post.title} 
            body={post.body}/>
       ))}
   </div>
      
   )
}


/* NOTAS: */
/*
   slice(0, 10) corta o array e mostra só os 10 primeiros itens.

   O loading bugava porque eu não colocava ele como true antes do timeout.  
   Então o useEffect rodava e ele já tava false, aí nem parecia que tava carregando.
*/
