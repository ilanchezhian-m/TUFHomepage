
import './App.css';
import imageSrc from './assets/image.png';
import arrowmark from './assets/arrow.svg';
import youtube from './assets/youtube.svg';
// import vector from './assets/vector.svg'
function App() {
 

  return (
<div>
    <div className='flex items-center page-border'>
    <div className='flex-col text-left mr-10'>
      <p  className ="button-brown bg-brown-bg inline-block    " >Crafted by Top Engineers</p>

      <h1 className='text-orange-font text-4xl my-10'>ONE-STOP Platform!
        <br />
        <span className='text-white-font'> All Your Prep in One Place One plan.Zero Stress</span>
      </h1>
     
      <h1 className='text-grey-font mb-10'>The most trusted platform for engineers to up-skill and 
        crack tech Interviews in the least time</h1>
          <div className='flex flex-row mr-50'>
           <button className='button-black mr-5'>Explore offerings</button>
           <button className=' py-4 button '>  Buy Now</button>
          </div>
     </div>

   {/* image container */}
   <div className='flex flex-col  rounded-3xl thumbnail-container  white'>
    <div className='block mainimage'>
    <img  src={imageSrc} alt="" />
    <img className='youtube' src={youtube} alt="" />
    <button className='btn-watchnow'>Watch Now</button>
    </div>
      <div className='flex flex-row justify-between mt-5'>
        <h1 className='text-white text-xl '  >TUF+Demo- One Stop Prep Platform!</h1>
        <div className='arrowmark-img'>
        <img  src={arrowmark} alt="" />
        </div>
      </div>
   </div>
</div>


{/* login page */}
<div className=" flex justify-center items-center min-h-screen login-page">
  <div className="loginpage rounded-2xl p-8 w-full max-w-sm ">
    <h2 className="text-white text-3xl font-bold text-center mb-6">Login</h2>
    <form>
      <div className='username-wrapper my-3'>
      <input
        className=" w-full px-4 py-4 rounded-lg  text-[#737373]  placeholder-[#737373] focus:outline-none"
        type="text"
        name="username"
        placeholder="Username"
        autoComplete="username"
      />
      </div>
      <br />
      <div className='username-wrapper'>
      <input
        className=" w-full  px-4 py-4 rounded-lg  text-[#737373]  placeholder-[#737373] focus:outline-none"
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="current-password"
      />
      </div>
      <button
        type="submit"
        className="submit-btn mt-5 text-white  py-2 px-10  "
      >
        Submit
      </button>
    </form>
  </div>
</div>
   
</div>


  )
}

export default App
