const mongoose = require('mongoose');

const uri = 'mongodb+srv://binodchandrajhabinodjha1730_db_user:HiieYkPaB8Nq209R@nyayalabel-ai-cluster.egz0wjb.mongodb.net/nyayalabel_db?appName=Nyayalabel-ai-cluster';

async function test() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
    
    // We can't import typescript models easily, so just use native driver or mongoose raw connection
    const db = mongoose.connection.db;
    const officer = await db.collection('officers').findOne({});
    console.log('Officer:', officer);
  } catch(e) {
    console.error('Mongo Error:', e);
  } finally {
    mongoose.disconnect();
  }
}
test();
