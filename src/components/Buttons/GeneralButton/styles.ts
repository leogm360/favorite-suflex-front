import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 0.6rem 2rem;
  border: none;
  outline: none;
  color: var(--color-tertiary);
  font-size: 0.85rem;
  font-weight: bold;
  position: relative;
  z-index: 0;
  border-radius: 5px;

  ::before {
    content: "";
    background: linear-gradient(
      45deg,
      #006203,
      #30cb00,
      #48ff00,
      #4ae54a,
      #a4fba6,
      #30cb00,
      #48ff00,
      #4ae54a,
      #a4fba6,
      #006203
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  @keyframes glowing-button-85 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  ::after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--color-primary);
    left: 0;
    top: 0;
    border-radius: 5px;
    transition: 0.5s ease-in-out;
  }

  :active::after {
    background: var(--color-primary);
    opacity: 0.8;
    transition: 0.5s ease-in-out;
    filter: blur(2.5px);
  }
`;
