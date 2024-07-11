
import { MdEdit } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
import { FC } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface TableContent {
	firstName: string;
	id?: string;
	lastName: string;
}

const TableContent: FC<TableContent> = ({ firstName, lastName, id }) => {

	const navigate = useNavigate();
	const handleEdit = () => {
		navigate(`/form?id=${id}`)
	}

	const handleDelete = async (): Promise<void> => {
		const response = await axios.delete(`http://localhost:3007/delete-form/${id}`);
	}

	return (
		<div className=' my-2 grid grid-cols-12 bg-[#f5f5f5] justify-center items-center lg:w-[100%] px-3 py-1 '>
			<span className=" col-span-3">{firstName} {lastName}</span>
			<span className=" col-span-5">{id}</span>
			<span className=" col-span-2 hover:cursor-pointer" onClick={() => { handleEdit() }}><MdEdit /></span>
			<span className=" col-span-2 hover:cursor-pointer" onClick={() => { handleDelete() }}><MdDeleteSweep /></span>
		</div>
	)
}

export default TableContent