export default function Card({ openId }) {
    return (
        <div className="card">
            <h3>{openId ? openId.title : "Nessun linguaggio Selezionato"}</h3>
            <p>{openId ? openId.description : "Nessun linguaggio Selezionato"}</p>
        </div>
    )
}