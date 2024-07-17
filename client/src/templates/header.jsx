function Header(){

return(

        <div className="header">
            <nav>
                <ul>
                    <a href="index.php"><li class="<?php echo $main ?>">Strona Postaci</li></a>
                    <a href="?site=mission"><li class="<?php echo $missions ?>">Misje</li></a>
                    <a href="?site=fight"><li class="<?php echo $fight ?>" >Walka</li></a>
                    <a href="#"><li class="<?php echo $settings ?>">Ustawienia</li></a>
                </ul>
            </nav>
        </div>


)

}

export default Header