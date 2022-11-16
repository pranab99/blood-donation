import axios from "axios";


export const signupData = async (val ) => {
    axios({
        method: 'post',
        url: '/user/12345',
        data: {
          ...val,
        }
      });
    
};

export const signinData = async (val ) => {
    axios({
        method: 'post',
        url: '/user/12345',
        data: {
          ...val,
        }
      });
    
};


// export const signinData = async ( name,age,gen,bg,email,loc,phone) => {
    
//     let data ="name=" + name+ "&age=" + age +  "&gender=" + gen + "&bloodgroup=" + bg + "&email=" + email + "&location=" + loc + "&ph=" + phone;
    
    
//     let response = await axios.post("http://localhost:8080/test2//UpdateDATA?" + data)
//     // .then()
//     // return response.data;
//     console.log(data);
// };