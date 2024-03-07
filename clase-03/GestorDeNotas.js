class NotesManager {
  constructor() {
    this.quantity = 0;
    this.notes = [];
  }

  create(data) {
    try {
      if (!data.text) {
        throw new Error("Escribe algo de texto en la nota");
      }
      const id = this.quantity + 1;
      const type = data.type || "to do";
      const date = data.date || new Date().toISOString();
      const newNote = { id, type, text: data.text, date };
      this.notes.push(newNote);
      this.quantity++;
      return newNote;
    } catch (error) {
      console.error(error.message);
    }
  }

  read() {
    try {
      if (this.quantity === 0) {
        throw new Error("No Hay Notas");
      }
      return this.notes;
    } catch (error) {
      console.error(error.message);
    }
  }

  readOne(id) {
    try {
      const note = this.notes.find((note) => note.id === id);
      if (!note) {
        throw new Error(`La Nota con el id ${id} no fue encontrada`);
      }
      return note;
    } catch (error) {
      console.error(error.message);
    }
  }

  update(id, data) {
    try {
      const index = this.notes.findIndex((note) => note.id === id);
      if (index === -1) {
        throw new Error(`Nota con el id ${id} no encontrada.`);
      }
      const updatedNote = { ...this.notes[index], ...data };
      this.notes[index] = updatedNote;
      return updatedNote;
    } catch (error) {
      console.error(error.message);
    }
  }

  destroy(id) {
    try {
      const index = this.notes.findIndex((note) => note.id === id);
      if (index === -1) {
        throw new Error(`Nota con el id ${id} no encontrada.`);
      }
      this.notes.splice(index, 1);
      this.quantity--;
    } catch (error) {
      console.error(error.message);
    }
  }
}

// Ejemplo de uso
const manager = new NotesManager();

manager.create({ text: "" }); // Forzamos el Error
manager.create({ text: "Llamar a mamá", type: "recordatorio" });
manager.create({ text: "Terminar el informe" });
manager.create({ text: "Revisar el correo electrónico" });
manager.create({ text: "Preparar la presentación", type: "urgente" });

console.log("Todas las notas:");

manager.read().forEach((note) => {
  console.log(
    `- ID: ${note.id} | Tipo: ${note.type} | Texto: ${note.text} | Fecha: ${note.date}`
  );
});

console.log("\nNota específica (ID: 1):");
const specificNote = manager.readOne(1);
console.log(
  `- ID: ${specificNote.id} | Tipo: ${specificNote.type} | Texto: ${specificNote.text} | Fecha: ${specificNote.date}`
);

console.log("\nActualizar nota (ID: 1):");
manager.update(1, { text: "Comprar el regalo de cumpleaños" });
console.log(
  `- ID: ${specificNote.id} | Tipo: ${specificNote.type} | Texto: ${specificNote.text} | Fecha: ${specificNote.date}`
);

console.log("\nDespués de eliminar la nota (ID: 1):");
manager.destroy(1);
manager.read().forEach((note) => {
  console.log(
    `- ID: ${note.id} | Tipo: ${note.type} | Texto: ${note.text} | Fecha: ${note.date}`
  );
});

// Mostramos la cantidad de Notas Acumuladas
console.log("\nCantidad de Notas: " + manager.quantity);
