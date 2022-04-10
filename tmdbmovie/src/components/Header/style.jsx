import styled from 'styled-components'

export const Head = styled.header`
    padding: 32px 0;
`

export const Container = styled.div`
    width: min(80%, 1200px);
    margin: 0 auto;
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Nav = styled.nav`
    background-color: #EAE1E1;
    margin: 24px 0px;
    h1{
        text-align: center;
        font-size: 2rem;
        padding: 16px 0 12px 0;
        color: #202827;
    }
`

export const Btn = styled.a`
        text-decoration: none;
        font-size: 1.1rem;
        color: #202827;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px 15px 12px 15px;
        font-weight: 800;
        background: linear-gradient(180deg, #81CBA8 0%, #09B5E1 100%);
        border-radius: 3px;
        background: linear-gradient(240deg, #81CBA8 0%, #09B5E1 100%);
        transition: .4s ease-out;
        transform: scale(1.03);
`