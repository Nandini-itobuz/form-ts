
import { MdEdit } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface TableContent {
	firstName: string;
	id?: string;
	lastName: string;
	age: number;
	email: string;
	position: string
	handleDelete: (id: any) => Promise<void>
}

const TableContent: FC<TableContent> = ({ handleDelete, firstName, lastName, id, age, email, position }) => {

	const navigate = useNavigate();
	const handleEdit = () => {
		navigate(`/form?id=${id}`)
	}

	return (
		<div className=' my-2 flex bg-[#f5f5f5] justify-between items-center w-[70vw] px-3 py-1 '>
			<div className=" flex justify-center gap-5">
				<div >{firstName} {lastName}</div>
				<div >{email}</div>
				<div >{age}</div>
				<div >{position}</div>
			</div>
			<div className="   my-3 flex justify-end gap-4">
				<div className=" hover:cursor-pointer" onClick={() => { handleEdit() }}><MdEdit /></div>
				<div className=" hover:cursor-pointer" onClick={() => { handleDelete(id) }}><MdDeleteSweep /></div>
			</div>
		</div>
	)
}

export default TableContent