import { useState, useEffect } from "react";





export const useFetch = (url) => {

    // Aula 5 Refatorando Post
    const[config, setConfig] = useState(null) // Vai Configurar o Post e os Cabeçalhos
    const [method, setMethod] = useState(null) //  Qual methodo usarei na minha função se vai ser o get ou post
    const [callFetch, setCallFettch] = useState(false)

    const httpConfig = (data, method,) => {
        if (method === "POST") {
          setConfig({
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          setMethod(method)
        }
    }
    //Aula 5 Final consts

    // Aula 6 Tratamento de Erros
    const [error, setError] = useState(null)


    



    // Aula 4 Um Hook Separado para Resgatar os dados do db json // * É o mesmo código da aula 1 *//
    const [data, setData] = useState(null) //Trabalhar com os dados que vem da API db json

    useEffect(() => {
        const fetchData = async () => {

            try { // Tento fazer carregamento dos meus dados
                const res = await fetch(url)

                const json = await res.json()
    
                setData(json)
    
                
            } catch (error) { //Caso der Erro

                console.log(error.message)
                setError("Ops! Houve Algum erro inesperado")
                
            }
           
        }
        fetchData()

    }, [url, callFetch]) // O Call fetch nesse caso funciona sempre quando for adcionado um dado no sistema damos um callFetch para trazer esses dados atualizados



      // Aula 5 Refatorando Post
      useEffect(() => {

        const httpRequest = async () => {
           if (method == "POST") {
            let fetchOptions = [url, config] // Config é onde vai o body no caso os dados, no caso vai poder add + dados
        
            const res = await fetch(...fetchOptions)

            const json = await res.json() //Tranformando texto puro em objeto json

            setCallFettch(json)

           }
        }
        httpRequest()
      }, [config, method, url])
      

    return { data, httpConfig, error  }



      
    
}