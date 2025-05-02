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
  return (
    <div className="formulario">
      <h1>Formulário Produto</h1>
      <form>
        <div className="row-group">
          <label>
            Nome:
            <input
              type="text"
              value={produto.nome}
              onChange={(e) => setProduto({ ...produto, nome: e.target.value })}
            />
          </label>
          <label>
            Range CPC:
            <input
              type="text"
              value={produto.rangeCpc}
              onChange={(e) =>
                setProduto({ ...produto, rangeCpc: e.target.value })
              }
            />
          </label>
          <label>
            Preço:
            <input
              type="text"
              value={produto.preco}
              onChange={(e) =>
                setProduto({ ...produto, preco: e.target.value })
              }
            />
          </label>
          <label>
            Comissão:
            <input
              type="text"
              value={produto.comissao}
              onChange={(e) =>
                setProduto({ ...produto, comissao: e.target.value })
              }
            />
          </label>
          <label>
            Quantidade de Buscas Mês:
            <input
              type="text"
              value={produto.qtdBuscasMes}
              onChange={(e) =>
                setProduto({ ...produto, qtdBuscasMes: e.target.value })
              }
            />
          </label>
        </div>
        <div className="row-group">
          <label>
            CPC Médio:
            <input type="text" value={produto.cpcMedio} />
          </label>
          <label>
            Percentual Comissão:
            <input type="text" value={produto.percentualComissao} />
          </label>
          <label>
            Custo por Venda
            <input type="text" value={produto.custoVenda} />
          </label>
          <label>
            Lucro
            <input type="text" value={produto.lucro} />
          </label>
          <label>
            CPC Máximo
            <input type="text" value={produto.cpcMaximo} />
          </label>
        </div>
      </form>
    </div>
  );
}

export default App;
