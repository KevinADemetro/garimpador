import { useState } from "react";

const produtoDefault = {
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
};

function App() {
  function handleAddProduto(produto) {
    setProdutos((produtos) => [...produtos, produto]);
  }
  const [produtos, setProdutos] = useState([]);
  return (
    <>
      <Formulario onAddProduto={handleAddProduto} />
      {produtos.length > 0 && <TabelaProdutos produtos={produtos} />}
    </>
  );
}

function Formulario({ onAddProduto }) {
  const [produto, setProduto] = useState(produtoDefault);

  function handleChange(e) {
    const { name, value } = e.target;
    setProduto((prev) => ({ ...prev, [name]: value }));
  }

  function calcularPercentualComissao(comissao, preco) {
    const precoNumero = parseFloat(preco.replace("R$", "").replace(",", "."));
    const comissaoNumero = parseFloat(
      comissao.replace("R$", "").replace(",", ".")
    );

    if (!precoNumero || !comissaoNumero) return 0;
    return (comissaoNumero / precoNumero) * 100;
  }

  function calcularCpcMedio(rangeCpc) {
    const arrayCpc =
      rangeCpc
        .match(/[\d,]+/g)
        ?.map((cpc) => parseFloat(cpc.replace(",", "."))) || [];

    if (arrayCpc.length === 0) return "";

    const soma = arrayCpc.reduce((acc, val) => acc + val, 0);
    const media = soma / arrayCpc.length;

    return media.toFixed(2);
  }

  function calcularCustoPorVenda(cpcMedio) {
    return (cpcMedio * 30).toFixed(2);
  }

  function calcularLucro(custoVenda, comissao) {
    return (comissao - custoVenda).toFixed(2);
  }

  function calcularCpcMaximo(comissao) {
    return (comissao / 30).toFixed(2);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const percentualComissao = calcularPercentualComissao(
      produto.comissao,
      produto.preco
    );
    const cpcMedio = calcularCpcMedio(produto.rangeCpc);
    const custoVenda = calcularCustoPorVenda(cpcMedio);
    const lucro = calcularLucro(custoVenda, produto.comissao);
    const cpcMaximo = calcularCpcMaximo(produto.comissao);
    const produtoAtualizado = {
      ...produto,
      id: crypto.randomUUID(),
      percentualComissao: percentualComissao,
      cpcMedio: cpcMedio,
      custoVenda: custoVenda,
      lucro: lucro,
      cpcMaximo: cpcMaximo,
    };

    onAddProduto(produtoAtualizado);
    setProduto(produtoDefault);
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
            <td>R${Number(produto.preco).toFixed(2)}</td>
            <td>R${Number(produto.comissao).toFixed(2)}</td>
            <td>R${Number(produto.custoVenda).toFixed(2)}</td>
            <td>R${Number(produto.lucro).toFixed(2)}</td>
            <td>{produto.percentualComissao}%</td>
            <td>{produto.rangeCpc}</td>
            <td>R${Number(produto.cpcMedio).toFixed(2)}</td>
            <td>R${Number(produto.cpcMaximo).toFixed(2)}</td>
            <td>{produto.qtdBuscasMes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
