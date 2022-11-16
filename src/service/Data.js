import axios from "axios";


export const signupData = async (val ) => {
    axios({
        method: 'post',
        url: 'http://localhost:3024/donorReg',
        data: {
          ...val,
        }
      });
    
};

export const signinData = async (val ) => {
    axios({
        method: 'post',
        url: 'http://localhost:3024/acceptorReg',
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