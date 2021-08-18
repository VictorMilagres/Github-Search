import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled'
import { useHistory } from 'react-router-dom'

import img from '../../assets/GitHub.jpg'

export default function Home() {
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);
  const history = useHistory();

  function handlePesquisa(){
       axios.get(`https://api.github.com/users/${usuario}/repos`)
       .then(response => {
         const repositories = response.data;
         const repositoriesName = [];
         repositories.map((repository) => {
           repositoriesName.push(repository.name)
         });
         localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
         history.push('/repositories');
       })
      .catch(err => {
        setErro(true);
      });
      
  }
  return (
   <S.Container>
      <S.Content>
        <S.Img src={img}/>
        <S.Input type="text" className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type='button' onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      {erro ? <S.P>Usuário não encontrado, Tente Novamente!</S.P> : ''}
    </S.Container>
  );
}