import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BarsArrowDownIcon, BeakerIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'


import './Quiz.css'

const Quiz = ({ ans }) => {


    const par = ans.options[0]
    const par2 = ans.options[1]
    const par3 = ans.options[2]
    const par4 = ans.options[3]


    const car = ans.correctAnswer

    const { question, options, correctAnswer } = ans


    console.log(par);

    const [nametwo, setName] = useState(ans)
    const [open, setOpen] = useState(false)





    function updateName(newName) {
        if (newName === car) {
            toast("Write answer", { position: "top-center" });
        }
        else {
            toast("Wrong answer", { position: "top-center" });
        }
    }

    return (



        <div>
            {/* <h1>{nametwo}</h1> */}


            <div className='quiz-card'>

                <h1>{question}</h1>

                <div>

                    {/* <button onClick={diffToast}>{options[1]}</button>
                    <button onClick={diffToast}>{options[2]}</button>
                    <button onClick={diffToast}>{options[3]}</button> */}
                    <div className='opt'>
                        <button onClick={() => updateName(par)}>{options[0]}</button>
                        <button onClick={() => updateName(par2)}>{options[1]}</button>


                        <button onClick={() => updateName(par3)}>{options[2]}</button>
                        <button onClick={() => updateName(par4)}>{options[3]}</button>
                    </div>
                    <ToastContainer />
                </div>

                <nav className='icon-text'>
                    <div onClick={() => setOpen(!open)} className=" center icon-one">


                        {
                            open ? <EyeIcon /> : <EyeSlashIcon />
                        }




                        {
                            open ? <h5 className='text'>{correctAnswer}</h5> : <h5 className='text d-none'>Quiz Answer</h5>
                        }


                    </div>

                </nav>


            </div>

        </div>

    );
};

export default Quiz;