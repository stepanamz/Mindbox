import React from "react"
import cn from 'classnames'
import {BsCheck2} from 'react-icons/bs'

const Check = ({isComleted}) => {
return(
    <div className='border rounded-2xl border-gray-400 w-7 h-7 mr-3 flex items-center justify-center'>
        {isComleted &&
    <BsCheck2 size={25} className='text-green-500'/>
        }
    </div>
)

}

export default Check