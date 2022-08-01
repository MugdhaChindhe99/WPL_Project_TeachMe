import React from 'react';
import TutorList from './TutorList';

const Modal = ({data, updateModal}) => {
    console.log(data)
    return(
        <div>
            <div className="cross" onClick = {(e)=>{
            e.stopPropagation()
            updateModal({
            ...data,
            display : false
            })
            }}><i class="fa-solid fa-xmark"></i></div>
            <img src={data.picture} className="teacherPic"/>
            <div className="datablock">
                <div className="teacherName">Hello my name is {data.name}.</div>
                <div className="teacherRating">I've been rated {data.rating} by the various students I've had worked with.</div>
                <div className="teacherFrom">I am from {data.from}.</div>
                <div className="desc">{data.disc}</div>
            </div>
        </div>
    )
}

export default Modal;