import Sword from '../assets/sword.webp';

function Tips(){
    return(
        <div class="info-bar background-pixel">
                <div class="image background-pixel">
                    <img src={Sword} alt="" />
                </div>
                <div class="info-bar-text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren
                </div>
            </div>
    )
}
export default Tips