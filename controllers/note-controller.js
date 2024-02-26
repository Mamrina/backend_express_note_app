// Get the client
import mysql from 'mysql2/promise';
import { render } from 'pug';

export class NoteController {
  async listAll(req, res) {
      console.log('noteController should list all');
      const dbConnection = await mysql.createConnection({
          host: '127.0.0.1',
          user: 'root',
          database: 'noteApp'
      });
      // console.log('top top');
      // res.send('connexion db réussie.')

      const [results, fields] = await dbConnection.query('SELECT * FROM notes');
      // console.log(results);
      res.send(results);
  }

  async create(req, res) {
    const dbConnection = await mysql.createConnection({
      host: '127.0.0.1',
      user: 'root',
      database: 'noteApp'
    });
    
    const newNote = {
      // req.body = la donnée que j'ia envoyé
      text: req.body.text
    }

    console.log('noteController create with text : ', newNote.text);
    const [results, fields] = await dbConnection.query('INSERT INTO notes (text) VALUE (?)', [newNote.text]);
  
    res.json({message: 'note added to db'});
  }

  async destroy(req, res) {
    const dbConnection = await mysql.createConnection({
      host: '127.0.0.1',
      user: 'root',
      database: 'noteApp'
  });
  // console.log('top top');
  // res.send('connexion db réussie.')

  const [results, fields] = await dbConnection.query('DELETE FROM notes WHERE id = ?', [req.params.id]);
  res.json({message: 'note deleted', results: results});
  }

  async update(req, res) {
    const dbConnection = await mysql.createConnection({
      host: '127.0.0.1',
      user: 'root',
      database: 'noteApp'
  });

  const [results, fields] = await dbConnection.query('UPDATE notes SET ? WHERE id = ?', [updatedNote.text, req.params.id]);
  res.json({message: 'note updated', results: results});
  }
}



// console.log('top top');
  // res.send('connexion db réussie.')