import { useState } from "react";

function App() {
  const [produtos, setProdutos] = useState([]);
  return (
    <>
      <Formulario />
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

  return (
    <div className="formulario">
      <h1>Formulário Produto</h1>
      <form>
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
        readOnly={readOnly}
      />
    </label>
  );
}

export default App;
