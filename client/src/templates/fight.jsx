import Attack from './actions/attack'

function Fight(){
    return(
        
<>
        <div class="battle-arena">
            <div class="battle-arena-row">
                <div class="character-info">
                    <div class="character-bar">
                        Your HP:
                        <progress id="m_char_bar" value="100" max="100"></progress>
                        <p>Damage dealt: <span id="m_char_damage"></span></p>
                    </div>
                    <div class="character-window" id="m_char"></div>
                </div>
                <div class="character-info">
                    <div class="character-bar">
                        Enemy HP:
                        <progress id="e_char_bar" value="100" max="100"></progress>
                        <p>Damage dealt: <span id="e_char_damage"></span></p>
                    </div>
                    <div class="character-window" id="e_char"></div>
                </div>
            </div>
        </div>
            <Attack attack={15} />
</>
    )
}


export default Fight