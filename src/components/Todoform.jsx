import { useState } from 'react'

const Todoform = ({addTodo}) => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value||!category) return;
        addTodo(value,category)
        setValue("")
        setCategory("")
        console.log(value, category)
    }

    return (
        <div className='Todoform'>
            <h2>Criar Tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Digite o título'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type='subtmit'>Criar Tarefa</button>
            </form>
        </div>
    )
}

export default Todoform
