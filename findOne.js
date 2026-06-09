const { MongoClient } = require("mongodb");

const uri = "mongodb_secret";
const client = new MongoClient(uri);
async function run() {
  const database = client.db('notes');
  const notes = database.collection('notes');
  // idが1のドキュメントを取得
  const query = { id: 1 };
  const note = await notes.findOne(query);
  console.log(note);
  // 最後にクローズする
  await client.close();
}
run();