import './CardProduto.css';

// Interface com as propriedades do produto
interface ProdutoProps {
  nome: string;
  preco: number;
  emEstoque: boolean;
}

function CardProduto({ nome, preco, emEstoque }: ProdutoProps) {
  return (
    <div className="card-produto">
      <h3 className="produto-nome">{nome}</h3>
      <p className="produto-preco">R$ {preco.toFixed(2)}</p>
      <span className={emEstoque ? 'status-estoque' : 'status-sem-estoque'}>
        {emEstoque ? '✓ Em estoque' : '✗ Indisponível'}
      </span>
    </div>
  );
}

export default CardProduto;