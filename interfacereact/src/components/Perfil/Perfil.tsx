import './Perfil.css';

// Interface para o objeto usuário
interface Usuario {
  nome: string;
  idade: number;
  email: string;
}

// Interface para as props do componente
interface PerfilProps {
  usuario: Usuario;
}

function Perfil({ usuario }: PerfilProps) {
  return (
    <div className="perfil-container">
      <div className="perfil-avatar">
        {usuario.nome.charAt(0)}
      </div>
      <h3 className="perfil-nome">{usuario.nome}</h3>
      <p className="perfil-info">Idade: {usuario.idade} anos</p>
      <p className="perfil-email">{usuario.email}</p>
    </div>
  );
}

export default Perfil;