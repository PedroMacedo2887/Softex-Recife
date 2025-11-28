
import './Button.css';

// Interface que define as propriedades do componente
interface ButtonProps {
  text: string;
  cor: string;
  onClick?: () => void;
}

// Componente funcional que recebe as props
function Button({ text, cor, onClick }: ButtonProps) {
  return (
    <button 
      className="btn"
      style={{ backgroundColor: cor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;