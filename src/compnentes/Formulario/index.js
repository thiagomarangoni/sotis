import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'




const Formulario = (props) => {

   // const galaxia = [
    //   'Via Láctea',
    //   'Andromeda',
    //   'Órion'
    //]

const [nome,setNome] = useState('')
const [tipo,setTipo] = useState('')
const [sistema,setSistema] = useState('')
const [imagem,setImagem] = useState('')
const [galaxia,setGalaxia] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoAstroCadastrado({
            nome,
            tipo,
            sistema,
            imagem,
            galaxia
        })
        setNome('')
        setTipo('')
        setSistema('')
        setImagem('')
        setGalaxia('')
    }

    return (

        <section className='formulario'> 
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do Astro </h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    valor={nome}
                    aoAlterado = {valor => setNome(valor)}
                    placeholder="Nome ou Identificação" 
                />

                <CampoTexto obrigatorio={true}
                    label="Tipo"
                    valor={tipo}
                    aoAlterado = {valor => setTipo(valor)}
                    placeholder="Tipo (Planeta, Planetoide, Estrela)" 
                />

                <CampoTexto 
                obrigatorio={true}
                label="Sistema"
                valor={sistema}
                aoAlterado={valor => setSistema(valor)}
                placeholder="Sistema Solar" 
                />

                <CampoTexto label="Imagem"
                valor={imagem}
                aoAlterado = {valor => setImagem(valor)}
                placeholder="Imagem" 
                />

                <ListaSuspensa
                obrigatorio={true}
                label="Galáxia"
                itens={props.galaxias}
                valor={galaxia}
                aoAlterado={valor => setGalaxia(valor)}/>
                <Botao> 
                    Cadastrar Astro
                </Botao>
            </form>
        </section>
    )


}

export default Formulario