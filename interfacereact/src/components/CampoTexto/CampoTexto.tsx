import './CampoTexto.css';

// Interface com as propriedades do input
interface InputProps {
  label: string;
  placeholder: string;
  type?: string; // o ? significa que é opcional
}

function CampoTexto({ label, placeholder, type = 'text' }: InputProps) {
  return (
    <div className="campo-container">
      <label className="campo-label">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="campo-input"
      />
    </div>
  );
}

export default CampoTexto;