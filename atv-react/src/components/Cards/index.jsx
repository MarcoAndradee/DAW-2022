import './style.css';

import imgCaneca from '../../assets/img/Canecapreta.png';
import imgCaneta from '../../assets/img/Caneta.png';
import imgGarrafa from '../../assets/img/Garrafaazul.png';
import imgCapa from '../../assets/img/Capacelular.png';
import imgMoletom from '../../assets/img/Moletom.png';
import imgMochila from '../../assets/img/Mochila.png';

export function Cards() {
    return(
        <section id="cards">
                <h2>Produtos em destaque</h2>
                <div class="cards-content">
                    <div class="card">
                        <img src={imgCaneca}alt="Produto 1"/>
                        <div class="card-content">
                            <h4>Caneca</h4>
                            <p></p>
                            <div class="card-price">
                                <p >R$ 50,00</p>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <img src={imgCaneta}alt="Produto 2"/>
                        <div class="card-content">
                            <h4>Caneta</h4>
                            <p></p>
                            <div class="card-price">
                                <p >R$ 5,00</p>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <img src={imgGarrafa}alt="Produto 3"/>
                        <div class="card-content">
                            <h4>Garrafa térmica</h4>
                            <p></p>
                            <div class="card-price">
                                <p >R$ 80,00</p>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <img src={imgCapa}alt="Produto 4"/>
                        <div class="card-content">
                            <h4>Capinha de celular</h4>
                            <p></p>
                            <div class="card-price">
                                <p >R$ 50,00</p>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <img src={imgMoletom}alt="Produto 5"/>
                        <div class="card-content">
                            <h4>Moletom</h4>
                            <p></p>
                            <div class="card-price">
                                <p >R$ 250,00</p>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <img src={imgMochila}alt="Produto 6"/>
                        <div class="card-content">
                            <h4>Mochila</h4>
                            <p></p>
                            <div class="card-price">
                                <p >R$ 250,00</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
    )
}