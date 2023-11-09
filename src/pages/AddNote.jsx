import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { addNote } from "../utils/locals";

const AddNote = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const note = {
            title,
            desc,
            createdAt: new Date(),
        };

        addNote(note);
        navigate("/");
    };

    return (
        <div className="w-full min-h-screen p-5 bg-slate-800">
            <div className="max-w-5xl mx-auto">
                <div className="p-10">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-slate-200">
                            Add Note
                        </h1>
                        <Link to="/" className="text-2xl text-slate-200 mr-2">
                            <AiOutlineHome />
                        </Link>
                    </div>
                    <hr className="border-none h-[2px] mt-3 bg-slate-200" />
                    <div className="mt-5">
                        <form onSubmit={handleSubmit}>
                            <FormControl>
                                <FormLabel className="text-slate-200">
                                    Title
                                </FormLabel>
                                <Input
                                    type="text"
                                    className="text-slate-200"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </FormControl>
                            <FormControl className="mt-4">
                                <FormLabel className="text-slate-200">
                                    Description
                                </FormLabel>
                                <Textarea
                                    className="text-slate-200"
                                    onChange={(e) => setDesc(e.target.value)}
                                />
                            </FormControl>
                            <button
                                type="submit"
                                className="mt-4 py-2 px-4 bg-emerald-600 text-white rounded hover:bg-emerald-700 duration-200"
                            >
                                Simpan
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNote;
