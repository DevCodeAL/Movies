import React, { useState } from "react";

type UserForm = {
    username: string;
    email: string;
    password: string | number;
};

const Login = ()=> {
  const [formData, setIsFormData] = useState<UserForm>({username: "", email: "", password: ""});
  


  // Form Handle Input Change
  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
      const { name, value } = e.target;
      setIsFormData({
        ...formData,
        [name]: value,
      });
  };


  // Form Handle Submission
  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        if(!formData.username || !formData.email || !formData.password){
            alert("Required to fill the fields!");
        };

        try{                   // Sample function for API submission
           setIsFormData({username: "", email: "", password: ""});

        }catch(error){
           
        }
  };

    return(
        <>
         <main className="relative flex justify-center items-center bg-black w-full min-h-screen z-10">
            <section>
                    {/* <h1 className="text-center text-white font-bold">Home</h1> */}

                 <form onSubmit={HandleSubmit}>
                   <div className="flex  flex-col gap-4 border-1 p-8 border-gray-600 rounded-2xl">
                        <h1 className="text-white font-bold text-2xl text-center">Sign In</h1>
                     <div>
                        <label htmlFor="username" className="text-white font-bold">Username:</label>
                        <input type="text" name="username" value={formData.username} onChange={HandleChange} className="text-white border border-gray-600 rounded w-full mt-1.5 p-1 focus:outline-red-700 focus:outline-2"/>
                     </div>
                     <div> 
                         <label htmlFor="email" className="text-white font-bold">Email:</label>
                         <input type="email" name="email" value={formData.email} onChange={HandleChange} className="border text-white  border-gray-600 rounded w-full mt-1.5 p-1 focus:outline-red-700 focus:outline-2"/>
                     </div>
                     <div>
                         <label htmlFor="password" className="text-white font-bold">Password:</label>
                        <input type="text" name="password" value={formData.password} onChange={HandleChange} className="border text-white  border-gray-600 rounded w-full mt-1.5 p-1 focus:outline-red-700 focus:outline-2"/>
                     </div>

                     <div className="flex justify-center">
                        <button type="submit" className="text-white font-medium bg-red-700 px-6 py-1 rounded transition delay-150 duration-300 ease-in-out hover:bg-red-600 hover:scale-110 focus:outline-red-700 focus:outline-2">Sign In</button>
                     </div>
                  </div>
                 </form> 
            </section>
         </main>
        </>
    )
};

export default Login;
