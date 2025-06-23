// Import hooks from React
import { useContext } from "react";

// Import context
import { GlobalContext } from "../context/GlobalContext";

export default function TaskList() {

    const { tasks } = useContext(GlobalContext);

    // RENDER
    return (
        <>
            <h1>TASK LIST</h1>

            <table>
                <tr>
                    <th>Nome</th>
                    <th>Stato</th>
                    <th>Data di Creazione</th>
                </tr>
                {tasks.map(task => (
                    <tr key={task.id}>
                        <td>{task.title}</td>
                        <td>{task.status}</td>
                        <td>{new Date(task.createdAt).toLocaleDateString("it-IT")}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}


// Visualizzare l'elenco dei task in una tabella e ottimizzare il rendering con React.memo().
// Recuperare la lista dei task dal GlobalContext e mostrarla nella pagina TaskList.jsx.
// Creare un componente TaskRow.jsx, che rappresenta una singola riga della tabella e mostra
//  solo le proprietà title, status e createdAt (escludendo description).

// Applicare uno stile differente alla colonna status, assegnando i seguenti colori di sfondo alle celle in base al valore dello stato:
// "To do" → rosso
// "Doing" → giallo
// "Done" → verde

// Utilizzare React.memo() su TaskRow.jsx per ottimizzare le prestazioni ed evitare render inutili.