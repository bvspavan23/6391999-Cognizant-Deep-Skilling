export default function Button({ isLoggedIn, onLoginToggle }) {
  return (
    <button onClick={onLoginToggle}>
      {isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
}
