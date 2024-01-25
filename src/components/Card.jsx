import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({data,reference}) => {
  return (
 
     <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={1} className='relative flex-shrink-0 w-52 h-64 bg-zinc-900/90 rounded-[40px] text-white py-8 px-6 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
         <div className='flex items-center justify-between mb-3 py-3 px-6'>
            <h5>{data.filesize}</h5>
                  <span className='w-6 h-6 bg-zinc-600 flex items-center justify-center rounded-full'>
                  {data.close ? <IoClose/> :  <LuDownload size = ".7em" color='#fff'/ >}
                 
                  </span>
         </div>
         {
            data.tag.isOpen && (
               <div className={`tag w-full  ${data.tag.tagColor === "blue" ? "bg-blue-600": "bg-green-600"} py-4 flex items-center justify-center`}>
           <h3 className='text-sm font-semibold'> {data.tag.tagTitle}</h3>
         </div>
            )
         }
         
        </div>
     </motion.div>

  )
}

export default Card