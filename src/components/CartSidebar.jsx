export default function CartSidebar({
  cart,
  isOpen,
  onClose,
  onUpdateQuantity,
  onRemoveItem
}) {
  return (
    <div style={{
      position: "fixed",
      right: isOpen ? 0 : "-300px",
      top: 0,
      width: "300px",
      height: "100%",
      background: "#eee",
      transition: "0.3s",
      padding: "10px"
    }}>
      <button onClick={onClose}>Close</button>

      {cart.length === 0 ? <p>Empty Cart</p> :
        cart.map(item => (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <p>₹{item.price}</p>
            <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
            {item.quantity}
            <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
            <button onClick={() => onRemoveItem(item.id)}>Remove</button>
          </div>
        ))
      }
    </div>
  );
}