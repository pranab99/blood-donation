import * as React from 'react';
import {signupData }  from '../service/Data';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

function Signup() {
    const [name, setname] = React.useState('');
    const [age, setage] = React.useState('');
    const [gen, setgen] = React.useState('');
    const [bg, setbg] = React.useState('');
    const [email, setemail] = React.useState('');
    const [loc, setloc] = React.useState('');
    const [phone, setphone] = React.useState('');

    function name_ChangeHandeler(e){
        setname(e.target.value);
      }
      function age_ChangeHandeler(e){
        setage(e.target.value);
      }
      function gen_ChangeHandeler(e){
        setgen(e.target.value);
      }
      function bg_ChangeHandeler(e){
        setbg(e.target.value);
      }
      function  email_ChangeHandeler(e){
        setemail(e.target.value);
      }

      function  loc_ChangeHandeler(e){
        setloc(e.target.value);
      }
      function  phone_ChangeHandeler(e){
        setphone(e.target.value);
      }

      const val={
        
            "name": name,
            "age" : age,
            "gender":gen,
            "bloodgroup":bg,
            "email":email,
            "location":loc,
            "ph":phone
        
      }

    function submitChangeHandler(){
        let ret = signupData(val);
        console.log(ret);
        // window.location.reload();
        
      }
    return (
        <MDBContainer fluid>

            <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                            <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Want Blood at Urgency?</p>

                            <div className="d-flex flex-row align-items-center mb-4 ">
                                <MDBIcon fas icon="user me-3" size='lg' />
                                <MDBInput label='Your Name' id='form1' type='text' className='w-100' onChange={name_ChangeHandeler}/>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4 ">
                                <MDBIcon fas icon="user me-3" size='lg' />
                                <MDBInput label='Your Age' id='form1' type='text' className='w-100' onChange={age_ChangeHandeler}/>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4 ">
                                <MDBIcon fas icon="user me-3" size='lg' />
                                <MDBInput label='Your Gender' id='form1' type='text' className='w-100' onChange={gen_ChangeHandeler}/>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4 ">
                                <MDBIcon fas icon="user me-3" size='lg' />
                                <MDBInput label='Your Blood Group' id='form1' type='text' className='w-100' onChange={bg_ChangeHandeler}/>
                            </div>


                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="envelope me-3" size='lg' />
                                <MDBInput label='Your Email' id='form2' type='email' onChange={email_ChangeHandeler}/>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="envelope me-3" size='lg' />
                                <MDBInput label='Your Location' id='form2' type='text' onChange={loc_ChangeHandeler} />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="envelope me-3" size='lg' />
                                <MDBInput label='Phone' id='form2' type='text' onChange={phone_ChangeHandeler}/>
                            </div>




                            {/* <div className='mb-4'>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                            </div> */}

                            <MDBBtn className='mb-4' size='lg' onClick={submitChangeHandler} >Submit</MDBBtn>

                        </MDBCol>

                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage src='https://www.sharp.com/health-news/images/Blood-donation-myths-HN1221-Stock-844661710-Sized.png' fluid />
                        </MDBCol>

                    </MDBRow>
                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    );
}

export default Signup; 
