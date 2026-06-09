const { MongoClient } = require("mongodb");

const uri = "mongodb_secret";
const client = new MongoClient(uri);
async function run() {
  const database = client.db('notes');
  const notes = database.collection('notes');
  // idが2のドキュメントを削除
  const note = await notes.deleteOne({ id: 2 });
  console.log(note);
  // 最後にクローズする
  await client.close();
}
run();