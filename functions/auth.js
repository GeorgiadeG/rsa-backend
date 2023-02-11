const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.createUsers = functions.https.onRequest(async (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
  
    // Create a new user with email and password.
    try{
      const userRecord = await admin.auth().createUser({
        email: email,
        password: password
      });
      res.json({result: `User with ID: ${userRecord.uid} added.`});
    } catch (error) {
      res.json({result: `Error: ${error}`});
    }
  });
  
  exports.loginUsers = functions.https.onRequest(async (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
  
    // Create a new user with email and password.
    try{
      const userRecord = await admin.auth().signInWithEmailAndPassword(email, password);
      res.json({result: `User with ID: ${userRecord.uid} added.`});
    } catch (error) {
      res.json({result: `Error: ${error}`});
    }
  });
  
  exports.deleteUsers = functions.https.onRequest(async (req, res) => {
    const uid = req.query.uid;
  
    // Create a new user with email and password.
    try{
      const userRecord = await admin.auth().deleteUser(uid);
      res.json({result: `User with ID: ${userRecord.uid} added.`});
    } catch (error) {
      res.json({result: `Error: ${error}`});
    }
  });