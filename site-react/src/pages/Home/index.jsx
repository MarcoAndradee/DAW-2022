import './style.css';

export function HomePage() {
    return (
        <div id="home-page">
            
          <div className="container">
            <section id="banner">
              <div className="banner-content">
                <h1>Lugar exato para você realizar os seu sonhos</h1>
                <h3>Nós oferecemos um serviço completo de venda, locação e compra</h3>
              </div>
              <div className="banner-filter">
                <div className="filter-fields">
                  <form>
                    <select>
                      <option value="venda">Venda</option>
                      <option value="locacao">Locação</option>
                    </select>

                    <select>
                      <option>Tipo Imóvel</option>
                      <option value="apartamento">Apartamento</option>
                      <option value="casa">Casa</option>
                      <option value="sobrado">Sobrado</option>
                      <option value="terreno">Terreno</option>
                    </select>


                    <select>
                      <option>Cidade</option>
                      <option value="coronel">Coronel Vivida</option>
                      <option value="beltrao">F.Beltrão</option>
                      <option value="pato">Pato Branco</option>
                      <option value="saudade">Saudade do iguaçu</option>
                    </select>

                    <select>
                      <option>Bairro</option>
                      <option value="brasilia">Brasilia</option>
                      <option value="centro">Centro</option>
                      <option value="lasalle">La Salle</option>
                      <option value="pinheiros">Pinheiros</option>
                    </select>
                  </form>
                </div>
                <div className="filter-result">
                  <p className="result-value">26</p>
                  <p className="result-label">Imóveis</p>
                  <button>Filtrar</button>
                </div>
              </div>

            </section>
            <section id="cards">
              <h2>Imóveis disponíveis</h2>
              <div className="cards-content">
                <div className="card">
                  <img src="./assets/img/thumb1.png" alt="Casa 1" />
                  <div className="card-content">
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                    <p>Blanditiis nesciunt, dolorum natus provident maxime aspernatur nulla voluptate veniam
                      quibusdam non facilis
                      quae necessitatibus qui dignissimos aperiam ratione magnam unde dolorem.</p>
                    <div className="card-price">
                      <p >R$ 900.000,00</p>
                    </div>

                  </div>
                </div>

                <div className="card">
                  <img src="./assets/img/thumb2.png" alt="Casa 2" />
                  <div className="card-content">
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                    <p>Blanditiis nesciunt, dolorum natus provident maxime aspernatur nulla voluptate veniam
                      quibusdam non facilis
                      quae necessitatibus qui dignissimos aperiam ratione magnam unde dolorem.</p>
                    <div className="card-price">
                      <p >R$ 900.000,00</p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <img src="./assets/img/thumb3.png" alt="Casa 3" />
                  <div className="card-content">
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                    <p>Blanditiis nesciunt, dolorum natus provident maxime aspernatur nulla voluptate veniam
                      quibusdam non facilis
                      quae necessitatibus qui dignissimos aperiam ratione magnam unde dolorem.</p>
                    <div className="card-price">
                      <p >R$ 900.000,00</p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <img src="./assets/img/thumb4.png" alt="Casa 4" />
                  <div className="card-content">
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                    <p>Blanditiis nesciunt, dolorum natus provident maxime aspernatur nulla voluptate veniam
                      quibusdam non facilis
                      quae necessitatibus qui dignissimos aperiam ratione magnam unde dolorem.</p>
                    <div className="card-price">
                      <p >R$ 900.000,00</p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <img src="./assets/img/thumb5.png" alt="Casa 5" />
                  <div className="card-content">
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                    <p>Blanditiis nesciunt, dolorum natus provident maxime aspernatur nulla voluptate veniam
                      quibusdam non facilis
                      quae necessitatibus qui dignissimos aperiam ratione magnam unde dolorem.</p>
                    <div className="card-price">
                      <p >R$ 900.000,00</p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <img src="./assets/img/thumb6.png" alt="Casa 6" />
                  <div className="card-content">
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                    <p>Blanditiis nesciunt, dolorum natus provident maxime aspernatur nulla voluptate veniam
                      quibusdam non facilis
                      quae necessitatibus qui dignissimos aperiam ratione magnam unde dolorem.</p>
                    <div className="card-price">
                      <p >R$ 900.000,00</p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            <section id="reasons">
              <h2>Por que nos escolher?</h2>
              <div className="reasons-content">
                <div className="reason">
                  <p className="reason-value">+1000</p>
                  <p className="reason-label">Imóveis</p>
                </div>

                <div className="reason">
                  <p className="reason-value">+500</p>
                  <p className="reason-label">Clientes felizes</p>
                </div>

                <div className="reason">
                  <p className="reason-value">+50</p>
                  <p className="reason-label">Premiações</p>
                </div>

                <div className="reason">
                  <p className="reason-value">+100</p>
                  <p className="reason-label">Especialistas</p>
                </div>

              </div>
            </section>

            <section id="specialists">
              <h2>Converse com um especialista</h2>
              <div className="specialists-content">
                <div className="specialist">
                  <h5>Tutu Williams</h5>
                  <p>London</p>
                  <p className="specialist-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                    autem commodi quidem consectetur aperiam et doloribus tenetur velit, cupiditate ad, dolorem
                    corrupti esse accusantium incidunt sit eum omnis tempora ab.</p>
                </div>

                <div className="specialist">
                  <h5>Mark Zion</h5>
                  <p>New York City</p>
                  <p className="specialist-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                    autem commodi quidem consectetur aperiam et doloribus tenetur velit, cupiditate ad, dolorem
                    corrupti esse accusantium incidunt sit eum omnis tempora ab.</p>
                </div>

                <div className="specialist">
                  <h5>Essien Crest</h5>
                  <p>Berlin</p>
                  <p className="specialist-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                    autem commodi quidem consectetur aperiam et doloribus tenetur velit, cupiditate ad, dolorem
                    corrupti esse accusantium incidunt sit eum omnis tempora ab.</p>
                </div>

              </div>
            </section>

            <section id="values">
              <h2>Quem é a imobiliária Unimater</h2>
              <div className="values-conteiner">
                <img src="./assets/img/place-company.png" alt="Foto da firma" />

                <div className="values-content">

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, minus eius veniam amet
                    illo quis optio ex voluptatem sunt fugit beatae praesentium est laudantium, a, corporis hic
                    placeat eum facilis!</p>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab aliquam numquam modi
                    molestias ducimus, amet corporis autem asperiores a! Recusandae fuga eveniet obcaecati ipsum
                    perspiciatis velit harum rem a!</p>

                  <div className="values-detail">
                    <div className="value">
                      <span>Alto Padrão</span>
                      <span>Agilidade</span>
                    </div>

                    <div className="value">
                      <span>Facilidade</span>
                      <span>Confiabilidade</span>
                    </div>
                  </div>
                </div>
              </div>

            </section>
          </div>
        </div>
    )
}