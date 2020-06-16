import React from "react"

function Recipe() {
    return (
        <div className="recipe-wrapper">
            <div className="recipe-title">
                <h1>Recipe Title</h1>
                <h5>Recipe Subtitle</h5>
            </div>
            <div className="recipe-flex-box">
                <div className="recipe-image">
                    <img src="" />
                </div>
                <div className="recipe-ingredients">
                    <ul>
                        <li>Quantity of / Ingredient 1</li>
                        <li>Quantity of / Ingredient 2</li>
                    </ul>
                </div>
            </div>
            <div className="recipe-instructions">
                <ol>
                    <li>First instruction is you mix stuff together.</li>
                    <li>Second instruction is you cook things</li>
                </ol>
            </div>

        </div>
    )
}

export default Recipe