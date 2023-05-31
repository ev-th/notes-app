class NotesView {
  constructor(model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');
    this.textBox = document.querySelector('#text-input');
    this.button = document.querySelector('#add-note-button');

    this.button.addEventListener('click', () => {
      const newNote = this.textBox.value;
      this.addNote(newNote);
    })
  }

  addNote(note) {
    this.model.addNote(note)
    this.textBox.value = ''
    this.displayNotes();
  }

  displayNotes() {
    this.hideNotes();
    this.model.getNotes().forEach((note) => {
      let div = document.createElement('div')
      div.textContent = note
      div.classList.add('note')
      this.mainContainerEl.append(div)
    })
  }

  hideNotes() {
    this.mainContainerEl.querySelectorAll('.note').forEach(note => note.remove());
  }
}

module.exports = NotesView;