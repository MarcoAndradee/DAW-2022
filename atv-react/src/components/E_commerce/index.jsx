import './style.css';

import imgFrete from '../../assets/img/Fretegratis.png';
import imgEntrega from '../../assets/img/Entrega.png';

export function E_commerce() {
    return(
        <section id="e_commerce">
                <h2>E-commerce</h2>
                <div class="ecommerce-content">
                    <div class="ecommerce">
                        <img src={imgFrete}alt="frete"/>
                        <h5>Válido para compras acima de R$100,00...</h5>
                        <p></p>
                        <p class="ecommerce-detail"></p>
                    </div>

                    <div class="ecommerce">
                        <img src={imgEntrega}alt="entrega"/>
                        <h5>Entregas agilizadas...</h5>
                        <p>*realizadas em até 24 horas.</p>
                        <p class="ecommerce-detail"></p>
                    </div>

                </div>
            </section>
    )
}