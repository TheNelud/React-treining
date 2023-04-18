import React from 'react';
import './../styles/modal.scss'


const ModalWindow = ({open, setOpen, children}) => (
    <div className={`overlay animated ${open ? 'show' : ''}`}>
        <div className="modal">
            <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
                <title />
                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            {children}
        </div>
    </div>
)
 


const Modal = () => {
    const [open, setOpen] = React.useState(false);


    return ( 
    <div className="ModalApp">
        <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
        {/* {open && <ModalWindow open={open} setOpen={setOpen} />} */}
        
        <ModalWindow open={open} setOpen={setOpen} >
            <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
            <h3>Это модальное окно</h3>
            <button>123</button>
        </ModalWindow>

        

        
    </div>
     );
}
 
export default Modal;