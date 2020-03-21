const data = {
  GetMarketList: {
    Markets: [
      {
        Id: 42,
        Name: "TollerNetto",
        Company: "Aldi",
        GPSLocation: {
          lat: 12.516,
          long: 21.31231
        },
        Adresse: "StraßeMitHausNummerUndSo",
        Status: 1,
        TimeStamp: "01-01-1970"
      },
      {
        Id: 43,
        Name: "TollerLidl",
        Company: "Aldi",
        GPSLocation: {
          lat: 12.216,
          long: 21.31231
        },
        Adresse: "StraßeMitHausNummerUndSo",
        Status: 1,
        TimeStamp: "01-01-1970"
      }
    ]
  },
  GetMarket: {
    Id: 42,
    Name: "TollerNetto",
    Company: "Aldi",
    GPSLocation: {
      lat: 12.516,
      long: 21.31231
    },
    Adresse: "StraßeMitHausNummerUndSo",
    Status: 1,
    TimeStamp: "01-01-1970"
  },
  Login: {
    Token: "awdawdawdaw"
  },
  Register: {
    Success: true
  },
  GetUserProfil: {
    UserName: "Diether Müller",
    MarketId: 42
    //vielleicht noch mehr infos
  },
  SetMarket: {
    Success: true // Rückgabe True/False für Erfolgreiches setzen
  }
};

export default data;
