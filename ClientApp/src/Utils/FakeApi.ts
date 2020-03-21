import data from "./FakeData";

const Api = {
  GetMarketList: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data.GetMarketList.Markets);
      }, 1000);
    });
  },
  GetMarket: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data.GetMarket);
      }, 1000);
    });
  },
  Register: (username: string, password: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data.Register);
      }, 1000);
    });
  },
  Login: (username: string, password: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data.Login);
      }, 1000);
    });
  }
};

export default Api;
