import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  transform: translateY(calc(-100% + 2rem));

  div {
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &:last-child {
      background-color: var(--green);
      color: var(--shape);
    }
  }
`;