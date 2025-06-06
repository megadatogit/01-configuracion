import { Header } from './components/Header'
import Footer from './components/Footer'
import './App.css'
import TarjetaUsuario from './components/props/TarjetaUsuario'
import Alergia from './components/props/Alergia'
import Producto from './components/props/Producto'
import Boton from './components/props/Boton'
import Etiqueta from './components/props/Etiqueta'


function App() {
  

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
      
      
      


    </>
  )
}

export default App
