import express from 'express';

let things = [{ name: 'First thing 🐑' }, { name: 'Second thing 😼' }, { name: 'Third thing 🚀' }];

let app = express();

app.use((req, res, next) => {
  console.log(req.ip, req.method, req.url);
  res.setHeader('Access-Control-Allow-Origin', '*');
  return next();
});

app.get('/things', (req, res) => {
  let out: any[] = [];

  for (let thing of things) {
    let copy = { ...thing }; // shallow copy of object, we dont want to alter the original fields
    copy.name += ' ' + Math.floor(Math.random() * 1000);
    out.push(copy);
  }

  res.json(out);
});

app.listen(81);
