import './style.css';

import imgTicket1 from '../../assets/img/Ticket01.png';
import imgTicket2 from '../../assets/img/UniCoin.png';

export function Cupons() {
    return(
        <section id="cupons">
                <h2>Métodos Especiais de Desconto</h2>
                <div class="cupons-content">
                    <div class="cupom">
                        <img src={imgTicket1}alt="Cupom01"/>
                        <p class="cupom-value">Tickets promocionais...</p>
                        <p class="cupom-label"></p>
                    </div>

                    <div class="cupom">
                        <img src={imgTicket2}alt="Unicoin"/>
                        <p class="cupom-value">UnimaterCoin's</p>
                        <p class="cupom-label"></p>
                    </div>
                </div>
            </section>
    )
}