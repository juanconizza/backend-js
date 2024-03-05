class NotesManager {
  static quantity = 0;
  static #notes = [];

  create(data) {
    data.id =
      NotesManager.quantity === 0
        ? 1
        : NotesManager.#notes[NotesManager.quantity - 1].id++;
    NotesManager.quantity++;
    data.type ? data.type : "to do";
    data.date || new Date();
    !data.text ? "Ingrese Texto" : NotesManager.#notes.push(data);
    NotesManager.#notes.push(data);
  }

  read() {
    return NotesManager.#notes;
  }
}
