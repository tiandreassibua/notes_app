import React from "react";
import NoteItem from "./NoteItem";
import { Link } from "react-router-dom";

const NoteList = ({ notes, onDelete }) => {
    return (
        <div className="mt-5">
            <div className="grid grid-cols-2 gap-5 text-slate-800">
                {notes.map((note) => (
                    <NoteItem key={note.id} note={note} onDelete={onDelete} />
                ))}
            </div>
        </div>
    );
};

export default NoteList;
