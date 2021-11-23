import styled from 'styled-components'

export const AppContainer = styled.div`
    width: 85%;
    height: 100vh;
    display: flex;
    padding: 1.25em 0;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    @media screen and (min-width: 1440px){
        width: 100%;
        padding: 2.25em 3em;
    }
`

export const ButtonsWrapper = styled.div`
  @media screen and (min-width: 1024px){
        align-self: flex-end;
    }
}
`
