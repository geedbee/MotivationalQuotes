import {useEffect, useState} from 'react'

export default function Quote() {
    interface myQuote {
        text: string;
        author: string;
    }

    const [quote, setQuote] = useState<myQuote>();

    const randomNumber = Math.floor(Math.random() * 1623);

    /* const getData= () => {
        fetch('data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }).then(function(response){
            console.log(response);
            return response.json();
        }).then(function(myJson){
            console.log(myJson[randomNumber]);
            setQuote(myJson[randomNumber]);
        });
    }*/

    const getDaData= async function () {
        const response = await fetch('data.json', {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        const myJson = await response.json();
        setQuote(myJson[randomNumber]);
    }

    useEffect(()=>{
        getDaData();
    }, []);

    return (
        <div>
            {quote && <>
                <h1>{quote.text}</h1>
                <h2>{quote.author}</h2>
            </>}
            <button onClick={getDaData}>Generate New Quote</button>
        </div>
    )
}
