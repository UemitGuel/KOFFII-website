var Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

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
  const records = await base("CoffeePlaces").select({}).all();
  const minifiedRecords = await getMinifiedRecords(records);

  return minifiedRecords;
}

async function getCoffeePlaceIDs() {
  const records = await base("CoffeePlaces").select({}).all();
  return records.map((record) => {
    return {
      params: {
        id: record.id,
      },
    };
  });
}

async function getPreparationIDs() {
  const records = await base("Preparation").select({}).all();
  return records.map((record) => {
    return {
      params: {
        id: record.id,
      },
    };
  });
}

function arrayRemove(arr, value) { 
    
  return arr.filter(function(ele){ 
      return ele != value; 
  });
}

async function getTwoRandomPreparations() {
  const records = await base("Preparation").select({}).all();
  const minifiedRecords = await getMinifiedRecords(records);

  //First Random 
  const fristRandomNumber = Math.floor(Math.random()*minifiedRecords.length)
  var firstMinifiedRecord = minifiedRecords[fristRandomNumber];
  var newMinifiedRecords = arrayRemove(minifiedRecords, firstMinifiedRecord);

  //Second Random
  const secondRandomNumber = Math.floor(Math.random()*newMinifiedRecords.length)
  var secondMinifiedRecord = newMinifiedRecords[secondRandomNumber];

  const twoRandomPreparations = [firstMinifiedRecord,secondMinifiedRecord]

  return {
    twoRandomPreparations: twoRandomPreparations
  }
};

async function getTwoRandomCafes() {
  const records = await base("CoffeePlaces").select({}).all();
  const minifiedRecords = await getMinifiedRecords(records);

  //First Random 
  const fristRandomNumber = Math.floor(Math.random()*minifiedRecords.length)
  var firstMinifiedRecord = minifiedRecords[fristRandomNumber];
  var newMinifiedRecords = arrayRemove(minifiedRecords, firstMinifiedRecord);

  //Second Random
  const secondRandomNumber = Math.floor(Math.random()*newMinifiedRecords.length)
  var secondMinifiedRecord = newMinifiedRecords[secondRandomNumber];

  const twoRandomCafes = [firstMinifiedRecord,secondMinifiedRecord]

  return {
    twoRandomCafes: twoRandomCafes
  }
};


async function getPlaceByID(id) {
  const records = await base("CoffeePlaces")
    .select({
      filterByFormula: `{recordID} = "${id}"`,
    })
    .all();

  const place = await getMinifiedRecords(records);

  return {
    place,
  };
}

async function getPreparationByID(id) {
  const records = await base("Preparation")
    .select({
      filterByFormula: `{recordID} = "${id}"`,
    })
    .all();

  const preparation = await getMinifiedRecords(records);

  return {
    preparation,
  };
}

async function getPlacesInSpotlight() {
  const records = await base("CoffeePlaces")
    .select({
      filterByFormula: `{inSpotlight} = "1"`,
    })
    .all();
  const minifiedRecords = await getMinifiedRecords(records);

  return minifiedRecords;
}

async function getPreparation() {
  const records = await base("Preparation").select({}).all();
  const minifiedRecords = await getMinifiedRecords(records);

  return minifiedRecords;
}

export {
  getCoffeePlaces,
  getPlacesInSpotlight,
  getCoffeePlaceIDs,
  getPlaceByID,
  getPreparation,
  getPreparationByID,
  getPreparationIDs,
  getTwoRandomPreparations,
  getTwoRandomCafes
};
