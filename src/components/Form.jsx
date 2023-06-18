import { useForm } from '../hooks/useForm'
export const Form = ({ closeModal }) => {
  const { handleSubmit, error, number, input, onChange } = useForm({ closeModal })

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='title'>Titulo</label>
      <div className='input-title'>
        <input onChange={(e) => onChange(e)} type='text' name='title' value={input} />
        <div className='number'>{number}</div>
      </div>
      <label htmlFor='title'>Descripción</label>
      <textarea name='description' />
      <button>Enviar</button>
      {error && <span>{error}</span>}
    </form>
  )
}
