class NotesView {
  constructor(model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNotes() {
    this.model.getNotes().forEach((note) => {
      let div = document.createElement('div')
      div.textContent = note
      div.classList.add('note')
      this.mainContainerEl.append(div)
    })
  }
}

module.exports = NotesView;