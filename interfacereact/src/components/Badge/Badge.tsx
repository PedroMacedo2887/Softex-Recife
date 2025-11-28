import './Badge.css';

// Interface com tipos literais específicos
interface BadgeProps {
  texto: string;
  tipo: 'sucesso' | 'erro' | 'aviso' | 'info';
}

function Badge({ texto, tipo }: BadgeProps) {
  return (
    <span className={`badge badge-${tipo}`}>
      {texto}
    </span>
  );
}

export default Badge;