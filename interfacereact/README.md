# 🎨 Componentes React + TypeScript

Um projeto demonstrativo de componentes React reutilizáveis desenvolvidos com TypeScript, showcasing boas práticas de desenvolvimento frontend moderno.

## 📋 Sobre o Projeto

Este projeto apresenta uma coleção de 8 componentes React essenciais, construídos com TypeScript para garantir type safety e melhor experiência de desenvolvimento. Cada componente é independente, reutilizável e totalmente tipado.

## ✨ Componentes Disponíveis

### 1. **Button** - Botão Customizável
Botões com cores personalizáveis e tratamento de eventos.
- ✅ Props customizáveis (texto, cor)
- ✅ Estilização dinâmica

### 2. **CardProduto** - Card de Produto
Exibição elegante de informações de produtos.
- ✅ Nome do produto
- ✅ Preço formatado
- ✅ Indicador de estoque

### 3. **CampoTexto** - Input de Texto
Campos de entrada com labels e tipos variados.
- ✅ Suporte para diferentes tipos (text, email, password)
- ✅ Placeholders customizáveis
- ✅ Labels descritivos

### 4. **Perfil** - Perfil de Usuário
Componente para exibição de dados do usuário.
- ✅ Nome, idade e email
- ✅ Layout limpo e organizado

### 5. **ListaTarefas** - Lista de Tarefas
Gerenciamento visual de tarefas.
- ✅ Marcação de tarefas concluídas
- ✅ Lista dinâmica
- ✅ Interface intuitiva

### 6. **CardNoticia** - Card de Notícia
Exibição de notícias com categorização.
- ✅ Título e descrição
- ✅ Data de publicação
- ✅ Categoria

### 7. **Badge** - Badges de Status
Indicadores visuais coloridos.
- ✅ 4 tipos: sucesso, erro, aviso, info
- ✅ Cores semânticas

### 8. **Alerta** - Alertas Contextuais
Mensagens de feedback ao usuário.
- ✅ Tipos: sucesso, erro, aviso
- ✅ Exibição condicional
- ✅ Design responsivo

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool e dev server
- **CSS3** - Estilização moderna e responsiva

## 📦 Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre no diretório
cd nome-do-projeto

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🎯 Como Usar

Após iniciar o projeto, você verá uma página com todos os componentes organizados em seções. Cada seção demonstra um componente diferente com exemplos práticos de uso.

### Exemplo de uso de um componente:

```tsx
import Button from './components/Button/Button';

function MeuApp() {
  return (
    <Button text="Clique Aqui" cor="#3498db" />
  );
}
```

## 📱 Responsividade

O projeto é totalmente responsivo, com breakpoints para:
- 📱 Mobile: até 480px
- 📱 Tablet: até 768px
- 💻 Desktop: acima de 768px

## 🎨 Estrutura do Projeto

```
src/
├── components/
│   ├── Button/
│   ├── CardProduto/
│   ├── CampoTexto/
│   ├── Perfil/
│   ├── ListaTarefas/
│   ├── CardNoticia/
│   ├── Badge/
│   └── Alerta/
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```


## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👤 Autor

Desenvolvido para aprendizado e demonstração de componentes React.

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!
