import { useState, type ChangeEvent } from 'react'

export default function addWordList() {

   const [word, setWord] = useState<string>("")
   const [listWords, setListWords] = useState<string[]>([])

   function getWord(e: ChangeEvent<HTMLInputElement>) {
      setWord(e.target.value)
   }
   
   function addListWord() {
      setListWords((prev) => (
         [...prev, word]
      ))
   }

   return(
      <div style={{
         display: "flex",
         flexDirection: "column",
         justifyContent: "center",
         alignItems: "center"
      }}>
         <h1>Adcione uma palavra a lista</h1>
         <input 
            type="text"
            onChange={getWord}
         />
         <button onClick={addListWord}>Adcione</button><br />
         {listWords.map((listWord, index) => (
            <ul key={index}>
               <li>{listWord}</li>
            </ul>
         ))}

      </div>
   )
}