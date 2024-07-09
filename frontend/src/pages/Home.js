import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ImageCard from '../components/ImageCard';
import SearchBar from '../components/SearchBar';
import { CircularProgress } from '@mui/material';
import { GetPosts } from '../api';

const Container = styled.div`
height:100%;
padding:30px 30px;
padding-bottom:50px;
display:flex;
flex-direction:column;
algin-items:center;
gap:20px;
background:${({theme}) => theme.bg }
@media (max-width:768px){
  padding: 6px 10px;
}
`;

const Headline = styled.div`
font-size: 34px;
font-weight: 500;
color: ${({theme}) => theme.text_primary};
display:flex;
align-items:center;
flex-direction:column;

@media (max-width:600px){
  font-size:22px;
}
`
const Span = styled.div`
font-size:30px;
font-weight:800;
color: ${({theme}) => theme.secondary};

@media (max-width:600px){
  font-size:20px;
}
`
const Wrapper = styled.div`
width: 100%;
background: red;
max-width:1400px;
padding:32px 0px;
display:flex;
justify-content: center;


`

const CardWrapper = styled.div`
display:grid;
gap:20px;


@media (min-width:1200px){
  grid-template-colums: repeat(4, 1fr);
}
@media(min-width:640px) and (max-width:1199px){
  grid-template-columns: repeat(3, 1fr)
}

@media (max-width:689px){
  grid-template-colums: repeat(2, 1fr);
}
`

function Home() {
  
   const [posts, setPosts] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");
   const [search, setSearch] = useState("");
   const [filteredPosts, setFilteredPosts] = useState([]);
    

  const getPosts = async () => {
     setLoading(true);
     await GetPosts()
     .then((res) => {
         setLoading(false);
         setPosts(res?.data?.data);
         setFilteredPosts(res?.data?.data)
     })
     .catch((error) => {
      setError(error?.response?.data?.message);
      setLoading(false);

     })
  }

  useEffect(() => {
    getPosts();
  },[])

 useEffect(() => {
    if(!search){
      setFilteredPosts(posts);
    }

    const SearchFilteredPosts = posts.filter((post) => {
      const promptMatch = post?.prompt?.toLowerCase().includes(search.toString().toLowerCase());
      const authorMatch = post?.name?.toLowerCase().includes(search.toString().toLowerCase());

      return promptMatch || authorMatch;
    });

    if(search){
      setFilteredPosts(SearchFilteredPosts);
    }
 }, [posts, search])

  const item = {
    photo: "https://images.pexels.com/photos/26409497/pexels-photo-26409497/free-photo-of-a-small-white-house-sits-in-the-middle-of-a-field.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    author: "Sanjay Rai",
    prompt:"Just a Card",

  }


  return (
    <Container>
      <Headline>Explore posts in the Community!
         <Span> » Generated with AI « </Span>
      </Headline>
      <SearchBar search={search} setSearch={setSearch}></SearchBar>
      <Wrapper>
        {error && <div style = {{color : "red"}}>{error}</div>}
        {loading ? (<CircularProgress></CircularProgress>) : (
          <CardWrapper>
            {filteredPosts.length === 0 ? <> No Posts Found </> : <>{filteredPosts.slice().reverse().map((item, index) => <ImageCard key = {index} item = {item}></ImageCard>)}</>}
          </CardWrapper>
        )}
      </Wrapper>
    </Container>
  )
}

export default Home