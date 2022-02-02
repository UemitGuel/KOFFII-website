var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);

// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = (records) => {
    return records.map((record) => minifyRecord(record));
  };
  
  // gets the data we want and puts it into variables
  const minifyRecord = (record) => {
    return {
      id: record.id,
      fields: record.fields,
    };
  };

async function getCoffeePlaces() {
    const records = await base('CoffeePlaces').select({}).all();
    const minifiedRecords = await getMinifiedRecords(records);
  
    return minifiedRecords;
}

async function getPlacesInSpotlight() {
  const records = await base('CoffeePlaces').select({
    filterByFormula: `{inSpotlight} = "1"`
  }).all();
  const minifiedRecords = await getMinifiedRecords(records);

  return minifiedRecords;
}

export {
    getCoffeePlaces,
    getPlacesInSpotlight
  };