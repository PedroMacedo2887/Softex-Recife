import './CardNoticia.css';

// Interface com todas as propriedades do tipo string
interface NoticiaProps {
  titulo: string;
  descricao: string;
  data: string;
  categoria: string;
}

function CardNoticia({ titulo, descricao, data, categoria }: NoticiaProps) {
  return (
    <article className="card-noticia">
      <span className="noticia-categoria">{categoria}</span>
      <h3 className="noticia-titulo">{titulo}</h3>
      <p className="noticia-descricao">{descricao}</p>
      <small className="noticia-data">{data}</small>
    </article>
  );
}

export default CardNoticia;