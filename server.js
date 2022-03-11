const express = require('express'),
      port = process.env.PORT ||7070,
      path = require("path"),
      app = express();
      app.use(express.static(path.resolve(__dirname, './build')))
      app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, './build', 'index.html'));
      });
      app.listen(port,()=> console.log(`listening on port ${port}`));
     //new build
     // https://edumaxe.in/#12345?student=Abhishek%singh=https://freevideolectures.com/blog/wp-content/uploads/2016/01/21.jpg