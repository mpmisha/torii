const axios = require('axios');
export async function compareOnServer(word: string) {
  return axios.post(`https://torii-word-server.herokuapp.com/checkword?word=${word}`)
    .then((res: any) => {
      let { compareResult, success, message } = res.data
      console.log(`compare result = ${compareResult}`);
      if (success) {
        console.log(`you win! message  : ${message}`);
      }
      return compareResult;
    })
    .catch((error: any) => {
      console.error(error);
    });
}