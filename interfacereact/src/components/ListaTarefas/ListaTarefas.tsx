import './ListaTarefas.css';

// Interface para cada tarefa individual
interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

// Interface para o array de tarefas
interface ListaTarefasProps {
  tarefas: Tarefa[];
}

function ListaTarefas({ tarefas }: ListaTarefasProps) {
  return (
    <div className="lista-container">
      <h2 className="lista-titulo">Minhas Tarefas</h2>
      <ul className="lista-itens">
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} className="tarefa-item">
            <input 
              type="checkbox" 
              checked={tarefa.concluida}
              readOnly
              className="tarefa-checkbox"
            />
            <span className={tarefa.concluida ? 'tarefa-concluida' : 'tarefa-pendente'}>
              {tarefa.titulo}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTarefas;