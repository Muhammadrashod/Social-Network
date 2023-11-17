import styled from "styled-components";


export const StyledInput = styled.input`
  border: 1px solid transparent;
  outline: 0;
  font-family: inherit;
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 2px solid ${(props) => props.theme.colors.disabledBgc};
  background-color: transparent;
  padding: 12px 15px;
  background-color:  ${(props) => props.theme.colors.bgc};
  border-radius: 10px;
  border: 1px solid transparent;

  transition: 200ms;

    &:last-child {
      margin-bottom: 40px;
    }

    &:is(:hover, :focus) {
    border-color:  ${(props) => props.theme.colors.primeColor};
  }

a {
  text-decoration: none;
  color: inherit;
  
  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: ${(props) => props.theme.colors.textColor};
  }
}

._no-select {
  -webkit-touch-callout: none; //? iOS Safari
  -webkit-user-select: none; //? Safari
  -khtml-user-select: none; //? Konqueror HTML
  -moz-user-select: none; //? Old versions of Firefox
  -ms-user-select: none; //? Internet Explorer/Edge
  user-select: none; //? Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox

  
@media (max-width: 730px) {
  input, button {
    padding: 10px 12px;
  }
}
}
`