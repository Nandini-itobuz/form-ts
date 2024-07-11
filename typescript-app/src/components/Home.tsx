import { useEffect, useState } from "react";
import Button from "./Button"
import { useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import axios from "axios";
import { JobApplication } from "../interfaces/jobApplication";
import TableContent from "./TableContent";

const Home = () => {
  const [show, setShow] = useState<Boolean>(false);
  const [allForms, setAllForms] = useState<JobApplication[]>([]);
  const [id, setId] = useState<string>('');
  const navigate = useNavigate();

  const handleViewStatus = (): void => {
    navigate(`/status?id=${id}`)
  }

  const getAllUser = async () : Promise<void> => {
    const response = await axios.get('http://localhost:3007/view-all');
    setAllForms(response.data.data);
  }

  useEffect(() => {
    getAllUser();
  },[allForms])


  return (
    <div className=" h-[100vh] w-[100vw] flex flex-col gap-3  py-5 items-center font-[forum]">
      <Button handleClick={() => { navigate('/form') }}>Add job Application</Button>
      <Button handleClick={() => { setShow(true) }}>View Status</Button>
      

      <div  className=" w-[90vw] sm:w-[70vw] xl:w-[40vw]">
        {allForms.map((ele) => (
          <TableContent firstName={ele.firstName} lastName={ele.lastName} id={ele._id}/>
        ))}
      </div>

      {show &&
        <div className=" flex gap-2 justify-center items-center bg-[#f5f5f5] px-2 w-[100vw] 
        max-w-[400px]">
          <h2>Enter your id :</h2>
          <input value={id} className="py-2 gap-1  bg-[#f5f5f5] border-0 outline-none" 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setId(e.target.value) }} type="text" />
          <button className=" bg-white px-4" onClick={handleViewStatus}>View</button>
          <div className=" hover:cursor-pointer" onClick={(): void => { setShow(false) }}><MdCancel />
          </div>
        </div>
      }
      
      
    </div>
  )
}

export default Home