import { CircularProgress } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.dev`
flex:1;
padding: 16px;
display: flex;
min-height:300px;
gap: 16px;
flex-direction: column;
border:2px dashed ${({theme}) => theme.yellow};
color: ${({theme}) => theme.arrow + 80};
border-radius: 20px;
align-items: center;
justify-content: center;
`

const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
border-radius: 24px;
background: ${({theme}) => theme.black + 50};


`

function GeneratedImageCard({src, loading}) {
  return (
     <Container>
       {
         loading ? (
         <>
            <CircularProgress style={{color:"inherit", width: "24px", height:"24px" }}></CircularProgress>
            Generating your Image...{" "}
         </>
         ) : (
            <>
                {
                    src ? <Image src={src}></Image> : <> Write a prompt to generate image </>
                }
            </>
         )
       }
     </Container>
  )
}

export default GeneratedImageCard