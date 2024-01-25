import React,{useRef, useState} from 'react';
import Card from './card';

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {desc:"This is dummy text", filesize:".9 mb",close:false,tag:{
      isOpen:true, tagTitle: "Download Now", tagColor: "green"}
    },
    {desc:"This is dummy text", filesize:".9 mb",close:false,tag:{
      isOpen:true, tagTitle: "Upload", tagColor: "blue"}
    },
    {desc:"This is dummy text", filesize:".9 mb",close:false,tag:{
      isOpen:false, tagTitle: "Download Now", tagColor: "green"}
    },
    {desc:"This is dummy text on more", filesize:"1 GB",close:true,tag:{
      isOpen:true, tagTitle: "Upload Now", tagColor: "green"}
    },
  ]
  return (

   <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-warap p-5'>
   {data.map((item,index)=>(
   <Card data={item} reference={ref}/>
   ))}
   </div>
  )
}

export default Foreground