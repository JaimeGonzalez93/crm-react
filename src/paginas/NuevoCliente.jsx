import Formulario from '../components/Formulario'

const NuevoCliente = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">Utiliza este formulario para editar datos de un cliente</p>

      <Formulario/>
    </>
  )
}

export default NuevoCliente