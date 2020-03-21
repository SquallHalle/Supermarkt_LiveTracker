export interface Market {
  Id: number;
  Name: string;
  Company: string;
  Adresse: string;
  GPSLocation: GeoLocation;
  Status?: number; // 1 = leer; 2=mittel; 3=voll; null = undefiniert
  TimeStamp: Date; //Letzte Aktualisierung
}

export interface GeoLocation {
  lat: number;
  long: number;
}

export interface MarketList {
  Markets: Array<Market>;
}
