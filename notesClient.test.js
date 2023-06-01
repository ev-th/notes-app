const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableMocks();

describe('Client class', () => {
  it('loads all notes with fetch using loadNotes', (done) => {
    const client = new NotesClient();

    fetch.mockResponseOnce(JSON.stringify({
      notes: [
        'buy milk',
        'do homework'
      ]
    }));

    client.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.notes.length).toBe(2);
      expect(returnedDataFromApi.notes[0]).toBe('buy milk');
      expect(returnedDataFromApi.notes[1]).toBe('do homework');

      done();
    })
  })
})