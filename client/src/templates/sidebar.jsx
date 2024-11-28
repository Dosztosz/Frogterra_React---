let playerName = "Tomek"
let LVL  = 69
let dailyMessage = "Świetne wieści w dniu dzisiejszym nasze jeziorka są w idelanym stanie, dzięki temu masz zwiększoną szansę na zdobycie legendarnych przedmiotów"

function Sidebar(){

    return(
        <div className="profile_showcase">
            <div className="background-pixel">
                <h2>Informacje</h2>
            </div>
            <div className="background-pixel">
                <p>{playerName}</p>
                <p>LvL. {LVL}</p>
            </div>
            <div className="background-pixel">
                <h2>Wiadomości</h2>
                <p>{dailyMessage}</p>
            </div>
        </div>
    )
}

export default Sidebar