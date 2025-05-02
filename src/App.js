import { useState } from "react";

const produtosFake = [
  {
    nome: "Curso de Inglês Online",
    rangeCpc: "R$0,60 - R$4,20",
    preco: "R$197,00",
    comissao: "R$98,50",
    qtdBuscasMes: "12.000",
    cpcMedio: "R$1,50",
    percentualComissao: "50%",
    custoVenda: "R$15,00",
    lucro: "R$83,50",
    cpcMaximo: "R$1,90",
  },
  {
    nome: "Suplemento Natural para Ansiedade",
    rangeCpc: "R$0,80 - R$5,50",
    preco: "R$147,00",
    comissao: "R$73,50",
    qtdBuscasMes: "9.500",
    cpcMedio: "R$1,70",
    percentualComissao: "50%",
    custoVenda: "R$18,00",
    lucro: "R$55,50",
    cpcMaximo: "R$2,10",
  },
  {
    nome: "E-book de Receitas Fit",
    rangeCpc: "R$0,40 - R$2,80",
    preco: "R$49,90",
    comissao: "R$34,93",
    qtdBuscasMes: "5.000",
    cpcMedio: "R$0,90",
    percentualComissao: "70%",
    custoVenda: "R$7,00",
    lucro: "R$27,93",
    cpcMaximo: "R$1,10",
  },
  {
    nome: "Curso de Edição de Vídeo com CapCut",
    rangeCpc: "R$0,50 - R$3,50",
    preco: "R$97,00",
    comissao: "R$48,50",
    qtdBuscasMes: "7.800",
    cpcMedio: "R$1,20",
    percentualComissao: "50%",
    custoVenda: "R$10,00",
    lucro: "R$38,50",
    cpcMaximo: "R$1,50",
  },
  {
    nome: "Guia de Investimentos para Iniciantes",
    rangeCpc: "R$0,70 - R$4,80",
    preco: "R$159,00",
    comissao: "R$79,50",
    qtdBuscasMes: "6.300",
    cpcMedio: "R$1,60",
    percentualComissao: "50%",
    custoVenda: "R$12,00",
    lucro: "R$67,50",
    cpcMaximo: "R$1,90",
  },
].map((produto) => ({
  ...produto,
  id: crypto.randomUUID(),
}));

function App() {
  const [produtos, setProdutos] = useState(produtosFake);
  return (
    <>
      <Formulario />
      <TabelaProdutos produtos={produtos} />
    </>
  );
}

function Formulario() {
  const [produto, setProduto] = useState(
    useState({
      nome: "",
      rangeCpc: "",
      preco: "",
      comissao: "",
      qtdBuscasMes: "",
      cpcMedio: "",
      percentualComissao: "",
      custoVenda: "",
      lucro: "",
      cpcMaximo: "",
    })
  );

  function handleChange(e) {
    const { name, value } = e.target;
    setProduto((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="formulario">
      <h1>Formulário Produto</h1>
      <form onSubmit={handleSubmit}>
        <div className="row-group">
          <Campo value={produto.nome} onChange={handleChange} name="nome">
            Nome:
          </Campo>
          <Campo
            value={produto.rangeCpc}
            onChange={handleChange}
            name="rangeCpc"
          >
            Range CPC:
          </Campo>

          <Campo onChange={handleChange} value={produto.preco} name="preco">
            Preço:
          </Campo>
          <Campo
            onChange={handleChange}
            value={produto.comissao}
            name="comissao"
          >
            Comissão:
          </Campo>
          <Campo
            onChange={handleChange}
            value={produto.qtdBuscasMes}
            name="qtdBuscasMes"
          >
            Quantidade de Buscas Mês:
          </Campo>
        </div>
        <div className="row-group">
          <Campo
            onChange={handleChange}
            value={produto.cpcMedio}
            name="cpcMedio"
            readOnly={true}
          >
            CPC Médio:
          </Campo>
          <Campo
            onChange={handleChange}
            value={produto.percentualComissao}
            name="percentualComissao"
            readOnly={true}
          >
            Percentual Comissão:
          </Campo>
          <Campo
            onChange={handleChange}
            value={produto.custoVenda}
            name="custoVenda"
            readOnly={true}
          >
            Custo por Venda
          </Campo>
          <Campo
            onChange={handleChange}
            value={produto.lucro}
            name="lucro"
            readOnly={true}
          >
            Lucro
          </Campo>
          <Campo
            onChange={handleChange}
            value={produto.cpcMaximo}
            name="cpcMaximo"
            readOnly={true}
          >
            CPC Máximo
          </Campo>
        </div>
        <button>Adicionar</button>
      </form>
    </div>
  );
}

function Campo({ children, value, onChange, name, readOnly = false }) {
  return (
    <label>
      {children}
      <input
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        disabled={readOnly}
        readOnly={readOnly}
      />
    </label>
  );
}

function TabelaProdutos({ produtos }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Preço</th>
          <th>Comissão</th>
          <th>Custo por Venda</th>
          <th>Lucro</th>
          <th>% Comissão</th>
          <th>Range CPC</th>
          <th>CPC Médio</th>
          <th>CPC Máximo</th>
          <th>Qtde Buscas Mês</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((produto) => (
          <tr key={produto.id}>
            <td className="txt-left">{produto.nome}</td>
            <td>{produto.preco}</td>
            <td>{produto.comissao}</td>
            <td>{produto.custoVenda}</td>
            <td>{produto.lucro}</td>
            <td>{produto.percentualComissao}</td>
            <td>{produto.rangeCpc}</td>
            <td>{produto.cpcMedio}</td>
            <td>{produto.cpcMaximo}</td>
            <td>{produto.qtdBuscasMes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
