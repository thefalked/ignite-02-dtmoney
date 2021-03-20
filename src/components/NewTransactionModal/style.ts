import styled from "styled-components";

import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid var(--input-border);
    background-color: var(--input);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    font-size: 1rem;
    font-weight: 600;
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--green);
    color: var(--shape);
    border-radius: 0.25rem;
    border: 0;
    margin-top: 1.5rem;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${darken(0.025, "#33CC95")};
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  red: "#E52E4D",
  blue: "#5429CC",
  green: "#33CC95",
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;

  border: 1px solid var(--input-border);
  border-radius: 0.25rem;

  background-color: ${props => props.isActive
    ? transparentize(0.9, colors[props.activeColor])
    : "transparent"
  };
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  transition: border-color 0.2s;
  
  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }

  &:hover {
    border-color: ${darken(0.2, "#D7D7D7")};
  }
`;
