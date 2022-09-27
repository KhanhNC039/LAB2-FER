import { useEffect, useState } from "react";

export function useFetch(url){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        const   fetchData = async () =>{
            try {
                const response = await fetch(url)
                const data = await response.json()

                setData(data)
                setLoading(false)
            } catch (error) {

                setError(error)
                setLoading(false)
            }
        }
         fetchData()
    },[])
    return {data,loading,error}

}