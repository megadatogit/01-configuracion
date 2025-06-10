
import React, { useState } from 'react';

const App = () => {
  // Estado para controlar qué ejemplo mostrar
  const [ejemploActivo, setEjemploActivo] = useState(1);

  // Colores del tema
  const colores = {
    primario: '#3B82F6',
    secundario: '#60A5FA',
    fondo: '#F0F9FF',
    exito: '#10B981',
    error: '#EF4444',
    advertencia: '#F59E0B',
    texto: '#1E293B',
    textoClaro: '#64748B'
  };

  // EJEMPLO 1: CONTADOR SIMPLE
  const ContadorSimple = () => {
    // useState devuelve un array con 2 elementos:
    // 1. El valor actual del estado (contador)
    // 2. Una función para actualizar ese estado (setContador)
    const [contador, setContador] = useState(0);

    // Función para incrementar el contador
    const incrementar = () => {
      setContador(contador + 1); // Actualiza el estado sumando 1
    };

    // Función para resetear el contador
    const resetear = () => {
      setContador(0); // Vuelve el estado a 0
    };

    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4" style={{ color: colores.texto }}>
          Ejemplo 1: Contador Simple
        </h2>
        
        {/* Explicación */}
        <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: colores.fondo }}>
          <p className="text-sm" style={{ color: colores.textoClaro }}>
            <strong>¿Cómo funciona?</strong> useState(0) inicializa el contador en 0. 
            Cada vez que llamamos a setContador(), React re-renderiza el componente 
            con el nuevo valor.
          </p>
        </div>

        {/* Mostrar contador */}
        <div className="text-center mb-6">
          <div 
            className="text-6xl font-bold inline-block p-8 rounded-2xl transition-all duration-300"
            style={{ 
              backgroundColor: colores.fondo,
              color: contador > 0 ? colores.exito : contador < 0 ? colores.error : colores.primario
            }}
          >
            {contador}
          </div>
        </div>

        {/* Botones de control */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setContador(contador - 1)}
            className="px-6 py-3 rounded-lg font-medium text-white transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ backgroundColor: colores.error }}
          >
            Decrementar -
          </button>
          <button
            onClick={incrementar}
            className="px-6 py-3 rounded-lg font-medium text-white transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ backgroundColor: colores.exito }}
          >
            Incrementar +
          </button>
          <button
            onClick={resetear}
            className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ 
              backgroundColor: 'white',
              border: `2px solid ${colores.primario}`,
              color: colores.primario
            }}
          >
            Resetear
          </button>
        </div>

        {/* Código de ejemplo */}
        <div className="mt-6 p-4 bg-gray-900 rounded-lg overflow-x-auto">
          <pre className="text-sm text-gray-300">
{`// Declaración del estado
const [contador, setContador] = useState(0);

// Actualizar el estado
setContador(contador + 1);`}
          </pre>
        </div>
      </div>
    );
  };

  // EJEMPLO 2: FORMULARIO DE DATOS PERSONALES
  const FormularioDatos = () => {
    // Estados separados para cada campo del formulario
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [pais, setPais] = useState('');
    
    // Lista de países para el select
    const paises = ['México', 'España', 'Argentina', 'Colombia', 'Chile', 'Perú', 'Venezuela'];

    // Función para limpiar todos los campos
    const limpiarFormulario = () => {
      setNombre('');
      setEdad('');
      setPais('');
    };

    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4" style={{ color: colores.texto }}>
          Ejemplo 2: Formulario de Datos Personales
        </h2>

        {/* Explicación */}
        <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: colores.fondo }}>
          <p className="text-sm" style={{ color: colores.textoClaro }}>
            <strong>Manejo de múltiples estados:</strong> Cada input tiene su propio estado. 
            Cuando el usuario escribe, actualizamos el estado correspondiente y React 
            re-renderiza automáticamente la vista.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Formulario */}
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" style={{ color: colores.texto }}>
                Nombre:
              </label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ingresa tu nombre"
                className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" style={{ color: colores.texto }}>
                Edad:
              </label>
              <input
                type="number"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                placeholder="Ingresa tu edad"
                className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" style={{ color: colores.texto }}>
                País:
              </label>
              <select
                value={pais}
                onChange={(e) => setPais(e.target.value)}
                className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="">Selecciona un país</option>
                {paises.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            <button
              onClick={limpiarFormulario}
              className="w-full px-4 py-2 rounded-lg font-medium text-white transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: colores.advertencia }}
            >
              Limpiar Formulario
            </button>
          </div>

          {/* Datos en tiempo real */}
          <div className="p-6 rounded-lg" style={{ backgroundColor: colores.fondo }}>
            <h3 className="font-bold mb-4" style={{ color: colores.texto }}>
              Datos en Tiempo Real:
            </h3>
            <div className="space-y-2">
              <p><strong>Nombre:</strong> {nombre || 'No ingresado'}</p>
              <p><strong>Edad:</strong> {edad || 'No ingresada'}</p>
              <p><strong>País:</strong> {pais || 'No seleccionado'}</p>
            </div>
          </div>
        </div>

        {/* Código de ejemplo */}
        <div className="mt-6 p-4 bg-gray-900 rounded-lg overflow-x-auto">
          <pre className="text-sm text-gray-300">
{`// Múltiples estados
const [nombre, setNombre] = useState('');
const [edad, setEdad] = useState('');
const [pais, setPais] = useState('');

// Actualizar estado en onChange
onChange={(e) => setNombre(e.target.value)}`}
          </pre>
        </div>
      </div>
    );
  };

  // EJEMPLO 3: LISTA DE TAREAS (TODO LIST)
  const ListaTareas = () => {
    // Estado para almacenar todas las tareas (array de objetos)
    const [tareas, setTareas] = useState([
      { id: 1, texto: 'Aprender React', completada: false },
      { id: 2, texto: 'Practicar useState', completada: false }
    ]);
    
    // Estado para el input de nueva tarea
    const [nuevaTarea, setNuevaTarea] = useState('');
    
    // Estado para el filtro activo
    const [filtro, setFiltro] = useState('todas'); // todas, activas, completadas

    // Función para agregar una nueva tarea
    const agregarTarea = () => {
      if (nuevaTarea.trim()) {
        // Crear nueva tarea con ID único
        const tarea = {
          id: Date.now(), // Usar timestamp como ID único
          texto: nuevaTarea,
          completada: false
        };
        
        // Agregar la nueva tarea al array existente
        setTareas([...tareas, tarea]);
        
        // Limpiar el input
        setNuevaTarea('');
      }
    };

    // Función para marcar/desmarcar tarea como completada
    const toggleCompletada = (id) => {
      setTareas(tareas.map(tarea => 
        tarea.id === id 
          ? { ...tarea, completada: !tarea.completada }
          : tarea
      ));
    };

    // Función para eliminar una tarea
    const eliminarTarea = (id) => {
      setTareas(tareas.filter(tarea => tarea.id !== id));
    };

    // Filtrar tareas según el filtro activo
    const tareasFiltradas = tareas.filter(tarea => {
      if (filtro === 'activas') return !tarea.completada;
      if (filtro === 'completadas') return tarea.completada;
      return true; // 'todas'
    });

    // Contar tareas pendientes
    const tareasPendientes = tareas.filter(t => !t.completada).length;

    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4" style={{ color: colores.texto }}>
          Ejemplo 3: Lista de Tareas (Todo List)
        </h2>

        {/* Explicación */}
        <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: colores.fondo }}>
          <p className="text-sm" style={{ color: colores.textoClaro }}>
            <strong>Estado con arrays y objetos:</strong> Las tareas se almacenan como un array 
            de objetos. Usamos métodos como map(), filter() y spread operator (...) para 
            actualizar el estado inmutablemente.
          </p>
        </div>

        {/* Input para agregar tareas */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && agregarTarea()}
            placeholder="¿Qué necesitas hacer?"
            className="flex-1 px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button
            onClick={agregarTarea}
            className="px-6 py-2 rounded-lg font-medium text-white transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ backgroundColor: colores.primario }}
          >
            Agregar
          </button>
        </div>

        {/* Filtros */}
        <div className="flex gap-2 mb-4">
          {['todas', 'activas', 'completadas'].map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                filtro === f ? 'text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
              style={{ 
                backgroundColor: filtro === f ? colores.primario : 'transparent',
                border: `1px solid ${filtro === f ? colores.primario : '#E5E7EB'}`
              }}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Contador de tareas pendientes */}
        <div className="mb-4 text-sm" style={{ color: colores.textoClaro }}>
          {tareasPendientes} {tareasPendientes === 1 ? 'tarea pendiente' : 'tareas pendientes'}
        </div>

        {/* Lista de tareas */}
        <div className="space-y-2 mb-6">
          {tareasFiltradas.map((tarea) => (
            <div
              key={tarea.id}
              className="flex items-center gap-3 p-3 rounded-lg border hover:shadow-sm transition-all duration-200"
              style={{ 
                backgroundColor: tarea.completada ? '#F9FAFB' : 'white',
                borderColor: '#E5E7EB'
              }}
            >
              <input
                type="checkbox"
                checked={tarea.completada}
                onChange={() => toggleCompletada(tarea.id)}
                className="w-5 h-5 cursor-pointer"
                style={{ accentColor: colores.exito }}
              />
              <span
                className="flex-1"
                style={{
                  textDecoration: tarea.completada ? 'line-through' : 'none',
                  color: tarea.completada ? colores.textoClaro : colores.texto
                }}
              >
                {tarea.texto}
              </span>
              <button
                onClick={() => eliminarTarea(tarea.id)}
                className="px-3 py-1 text-sm rounded font-medium text-white transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: colores.error }}
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>

        {/* Código de ejemplo */}
        <div className="mt-6 p-4 bg-gray-900 rounded-lg overflow-x-auto">
          <pre className="text-sm text-gray-300">
{`// Estado con array de objetos
const [tareas, setTareas] = useState([
  { id: 1, texto: 'Aprender React', completada: false }
]);

// Agregar tarea (inmutable)
setTareas([...tareas, nuevaTarea]);

// Actualizar tarea (inmutable)
setTareas(tareas.map(tarea => 
  tarea.id === id 
    ? { ...tarea, completada: !tarea.completada }
    : tarea
));`}
          </pre>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Título principal */}
        <h1 className="text-4xl font-bold text-center mb-8" style={{ color: colores.texto }}>
          Ejemplos de useState en React
        </h1>

        {/* Navegación entre ejemplos */}
        <div className="flex justify-center gap-4 mb-8">
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => setEjemploActivo(num)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                ejemploActivo === num ? 'text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              style={{ 
                backgroundColor: ejemploActivo === num ? colores.primario : undefined,
                boxShadow: ejemploActivo === num ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : undefined
              }}
            >
              Ejemplo {num}
            </button>
          ))}
        </div>

        {/* Renderizar ejemplo activo */}
        {ejemploActivo === 1 && <ContadorSimple />}
        {ejemploActivo === 2 && <FormularioDatos />}
        {ejemploActivo === 3 && <ListaTareas />}
      </div>
    </div>
  );
};

export default App;

