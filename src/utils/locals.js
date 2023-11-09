let notes = [
    {
        id: 1,
        title: "Catatan mentoring minggu 2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laborum praesentium velit omnis? Aut eum architecto blanditiis pariatur magni ducimus!",
        createdAt: new Date(),
    },
];

const getNotes = () => {
    return notes;
};

const addNote = (note) => {
    note.id = notes.length + 1;
    return notes.push(note);
};

const deleteNote = (id) => {
    notes = notes.filter((note) => note.id !== id);
};

export { getNotes, addNote, deleteNote };
