import React, { useEffect, useState } from "react";
import NoteList from "../components/NoteList";
import { AiOutlineHome, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { deleteNote, getNotes } from "../utils/locals";

const Home = () => {
    const [notes, setNotes] = useState([]);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        const data = getNotes();
        setNotes(data);
    }, [keyword]);

    const onDeleteHandler = (id) => {
        deleteNote(id);
        setNotes(getNotes());
    };

    const handleSearch = (keyword) => {
        setKeyword(keyword);
    };

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(keyword.toLowerCase());
    });

    return (
        <div className="w-full min-h-screen p-5 bg-slate-800">
            <div className="max-w-5xl mx-auto">
                <div className="p-10">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-slate-200">
                            My Notes
                        </h1>
                        <div className="flex justify-between">
                            <Link
                                to="/add"
                                className="text-2xl text-slate-200 mr-2"
                            >
                                <AiOutlinePlus />
                            </Link>
                            <Link
                                to="/"
                                className="text-2xl text-slate-200 mr-2"
                            >
                                <AiOutlineHome />
                            </Link>
                        </div>
                    </div>
                    <hr className="border-none h-[2px] mt-3 bg-slate-200" />
                    <div className="mt-3">
                        <input
                            type="text"
                            className="w-full px-4 py-2 bg-transparent border border-dashed border-slate-500 text-slate-200 rounded focus:outline-none"
                            placeholder="Search note..."
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                    </div>
                    <div>
                        {notes.length < 1 ? (
                            <p className="text-slate-200 mt-5">
                                Note not found!
                            </p>
                        ) : (
                            <NoteList
                                notes={filteredNotes}
                                onDelete={onDeleteHandler}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
