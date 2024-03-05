class Note {
    constructor(id, type = "to do", text, date = new Date()) {
        this.id = id;
        this.type = type;
        this.text = text;
        this.date = date;
    }
}

class NotesManager {
    #notes = [];
    #quantity = 0;

    create(data) {
        const id = ++this.#quantity;
        const newNote = new Note(id, data.type, data.text, data.date);
        this.#notes.push(newNote);
        return newNote;
    }

    read() {
        return this.#notes;
    }

    readOne(id) {
        return this.#notes.find(note => note.id === id);
    }

    update(id, newData) {
        const noteToUpdate = this.#notes.find(note => note.id === id);
        if (noteToUpdate) {
            Object.assign(noteToUpdate, newData);
            return noteToUpdate;
        }
        return null;
    }

    destroy(id) {
        this.#notes = this.#notes.filter(note => note.id !== id);
    }

    listNotes() {
        console.log("Lista de notas:");
        this.#notes.forEach(note => {
            console.log(`ID: ${note.id}, Tipo: ${note.type}, Texto: ${note.text}, Fecha: ${note.date}`);
        });
    }
}

// Ejemplo de uso
const notesManager = new NotesManager();

// Crear algunas notas
notesManager.create({ text: "Completar informe de proyecto" });
notesManager.create({ type: "important", text: "Preparar presentación para reunión" });
notesManager.create({ text: "Comprar ingredientes para cena" });

// Mostrar todas las notas
notesManager.listNotes();

// Actualizar una nota
notesManager.update(1, { text: "Completar informe de proyecto para mañana" });

// Mostrar todas las notas después de actualizar
console.log("\n Se actualizó nota 1");
notesManager.listNotes();

// Eliminar una nota
notesManager.destroy(3);

// Mostrar todas las notas después de eliminar
console.log("\n Se elimino nota 3");
notesManager.listNotes();
