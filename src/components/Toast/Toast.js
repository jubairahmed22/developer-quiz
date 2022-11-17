import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Toast = () => {
    const diffToast = () => {
       toast("Successfully Done", { position: "top-center" });
        
    }
    return (
        <div>
            <div>

                <button className='btn4' onClick={diffToast}>Activity Completed</button>
            </div>

            <ToastContainer />
        </div>

    );
};



<Form>

{['checkbox'].map((type) => (
    <div key={`default-${options[0]}`} className="mb-3">
        <Form.Check

            type={type}
            onClick={diffToast()}
            id={`default-${options[0]}`}
            label={`default ${options[0]}`}
        />
    </div>
))}




{/* </Form>
<Form>
{['checkbox'].map((type) => (
    <div key={`default-${options[1]}`} className="mb-3">
        <Form.Check
            type={type}
            id={`default-${options[1]}`}
            label={`default ${options[1]}`}
        />
    </div>
))}
</Form>
<Form>
{['checkbox'].map((type) => (
    <div key={`default-${options[2]}`} className="mb-3">
        <Form.Check
            type={type}
            id={`default-${options[2]}`}
            label={`default ${options[2]}`}
        />
    </div>
))}
</Form>
<Form>
{['checkbox'].map((type) => (
    <div key={`default-${options[3]}`} className="mb-3">
        <Form.Check
            type={type}
            id={`default-${options[3]}`}
            label={`default ${options[3]}`}
        />
    </div>
))}
</Form> */}

export default Toast;
