import * as faker from "@faker-js/faker";

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.faker.company.companyName();
    this.catchPhrase = faker.faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.faker.address.latitude()),
      lng: parseFloat(faker.faker.address.latitude()),
    };
  }
}
