export async function getMeetups(useDB = false) {
  return [{id: 1, title: 'Awesome', description: 'description text'}, {id: 2, title: 'Rad', description: 'this is the raddest meetup'}];
  // if (useDB) {
  //   // TODO: get data from DB directly
  //   // const link = db.connect('localhost', 'root', 'passw0rd');
  //   // const data = await db.query(link, 'SELECT * FROM products');
  // } else {
  //   const response = await fetch('http://localhost:8080/meetups');
  //   return response.json();
  // }
}
