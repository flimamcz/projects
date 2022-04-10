import { useState } from 'react'


function App() {
  // const [nome, setNome] = useState('')
  // const [email, setEmail] = useState('')

  const [form, setForm] = useState({ //Passamos como objeto
    nome: '',
    email: ''
  })

  function handleSubmit(event){
    event.preventDefault()
  }

  function handleChange({target}){
    const {id, value} = target
    setForm({...form, [id]: value}) //Passa como valor antigo e passa o valro de acordo com o id
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" value={form.nome} onChange={handleChange} id="nome"/>
      <label htmlFor="email">Email</label>
      <input type="email" value={form.email} onChange={handleChange} id="email"/>
      <button>Enviar</button>
      {form.nome}
    {form.email}
    </form>
  )
}

export default App
