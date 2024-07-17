import MainFrog from '../assets/froggs/regular_frog.png'


function Profile(){
    return(

        <div className="row">
            <div className="col-main">
                <div className="character">
                    <img className='main_frog' id="main_frog" src={MainFrog} alt=""/>
                </div>
                <div className="top-bar">
                    <p>EXP <span>(10 / 100)</span></p>
                    <progress id="m_exp_char_bar" value="10" max="100"></progress>
                </div>
            </div>
        <div>
            <h2 className="center-title">Inventory</h2>
            <div className="inventory">
                <div className="item background-pixel popup" id="item_0" onmouseover="popUp('item_0_pop')" onmouseout="popOut('item_0_pop')">
                    <span className="popuptext" id="item_0_pop">
                        Hełm Lepkości
                    <br/> HP: 150 
                    <br/> Siła: 10
                    <br/> Lepkość: 15
                </span>
                </div>
                <div className="item background-pixel popup" id="item_1" onmouseover="popUp('item_1_pop')" onmouseout="popUp('item_1_pop')">
                    <span className="popuptext" id="item_1_pop">
                           armor_name;
                        <br/> Zdrowie: 15
                        <br/> Siła: 15 
                        <br/> Lepkość:  15
                    </span>
            </div>
                <div className="item background-pixel popup" id="item_4" onmouseover="popUp('item_2_pop')" onmouseout="popUp('item_2_pop')">
                    <span className="popuptext" id="item_2_pop">
                            Nazwa Broni
                        <br/> Atak: 10
                        <br/> Siła: 150
                    </span>
            </div>
            </div>
            <h2  className="center-title">Nazwa Gracza</h2>
            <table className="statistics">
                <tr>
                    <td>Zdrowie: </td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>Siła: </td>
                    <td>15</td>
                </tr>
                <tr>
                    <td>Atak: </td>
                    <td> echo  sum_attack_min.' / '. sum_attack_max  </td>
                </tr>
                <tr>
                    <td>Lepkość: </td>
                    <td>20</td>
                </tr>
            </table>
        </div>
</div>
    )
}

export default Profile