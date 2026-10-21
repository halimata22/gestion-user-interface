import { useState } from "react";

function Content(){
    const [message, setMessage] = useState("Bienvenue ");

    return (
        <div className="p-4">
            <div className="card shadow rounded p-4">
                <h2 className="mb-4 text-primary">{message}</h2>

                <button
                    className="btn btn-primary" 
                    onClick={() => setMessage("React devient simple")}
                    > 
                    Cliquer
                </button>
            </div>
        </div>
    )
}
export default Content;