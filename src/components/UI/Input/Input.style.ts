import styled from "styled-components";

export const InputContainer = styled.div`
  margin-bottom: 20px;
`

export const ErrorMessage = styled.p`
 color: ${(props) => props.theme.colors.red};
 margin-top: 10px;
`

export const StyledInput = styled.input`
  border: 1px solid transparent;
  outline: 0;
  font-family: inherit;
  display: block;
  width: 100%;
  border: 2px solid ${(props) => props.theme.colors.disabledBgc};
  background-color: transparent;
  padding: 12px 15px;
  background-color:  ${(props) => props.theme.colors.bgc};
  border-radius: 10px;

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

@media (max-width: 730px) {
    padding: 10px 12px;
}

`