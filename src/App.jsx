import { Header } from './components/Header'
import Footer from './components/Footer'
import './App.css'
import TarjetaUsuario from './components/props/TarjetaUsuario'
import Alergia from './components/props/Alergia'
import Producto from './components/props/Producto'
import Boton from './components/props/Boton'
import Etiqueta from './components/props/Etiqueta'
import Tarjeta from './components/props/Tarjeta'
import Panel from './components/props/Panel'
import BotonA from './components/props/BotonA'
import Card from './components/props/Card'
import { CardA } from './components/propsB/CardA'
import PanelA from './components/propsB/PanelA'
import PracA from './components/propsB/PracA'
import { Section } from './components/propsB/Section'
import State from './components/userCard/State'
import Tareas from './components/userCard/Tareas'
import GraficoBarras from './components/graficos/GraficoBarrasVertical'
import GraficoBarrasVertical from './components/graficos/GraficoBarrasVertical'
import HandleClick from './components/handleClick/HandleClick'
import GraficoDonaCompleta from './components/graficos/GraficoDonaCompleta'



function App() {
  
    const datosComidas = [
      { dia: "Lunes",     comidas: 1 },
      { dia: "Martes",    comidas: 1 },
      { dia: "Miércoles", comidas: 5 },
      { dia: "Jueves",    comidas: 2 },
      { dia: "Viernes",   comidas: 4 },
      { dia: "Sábado",    comidas: 5 },
      { dia: "Domingo",   comidas: 4 }
    ];

    const datosPresion = [
      { dia: "Lunes",     presion: 120 },
      { dia: "Martes",    presion: 115 },
      { dia: "Miércoles", presion: 130 },
      { dia: "Jueves",    presion: 125 },
      { dia: "Viernes",   presion: 140 },
      { dia: "Sábado",    presion: 135 },
      { dia: "Domingo",   presion: 130 }
    ];

    const datosGlucosa = [
  { dia: "Lun", valor: 95 },
  { dia: "Mar", valor: 102 },
  { dia: "Mié", valor: 98 },
  { dia: "Jue", valor: 100 },
  { dia: "Vie", valor: 105 },
  { dia: "Sáb", valor: 110 },
  { dia: "Dom", valor: 108 }
];

  return (
    
    <>
      <Header title="La página de LS">
        <h3>Esto es el header</h3>
      </Header>
      <section>
        <p>Esta es una sección</p>
      </section>
      <section/>
      <Footer/>
      <TarjetaUsuario nombre="Juan Perez" edad={30} profesion="Ingeniero"/>

      <Alergia tipo="sapullido" sintoma="comesón" control="no recibido" />

      <Producto productoName="Queso Provolone" productoPrecio="Caro" productoDescrip="pedecedero"/>
      
      <h3>Boton Personalizable</h3>


      <Boton
        texto="Guardar"
        color="#4CAF50"
        tamano="pequeno" 
        onClick={()=>("Has guardado Informacion")}
      />
      <hr/>
      <Boton
        texto="registro" 
        color="#F44336"
        tamano="pequeno"
        onClick={()=>("Elemento eliminado")}
      />

      <Etiqueta
        texto="Etiqueta verde con texto blanco"
        colorFondo="green"
        colortxt="white"
        tamanotxt="pequeno"
      />
      <Etiqueta
        texto="Etiqueta azul con texto amarillo"
        colorFondo="blue"
        colortxt="yellow"
        tamanotxt="pequeno"
      />
      <Etiqueta
        texto="Etiqueta roja con texto negro"
        colorFondo="red"
        colortxt="black"
        tamanotxt="pequeno"
      />
      <hr/>      
      
      <Tarjeta titulo="Infomracion personal">
        <p>Nombre: Ana López</p>
        <p>Email: ana.lopez@example.com</p>
      </Tarjeta>
      <Tarjeta titulo="Lista de compras">
        <ul>
          <li>frutas </li>
          <li>frutas </li>
          <li>frutas </li>
        </ul>
      </Tarjeta>
      
      <Panel className="panel" titulo="PANEL">
        <p className='aprieta'>apriete el boton</p>
      <Tarjeta>
        <button onClick={()=> alert('Click en el botón de la tarjeta')}>ACCIÓN</button>
      </Tarjeta>
        <img src="https://picsum.photos/200/300" alt="aleatoria" />
        <p className='textoEnPanel'>este es el texto en la imagen</p>
      </Panel>

      <hr/>

      <BotonA texto="Botón por defecto" tipo="default" onClick={() => alert('Click en botón por defecto')} />
      <BotonA texto="Botón primario"    tipo="primary" onClick={() => alert('Click en botón primario')} />
      <BotonA texto="Botón de peligro"  tipo="danger"  onClick={() => alert('Click en botón peligro')} />

        <hr />

      <Card titulo="Card de Info" tipo="info"/>
      <Card titulo="card de warnig" tipo="warning"/>
      <Card titulo="card de error" tipo="error"/>

      <hr/>

      <CardA tipo='info'>
        <h3>Información general</h3>
        <p>Información útil sobre React</p>
      </CardA>

      <CardA tipo="warning">
        <h3>Advertencia</h3>
        <p>Tenga cuidado con los datos que proporciona.</p>
        <span>⚠️</span>
      </CardA>

      <CardA tipo="error">
        <h3>Error</h3>
        <p>Se produjo un problema al cargar los datos.</p>
        <button onClick={() => alert('Intentando recargar...')}>
          Reintentar
        </button>
      </CardA>

      <hr />

      <PanelA titulo='Panel de información'>
        <p>Este es el contenido de panel de información</p>
      </PanelA>

      <PanelA titulo='Panel con imagen'>
        <img src="https://picsum.photos/200/300" alt="aleatoria" />
        <p>Este es una imagen dentro de panel</p>
      </PanelA>
      <hr />
      <PracA show={false} />
      <hr />
      <Section title={"hola mundo"} show={false}/>
      <hr />

      <State/>
      <hr />

      <Tareas/>
      <hr />


      <GraficoBarrasVertical
          tituloEjeX='DÍAS DE LA SEMANA'
          unidadesEjeX='días registrados / 24hrs'
          tituloEjeY='COMIDAS AL DÍA'
          unidadesEjeY='repeticiones al día / ud'
          datos={datosComidas}
          valorMaximoY={5}

      />

      <hr/>

      <GraficoBarrasVertical 
          tituloEjeY="PRESIÓN SISTÓLICA"
          unidadesEjeY="mmHg"
          tituloEjeX="DÍAS"
          unidadesEjeX="día"
          datos={datosPresion.map(d => ({ dia: d.dia, comidas: d.valor }))}
          valorMaximoY={150}
          valorMinimoY={90}
          colorBarra="#FF6B6B"
    />

      <hr/>
      <GraficoBarrasVertical 
        tituloEjeY="GLUCOSA"
        unidadesEjeY="mg/dL"
        d
        tituloEjeX="DÍAS"
        unidadesEjeX="día"
        datos={datosGlucosa.map(d => ({ dia: d.dia, comidas: d.valor }))}
        valorMaximoY={120}
        valorMinimoY={70}
        colorBarra="#FECA57"
      />

      <hr/>
      <HandleClick />

      <hr/>

      <GraficoDonaCompleta
        valor={70}
        titulo="Oxígeno en sangre"
        unidad="%"
        tipoGr="completo"
        colorProgreso="#4ECDC4"
      />
      <GraficoDonaCompleta
        valor={70}
        titulo="Oxígeno en sangre"
        unidad="%"
        tipoGr="medio"
        colorProgreso="#4ECDC4"
      />

    </>
  )
}

export default App
