export default function Header({ count, onCartClick }) {
  return (
    <header>
      <h1>QuickCart</h1>
      <button onClick={onCartClick}>Cart ({count})</button>
    </header>
  );
}