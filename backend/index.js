require('dotenv').config();
const express = require('express');
const cors = require('cors');
const AWS = require('aws-sdk');

const app = express();
app.use(cors());

AWS.config.update({ region: process.env.AWS_REGION });
const dynamoDb = new AWS.DynamoDB.DocumentClient();

function createScanRoute(tableName, errorLabel) {
  return async (req, res) => {
    try {
      const data = await dynamoDb.scan({ TableName: tableName }).promise();
      res.json(data.Items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: `Failed to fetch ${errorLabel}` });
    }
  };
}

app.get('/api/skills', createScanRoute('dev-skills', 'skills'));
app.get('/api/techs', createScanRoute('dev-techs', 'techs'));

module.exports = app;

if (require.main === module) {
    const PORT = 3001;
    app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
}