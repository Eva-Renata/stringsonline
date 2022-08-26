 export const authHeader = () => {
  //henter localstorage hvis den eksisterer
  const currentToken = sessionStorage.getItem("token") ? JSON.parse(sessionStorage.getItem("token")) : "";
  if (currentToken) {
    return {
      //betyder, at alle api og domæner kan tilgå den 
      "Access-Control-Allow-Origin": "*",
      //"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Authorization": `Bearer ${currentToken.access_token}`,
    };
  } else {
    return {};
  }
}
export default authHeader;