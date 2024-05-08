import Astro from '../Astro';
import './Galaxy.css';

const Galaxy = (props) => {
    return (
        props.astros.length > 0 && 
        <section className='galaxia' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}> {props.nome}</h3>
            <div className='componentes'>
                {props.astros.map(astro => <Astro key={astro.nome} cor={props.corPrimaria} nome={astro.nome} tipo={astro.tipo} imagem={astro.imagem} />)}
            </div>
        </section>
    );
}

export default Galaxy;
