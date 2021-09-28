import React from 'react';
import './footer.scss'

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>A Transportadora</h4>
                        <ul className="list-unstyled">
                            <li>12345-678</li>
                            <li>São Paulo, Brasil</li>
                            <li>Rua: Brasil, 123</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Tudo sobre suas entregas</h4>
                        <ul className="list-unstylled">
                            <li>Pesquisar encomenda</li>
                            <li>Onde ela está?</li>
                            <li>O que é encomenda?</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Tudo sobre suas entregas</h4>
                        <ul className="list-unstylled">
                            <li>Sobre nós</li>
                            <li>Projetos</li>
                            <li>O que é encomenda?</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} A transportadora | Todos os direitos reservados | Termos de serviço | Privacidade
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;