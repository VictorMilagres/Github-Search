import styled from 'styled-components'

export const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const Content = styled.div`
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const Img = styled.img`
max-width: 30%;
`


export const Input = styled.input `
border: 1px solid #ddd;
height: 2.5rem;
width: 30%;
padding: 0 .5rem;
border-radius: .25rem 0 0 .25rem;

&:focus, &:active {
    outline: none;
    box-shadow: none;
}
` 


export const Button = styled.button `
height: 2.5rem;
border: 1px solid #000;
width: 31%;
background-color: #000;
color: #fff;
border-radius: 0.25rem;
margin-top: 1rem;

&:focus, &:active {
    outline: none;
    box-shadow: none;
}
`

export const P = styled.span `
display: block;
font-size: 1rem;
color: red;
font-weight: 600;
margin-top: 1rem;
`