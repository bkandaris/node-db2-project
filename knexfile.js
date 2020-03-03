// Update with your config settings.

// first delete everything inside of the export

module.exports = {
  // specifying dbms
  client: 'sqlite3',
  // flag required by sqlite3
  useNullAsDefault: 'true',
  connection: {
    // location of db file
    filename: './data/cars.db3'
  }
};
