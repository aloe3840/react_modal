import { useState } from 'react'
import './modal.css'

//Modal컴포넌트를 만든 후 내보내기
export default function Modal({id, _header, _body, _footer, onClose}){

  return(
    <>
    {/* id값은 사용하는 곳에서 설정할 수 있게 ==> 매개변수
      컴포넌트의 매개변수 => porps, {} 직접 생성

      id값을 사용하는 곳에서 넣어줬으면 그것으로 설정하고
      안 넣었으면 'Modla'로 id 설정
    */}
      <div className='modal-component' id={id || 'Modal'} onClick={(e)=>{
        //console.log(e.target.className)
        if(e.target.className === 'modal-component'){
          onClose();
        }
      }}>
        <div className='modal-content'>
        <div className='modal-header'>
          {/* modal의 내용은 사용하는 곳에서 정하자 == 매개변수 */}
          <span className='close-modal-icon' onClick={onClose}>&times;</span>
          {_header}
        </div>
        <div className='modal-body'>
          {_body}
        </div>
        <div className='modal-footer'>
          {_footer}
        </div>
        </div>
      </div>
    </>
  )
}