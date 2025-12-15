import "./Item.css";
    
function Item({ id, name, onDelete }) {
  return (
    <div className="meneger-card">
      <span className="meneger-card__name">{name}</span>
      <button
        className="meneger-card__delete-btn"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Item;
