import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div `
width:100%;
max-width: 991px;
margin: 0 auto;
`

export const Title = styled.h1 `
text-align: center;
font-size: 2rem;
font-family: sans-serif;
color: #333;
`

export const List = styled.ul `
list-style: none;
padding: none;
font-family: sans-serif;
margin-top: 5rem;
`

export const ListItem = styled.li `
margin: 1rem 0;
background: #000;
color: #fff;
padding: .5rem;
border-radius: 0.25rem;
`

export const LinkHome = styled(Link) `
display: block;
width: 6rem;
text-align: center;
margin: 2rem auto;
background-color: #000;
padding: .5rem 0;
color: #fff;
text-decoration: none;
border-radius: 0.25rem;
`