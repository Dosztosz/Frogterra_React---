
function Sidebar({username, dailyMessage, level}){





    return(
        <div className="profile_showcase">
            <div className="background-pixel">
                <h2>Informacje</h2>
            </div>
            <div className="background-pixel">
                <p>{username}</p>
                <p>LvL. {level}</p>
            </div>
            <div className="background-pixel">
                <h2>Wiadomości</h2>
                <p>{dailyMessage}</p>
            </div>
        </div>
    )
}

export default Sidebar