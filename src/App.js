import { useState } from 'react';
import Banner from './compnentes/Banner';
import Formulario from './compnentes/Formulario';
import Galaxy from './compnentes/Galaxy'

function App() {

  const galaxias = [
    {
      nome: 'Via Láctea',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Andromeda',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Órion',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [astros, setAstros] = useState([])

  const aoNovoAstroAdicionado = (astro) => {
    setAstros([...astros, astro])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario galaxias={galaxias.map(galaxia => galaxia.nome)} aoAstroCadastrado={astro => aoNovoAstroAdicionado(astro)} />
      {galaxias.map(galaxia =>
        <Galaxy
          key={galaxia.nome}
          nome={galaxia.nome}
          corPrimaria={galaxia.corPrimaria}
          corSecundaria={galaxia.corSecundaria}
          astros={astros.filter(astro => astro.galaxia === galaxia.nome)}


        />
      )}
    </div>
  )
}


export default App;
