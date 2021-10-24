import React, {useState} from 'react';
import Modal from "./modal";
import Draggable from "./dragSB";
import "./index.css"

const ModalApp = () => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className='Popup'>
            <button id="btn" className="v60801_11" onClick={() => setModalActive(true)}><span className="v60801_12">Выбор СБ </span></button>
            <div className='ModalApp'>
                <Modal active={modalActive} setActive={setModalActive} >
                    <Draggable />
                </Modal>
            </div>
        </div>
    )
}
export default ModalApp