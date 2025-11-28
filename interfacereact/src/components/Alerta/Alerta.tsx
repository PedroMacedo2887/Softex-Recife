import './Alerta.css';

// Interface com combinação de tipos
interface AlertaProps {
  mensagem: string;
  tipo: 'sucesso' | 'erro' | 'aviso';
  mostrar: boolean;
}

function Alerta({ mensagem, tipo, mostrar }: AlertaProps) {
  // Se mostrar for false, não renderiza nada
  if (!mostrar) return null;

  return (
    <div className={`alerta alerta-${tipo}`}>
      <strong>{tipo.toUpperCase()}: </strong>
      {mensagem}
    </div>
  );
}

export default Alerta;