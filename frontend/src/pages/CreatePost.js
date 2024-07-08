import React, { useState } from 'react'
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
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const [post, setPost] = useState({
    name: "",
    prompt: "",
    photo: "",
  })

  return (
    <Container>
       <Wrapper>
         <GenerateImageForm 
            post={post} 
            setPost={setPost} 
            createPostLoading = {createPostLoading } 
            generateImageLoading={generateImageLoading} 
            setGenerateImageLoading={setGenerateImageLoading} 
            setCreatePostLoading={setCreatePostLoading}
         ></GenerateImageForm>
         <GeneratedImageCard 
            src={post?.photo} 
            author={post?.author} 
            prompt={post?.prompt} 
            loading = {generateImageLoading}
         ></GeneratedImageCard>
       </Wrapper>
    </Container>
  )
}

export default CreatePost