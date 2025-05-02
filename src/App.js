function App() {
  return (
    <>
      <Formulario />
    </>
  );
}

function Formulario() {
  return (
    <div className="formulario">
      <h1>Formulário Produto</h1>
      <form>
        <div className="row-group">
          <label>
            Nome:
            <input type="text" name="" />
          </label>
          <label>
            Range CPC:
            <input type="text" name="" />
          </label>
          <label>
            Preço:
            <input type="text" name="" />
          </label>
          <label>
            Comissão:
            <input type="text" name="" />
          </label>
          <label>
            Quantidade de Buscas Mês:
            <input type="text" name="" />
          </label>
        </div>
        <div className="row-group">
          <label>
            CPC Médio:
            <input type="text" name="" />
          </label>
          <label>
            Percentual Comissão:
            <input type="text" name="" />
          </label>
          <label>
            Custo por Venda
            <input type="text" name="" />
          </label>
          <label>
            Lucro
            <input type="text" name="" />
          </label>
        </div>
      </form>
    </div>
  );
}

export default App;
