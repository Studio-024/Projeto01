import { useState, useEffect } from 'react';
import { ICardOrdered } from '../domain/useCase/orderCard';

export interface Props{
    dataCards: ICardOrdered[]
    buttonIndex: number
}

export default function Cards({dataCards, buttonIndex}: Props) {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [card, setCard] = useState<ICardOrdered[]>([]);
    
    useEffect(()=>{ 
        setCard(dataCards)
    }, [dataCards])

    useEffect(() => {
        if (card.length && buttonIndex <= card.length) {
            setQuestion(card[buttonIndex - 1].question);
            setResponse(card[buttonIndex - 1].response);
        }
        else {
            setQuestion("Não há mais cards.");
            setResponse("Não há mais cards.");
        }
    }, [buttonIndex]);
    
    function handleClick(){
        document.getElementById("dashboard__content__SeeResponse")!.style.display = "none";
        document.getElementById("resposta")!.style.display = "inline";

    }
    return(
        <>
        <section className="dashboard__content__cards">
            
            <section className="dashboard__content__questFlex" id="dashboard__content__quest"> 
                <p className="dashboard__content__flexText">{question}</p>
            </section>
            
            <section className="dashboard__content__questFlex" id="dashboard__content__response">
                <p className="dashboard__content__flexText" id="resposta" style={{display: "none"}}>{response} aa a a a a a a a a  a a a aa  a a a a a a a a a a a a a a a a a a a a a a a a a a a a a aa a a a a a a a a a a a a a a a a a a a a aa a a a a a a a a a a a a a a a a a a a a aa a a a a a a a a a a a a a a a a a a a a a </p>
                <div  className="dashboard__content__see" >                    
                    <button className="buttons" id="dashboard__content__SeeResponse" onClick={handleClick}>resposta</button>    
                </div>     
            </section>
            
        </section>
        </>
    );
}