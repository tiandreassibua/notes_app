import React from "react";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const NoteItem = ({ note, onDelete }) => {
    const navigate = useNavigate();
    return (
        <div className="w-full bg-slate-200 p-5 rounded hover:scale-105 duration-300">
            <div>
                <h2 className="font-semibold text-xl mb-2">{note.title}</h2>
                <p>{note.desc}</p>
            </div>
            <hr className="border-slate-400 border-[1px] my-5" />
            <div className="flex justify-between items-center">
                <span>{note.createdAt.toLocaleDateString()}</span>
                <button
                    className="cursor-pointer text-red-500"
                    onClick={() => onDelete(note.id)}
                >
                    <BsTrash />
                </button>
            </div>
        </div>
    );
};

export default NoteItem;
