export type Posts = {
   title: string,
   body: string
}

export default function Post({title, body}: Posts) {
   return (
      <div style={{flexDirection: "column", display: "flex", alignItems: "center", justifyContent: "center"}}>
         <h1>{title}</h1>
         <p>{body}</p>
      </div>
   )
}