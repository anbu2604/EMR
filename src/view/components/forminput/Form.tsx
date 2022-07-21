import React from 'react'

const Form = () => {
  return (
    <div>Form</div>
  )
}

export default Form
// import { FormLabel } from '@mui/material';
// import TextField from '@mui/material/TextField';
// // import '../textinput/Input.styles.css';
// import '../forminput/Form.styles.css'

// type Props = {
//     onChange: (arg0: any) => void;
//     placeholder: any;
//     name: string;
//     value: string;
//     type: any;
//     id?: any;
//     label: string;
// };
// function Input(this: any, { onChange, name, placeholder, value, type }: Props) {


//     return (

//         <div>
//             {/* {babel && <label className="form-label" htmlFor='name'>{babel}</label>} */}

//             <Input

//                 // className="form-input"
//                 type={type}
//                 name={name}
//                 value={value}
//                 // variant="standard"
//                 placeholder={placeholder}
//                 onChange={(event: { target: { value: string; }; }) => onChange(event.target.value)}
//                 id="" label={''}                // label={FormLabel}
             
//             />



//         </div>





//     );
// }


// export default Input;















// // import React from "react";
// // import '../../components/forminput/Form.styles.css'
// // type InputElement = HTMLInputElement | HTMLTextAreaElement;
// // type InputChangeEvent = React.ChangeEvent<InputElement>;

// // interface TextFieldProps {
// //     value: any;
// //     onChange: (handlechange: any) => void;
// //     placeholder?: string;
// //     autoFocus?: boolean;
// //     name?: string;
// //     label?: any;
// //     type?: any;
// //     id:any;
// //     icon?: string;
// //     // &#xf007;&nbsp;&nbsp;
// //     // textarea?: boolean;
// // }

// // const TextField = React.forwardRef<InputElement, TextFieldProps>(
// //     ({ onChange, label, ...rest }) => {
// //         const InputElement = "input";
// //         return (

// //             <div >
// //                 {label && <label className="form-label" htmlFor='name'>{label}</label>}
// //                 <InputElement

// //                     className='form-input'
// //                     onChange={({ target: { value } }: InputChangeEvent) => onChange(value)}
// //                     // label={this.any}
// //                     {...rest}


// //                 />


// //             </div>


// //         );
// //     }
// // );

// // export default TextField;
