import Button from './components/Button/Button';
import CardProduto from './components/CardProduto/CardProduto';
import CampoTexto from './components/CampoTexto/CampoTexto';
import Perfil from './components/Perfil/Perfil';
import ListaTarefas from './components/ListaTarefas/ListaTarefas';
import CardNoticia from './components/CardNoticia/CardNoticia';
import Badge from './components/Badge/Badge';
import Alerta from './components/Alerta/Alerta';
import "./index.css";
import './App.css';


function App() {
  // Dados de exemplo para o perfil
  const usuario = {
    nome: 'Maria Silva',
    idade: 25,
    email: 'maria@email.com'
  };

  // Dados de exemplo para lista de tarefas
  const tarefas = [
    { id: 1, titulo: 'Estudar React', concluida: true },
    { id: 2, titulo: 'Fazer atividade TypeScript', concluida: false },
    { id: 3, titulo: 'Revisar componentes', concluida: false }
  ];

  return (
    <div className="app-container">
      <h1 className="app-titulo">
        Componentes React + TypeScript
      </h1>

      <div className="app-conteudo">
        {/* Seção 1: Botões */}
        <section className="secao">
          <h2 className="secao-titulo">1. Botões</h2>
          <div className="secao-flex">
            <Button text="Clique Aqui" cor="#3498db" />
            <Button text="Download" cor="#2ecc71" />
            <Button text="Deletar" cor="#e74c3c" />
          </div>
        </section>

        {/* Seção 2: Cards de Produto */}
        <section className="secao">
          <h2 className="secao-titulo">2. Cards de Produto</h2>
          <div className="secao-flex">
            <CardProduto nome="Notebook" preco={2500.00} emEstoque={true} />
            <CardProduto nome="Mouse Gamer" preco={150.00} emEstoque={false} />
            <CardProduto nome="Teclado" preco={350.00} emEstoque={true} />
          </div>
        </section>

        {/* Seção 3: Campos de Texto */}
        <section className="secao">
          <h2 className="secao-titulo">3. Campos de Texto</h2>
          <div className="secao-form">
            <CampoTexto label="Nome" placeholder="Digite seu nome" />
            <CampoTexto label="Email" placeholder="seu@email.com" type="email" />
            <CampoTexto label="Senha" placeholder="********" type="password" />
          </div>
        </section>

        {/* Seção 4: Perfil de Usuário */}
        <section className="secao">
          <h2 className="secao-titulo">4. Perfil de Usuário</h2>
          <Perfil usuario={usuario} />
        </section>

        {/* Seção 5: Lista de Tarefas */}
        <section className="secao">
          <h2 className="secao-titulo">5. Lista de Tarefas</h2>
          <ListaTarefas tarefas={tarefas} />
        </section>

        {/* Seção 6: Card de Notícia */}
        <section className="secao">
          <h2 className="secao-titulo">6. Card de Notícia</h2>
          <CardNoticia 
            titulo="Nova versão do React lançada!"
            descricao="O React 19 traz novidades incríveis para desenvolvimento web."
            data="27 de novembro de 2025"
            categoria="Tecnologia"
          />
        </section>

        {/* Seção 7: Badges */}
        <section className="secao">
          <h2 className="secao-titulo">7. Badges</h2>
          <div className="secao-flex">
            <Badge texto="Novo" tipo="sucesso" />
            <Badge texto="Erro" tipo="erro" />
            <Badge texto="Atenção" tipo="aviso" />
            <Badge texto="Info" tipo="info" />
          </div>
        </section>

        {/* Seção 8: Alertas */}
        <section className="secao">
          <h2 className="secao-titulo">8. Alertas</h2>
          <Alerta 
            mensagem="Operação realizada com sucesso!" 
            tipo="sucesso" 
            mostrar={true} 
          />
          <Alerta 
            mensagem="Ocorreu um erro ao processar sua solicitação." 
            tipo="erro" 
            mostrar={true} 
          />
          <Alerta 
            mensagem="Atenção: Verifique os dados antes de continuar." 
            tipo="aviso" 
            mostrar={true} 
          />
        </section>
      </div>
    </div>
  );
}

export default App;