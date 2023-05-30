const NotesModel = require('./notesModel');

describe('NotesModel', () => {
  it('has no notes when initialized', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([])
  })
  
  it('can add a note can get it', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    expect(model.getNotes()).toEqual(['Buy milk'])
  })
  
  it('can add multiple notes and get a list of them', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym'])
  })
  
  it('can reset itself to hold no notes', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset();
    expect(model.getNotes()).toEqual([])
  })
})