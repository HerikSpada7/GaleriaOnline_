import './Card.css'
import AURA from '../../assets/img/AURA.webp'

import editzinIMG from '../../assets/img/editzinIMG.svg'
import lixozinIMG from '../../assets/img/lixozinIMG.svg'

export const Card = ({tituloCard}) => {
    return(
        <>
        <div className="cardDaImagem">
            <p>{tituloCard}</p>
            <img className="imgDoCard" src={AURA} alt="Imagem relacionada ao card." />
            <div className='icons'>
                <img src={editzinIMG} alt="Ícone de caneta para realizar uma alteração." />
                <img src={lixozinIMG} alt="Ícone de uma lixeira" />
            </div>
        </div>
        </>
    )
}