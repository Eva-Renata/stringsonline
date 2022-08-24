 const authHeader = () => {
  //henter localstorage hvis den eksisterer
  const currentToken = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : "";

  if (currentToken) {
    return {
      //betyder, at alle api og domæner kan tilgå den 
      "Access-Control-Allow-Origin": "*",
      "Authorization": `Bearer ${currentToken.access_token}`,
    };
  } else {
    return {};
  }
}
export default authHeader;