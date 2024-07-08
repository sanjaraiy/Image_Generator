import React from 'react'
import styled from 'styled-components'
import GenerateImageForm from '../components/GenerateImageForm'
import GeneratedImageCard from '../components/GeneratedImageCard';

const Container = styled.div`
height:100%;
padding:30px 30px;
padding-bottom:50px;
display:flex;
flex-direction:column;
algin-items:center;
justify-content:center;
gap:20px;
background:${({theme}) => theme.bg }
@media (max-width:768px){
  padding: 6px 10px;
}
`;

const Wrapper = styled.div`

max-width:1400px;
gap:8%;
width:100%;
height:fit-content;
display:flex;
justify-content: center;
@media (max-width: 768px){
   flex-direction:column;
}
`


function CreatePost() {



  return (
    <Container>
       <Wrapper>
         <GenerateImageForm></GenerateImageForm>
         <GeneratedImageCard loading></GeneratedImageCard>
       </Wrapper>
    </Container>
  )
}

export default CreatePost