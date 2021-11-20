import { useEffect, useState } from "react";
import helloServices from "../services/helloServices";

const Hello = () => {

    //react hooks usestate
    const[hello, setHello] = useState("")

    //react hook useEffect
    //axios - tool for http request promises
    //promises - asynchronous processes
    useEffect( () => {
        helloServices.getHello()
        .then(response => {
            setHello(response.data)
        })
        .catch(err => {
            console.log("API DOWN! REPEAT! API DOWN!!!")
        })
    }
    )

    return hello;
}

export default Hello