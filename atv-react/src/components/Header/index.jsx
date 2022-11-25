import './style.css';

import imgLogo from '../../assets/img/Lojaunimaterlogo.png';

export function Header() {
    return(
        <header>

        <div class="container">
            <div class="brand">
                <img src={imgLogo} alt="Logo da Loja"/>

                <h6>A loja do Universitário</h6>
            </div>

            <nav>
                <ul>
                    <li>
                        <a href="#" class="active">Início</a>
                    </li>

                    <li>
                        <a href="#">Ofertas</a>
                    </li>

                    <li>
                        <a href="#">Novidades</a>
                    </li>

                    <li>
                        <a href="#">Produtos</a>
                    </li>

                    <li>
                        <a href="#">Encomendas</a>
                    </li>

                    <li>
                        <button>Login</button>
                    </li>

                </ul>
            </nav>
        </div>
    </header>

    )
}