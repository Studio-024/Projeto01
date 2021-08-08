import React, { useState } from 'react'
import AddQuest  from '../components/AddQuest'
import AddResponse  from '../components/AddResponse'
const CardContext = React.createContext('');

const AddCard = () => {
    const [index, setIndex] = useState(0)

    function resetCard() {
        setIndex(index + 1)
        document.getElementById("dashboard__content__back")!.style.display = "none"
        document.getElementById("dashboard__content__seeBack")!.style.display = "initial"
    }

	return(
        <div className="container" id="containerCard">
            <main>
                <Switch>
                    <Route exact path={`/addCard/front`}>
                        <AddFront add={"front"}/>
                    </Route>
                    <Route exact path={`/addCard/back`}>
                        <AddBack add={"back"}/>
                    </Route>
                </Switch>
            </main>
        </div>
	)
}

export default AddCard
