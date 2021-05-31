class Helpers {
  static generateRandomString (){
      const str =
            Math.random().toString(32).substring(5, 10) +
            Math.random().toString(32).substring(5, 10);
      return str.toUpperCase();
    };
  }

export default Helpers;