import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

import { Container } from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
  const data = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>
            Entradas
          </p>

          <img src={incomeImg} alt="Entradas"/>
        </header>
        <strong>
          R$ 1.000,00
        </strong>
      </div>
      <div>
        <header>
          <p>
            Saídas
          </p>

          <img src={outcomeImg} alt="Entradas"/>
        </header>
        <strong>
          - R$ 600,00
        </strong>
      </div>
      <div>
        <header>
          <p>
            Total
          </p>

          <img src={totalImg} alt="Total"/>
        </header>
        <strong>
          R$ 400,00
        </strong>
      </div>
    </Container>
  )
}