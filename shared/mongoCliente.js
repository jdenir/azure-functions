const {MongoClient} = require('mongodb');
const config = {
    url: 'mongodb+srv://god:dog@cluster0-dfsvs.mongodb.net/dgo'
}

module.exports = () =>
  new Promise((resolve, reject) => {
    MongoClient.connect(
      config.url,
      { useNewUrlParse: true },
      (err, mongoConnection) =>
        err
          ? reject(err)
          : resolve({
              client: mongoConnection.db(config.dbName),
              closeConnectionFn: () =>
                setTimeout(() => {
                  mongoConnection.close();
                }, 1000),
              mongoConnection,
            })
    );
  });
