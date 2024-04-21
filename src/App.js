import logo from './logo.svg';
import './App.css';
import Modal from './components/modal-popup/modal';
import { useState } from 'react';
//index이름은 폴더까지만 import해도됨

function App() {
  let [showModal, setShowModal] = useState(false) //true면 뜨고 false면 안 뜨게
  function modalClose(){
    //모달을 열기 위해선 setShowModal(true)를 함
    //모달을 닫기 위해선?
    setShowModal(null)
  }

  return (
    <div className="App">
      <button onClick={()=>{
        setShowModal(true)
      }}>모달창 열기</button>
      {
        showModal && <Modal id={'modal-1'} onClose={modalClose} _body={<div>모달창 바디</div>} _header={<h4>Title</h4>} _footer={<p>footer</p>}/>
      }
    </div>
  );
}

export default App;
