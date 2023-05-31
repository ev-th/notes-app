/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView')
const NotesModel = require('./notesModel')

describe ('NotesView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it ('gets the list of notes from the model', () => {
    const notesModel = new NotesModel()
    notesModel.addNote('Hello World')

    const notesView = new NotesView(notesModel)
    notesView.displayNotes()
    expect(document.querySelectorAll('.note')[0].textContent).toEqual('Hello World')
    expect(document.querySelectorAll('.note').length).toEqual(1)
  })

  it('displays a new note on the page', () => {
    const model = new NotesModel();
    const view = new NotesView(model);

    view.textBox.value = 'Buy milk';
    view.button.click();
    expect(document.querySelectorAll('.note').length).toEqual(1);
    expect(document.querySelectorAll('.note')[0].textContent).toEqual('Buy milk');
  })

  it('displays two notes on the page', () => {
    const model = new NotesModel();
    const view = new NotesView(model);

    view.textBox.value = 'Buy milk';
    view.button.click();
    view.textBox.value = 'Do laundry';
    view.button.click();
    expect(document.querySelectorAll('.note').length).toEqual(2);
    expect(document.querySelectorAll('.note')[0].textContent).toEqual('Buy milk');
    expect(document.querySelectorAll('.note')[1].textContent).toEqual('Do laundry');
  })

  it('clears the value of the text box when new note is created', () => {
    const model = new NotesModel();
    const view = new NotesView(model);

    view.textBox.value = 'Buy milk';
    view.button.click();
    expect(view.textBox.value).toEqual('')
  })
})