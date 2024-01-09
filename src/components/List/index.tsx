import style from './List.module.scss';

const tasks = [{
    task: 'React',
    time: '01:30:00'
  },
  {
    task: 'Java',
    time: '01:30:00'
  },
  {
    task: 'Inglês',
    time: '01:30:00'
}]

export default function List() {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={style.item}>
            <h3>{task.task}</h3>
            <span>{task.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
} 