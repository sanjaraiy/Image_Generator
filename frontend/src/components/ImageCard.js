import React from 'react'
import styled from 'styled-components'
import {LazyLoadImage} from "react-lazy-load-image-component"
import { DownloadRounded } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import {saveAs} from 'file-saver';

const Card = styled.div`
position: relative;
display: flex;
border-radius:20px;
box-shadow: 1px 2px 40px 8px ${({theme}) => theme.back + 60};
cursor:pointer;
transition: all 0.3s ease;
&:hover {
    box-shadow: 1px 2px 40px 8px ${({theme}) => theme.back + 80};
    scale:1.05;
}

&:nth-child(7n+1){
    grid-column:auto/span 2;
    grid-row:auto/span 2;
}
`;

const HoverOverlay = styled.div`
opacity:0;
position:absolute;
top:0;
left:0;
right:0;
bottom:0;
display:flex;
flex-direction:column;
align-items:start;
gap:2px;
backgrop-filter:blur(2px);
background:rgba(0,0,0,0.5);
color:${({theme}) => theme.white};
translation: opacity 0.3s ease;
border-radius:6px;
justify-content: end;
padding:12px;

${Card}:hover & {
    opacity: 1;
}
`;

const Prompt = styled.div`
 font-weight:400px;
 font-size:15px;
 color:${({theme}) => theme.white};
`;

const Author = styled.div`
font-weight:600px;
display:flex;
gap:10px;
align-items:center;
font-size:15px;
color:${({theme}) => theme.white};
`;

function ImageCard({item}) {
  return (
    <Card>
        <LazyLoadImage 
        alt={item?.prompt}
        style={{borderRadius:"12px"}}
        width="100%"
        src={item?.photo}></LazyLoadImage>
        <HoverOverlay>
            <Prompt>{item?.prompt}</Prompt>  
            <div style={{
                width:"100%",
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
            }}>
            <Author>
               <Avatar sx={{width:"32px", height:"32px"}}>{item?.name[0]}</Avatar>
               {item?.author} 
            </Author>
            <DownloadRounded onClick={()=>saveAs(item?.photo,"download.jpg")} ></DownloadRounded>
            </div>
        </HoverOverlay>
    </Card>
  )
}

export default ImageCard