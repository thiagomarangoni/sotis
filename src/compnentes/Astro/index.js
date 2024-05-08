import './Astro.css'

const Astro = (props) => {
    return (
        <div className='astro'>
            <div className='cabecalho' style={{backgroundColor: props.cor}}>
                <img 
                    src={props.imagem}
                    alt={props.nome}
                />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h3>{props.tipo}</h3>
            </div>
        </div>
    )


}

export default Astro;
