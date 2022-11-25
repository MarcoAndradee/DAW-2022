import './style.css';

export function Footer(){
    return(
        <footer>
        <div class="container">
            <div class="footer-content">

                <div class="footer-menu">
                    <p class="footer-menu-title">Sobre a Empresa</p>
                    <ul>
                        <li><a href="#">Missão e Valores</a></li>
                        <li><a href="#">Informações</a></li>
                        <li><a href="#">Comunidade</a></li>
                        <li><a href="#">Trabalhe conosco</a></li>
                    </ul>
                </div>

                <div class="footer-menu">
                    <p class="footer-menu-title">Contatos</p>
                    <ul>
                        <li>(46) 9 9902-8922</li>
                        <li>(46) 3242-9999</li>
                        <li>lojaunimater@hotmail.com</li>
                    </ul>
                </div>
                <div class="footer-menu">
                    <p class="footer-menu-title">Deixe-nos ajudar você</p>
                    <ul>
                        <li><a href="#">Sua conta</a></li>
                        <li><a href="#">Frete e prazo de entrega</a></li>
                        <li><a href="#">Devolução e reembolsos</a></li>
                        <li><a href="#">Descontos</a></li>
                    </ul>
                </div>

            </div>
            <div class="footer-social">
                <span class="facebook"></span>
                <span class="twitter"></span>
                <span class="instagram"></span>
                <span class="linkedin"></span>
            </div>
            <p class="footer-copyright">
               Loja Unimater &#169; 2022 - Todos os direitos reservados
            </p>
        </div>
    </footer>
    )
}