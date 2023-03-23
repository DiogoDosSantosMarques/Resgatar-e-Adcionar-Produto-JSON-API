
import './App.css';
import { useState, useEffect } from "react"

// Custom Hook Aula 4 import
import { useFetch } from "./hooks/useFetch";

function App() {
// Array dos Produtos
const [products, setProducts] = useState([])

//Custom Hook Aula 4 importação
const url = "http://localhost:3000/products"

const { data: items, httpConfig, error} = useFetch(url); //exportação de resgatamento de dados e post dos hooks



//Aula 2
const [name, setName] = useState("")
const [price, setPrice] = useState("")
const [size, setSize] = useState("")







// Aula 1-  Resgatando Dados
  //useEffect(() => { // Será enviada uma resposta no futuro

  // async function fetchData() { // se Quiser fazer uma async tem que ser em uma função fetch data,
    
 // const resposta = await fetch(url) // a Resposta

   //const data = await resposta.json() //Transformando em Objeto e não em texto
  
 // setProducts(data)
   //}
  // fetchData()//

 //}, []); 

// Final Aula 1 Pegando dados e transformando em Json, *CÓDIGO DE RESGATAMENTO DE DADOS LÁ NA PASTA HOOKS AULA 4 *







//Aula 2 Adicionando Produtos

const handleSubmit = async (e) => {
  e.preventDefault()

  const product = {
    name,
    price,
    size


    
  }
  
 //const requisicao = await fetch(url, {
 // method: "POST",
  //headers: {
//"Content-Type": "application/json"
 // },
 // body: JSON.stringify(product) // JSON.stringfy = Guardando o objeto product no banco de dados como uma string em json
 //});


 //Aula 3 Carregamento Dinâmico de Produto
 //const produtoAdcionado = await requisicao.json()

 //setProducts((prevProducts) => [...prevProducts, produtoAdcionado])

 httpConfig(product, "POST")

 setName("")
 setPrice("")
 setSize("")
}






   

   


  


 // esse é o Array de dependências do UseEfect



  return (
    <div className="App">
     <h1>Lista de Produtos</h1>
     {error && <p>{error}</p>}

    {/*Ul da aula 1 com map pra fazer loop e pegar dados */}
    <h1>Resgatando Dados</h1>
     <ul>

      {items && items.map((products) => (
        <li key={products.id}>{products.name} - {products.price} - {products.size}</li>

      ))}
     </ul>

        {/* Adição de Produtos Aula 2*/}
     <div className="add-products">
      <h1>Adcionando Dados</h1>
      <form onSubmit={handleSubmit}>
        <label>
        Nome Produto: 
        <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value) } />


        </label>

        <label>
        Preço Produto: 
        <input type="number" value={price} price="price" onChange={(e) => setPrice(e.target.value) } />


        </label>

        <label>
        Tamanho Produto: 
        <input type="text" value={size} size="size" onChange={(e) => setSize(e.target.value) } />


        </label>

        <input type="submit" value="Adcionar Produto" />
        <input type="submit" value="Deletar Produto" />

      </form>
      
    </div>
     {/* Adição de Produtos Aula 2*/}
    
    
    </div>


    
  );
}

export default App;
