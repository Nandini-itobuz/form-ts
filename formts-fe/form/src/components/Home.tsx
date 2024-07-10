import Button from "./Button"
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();

  return (
    <div className=" h-[100vh] w-[100vw] flex flex-col gap-3 justify-center items-center font-[forum]">
        <Button handleClick={() => { navigate('/form')}}>Add job Application</Button>
        <Button handleClick={() => { navigate('/status')}}>View Status</Button>
    </div>
  )
}

export default Home