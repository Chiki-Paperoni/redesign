import axios from "axios";
const TELEGRAM =
  "https://api.telegram.org/bot1730980288:AAGky2y9SAWak9-ygjfEKNnA5eroJQYIz_Q/sendMessage?chat_id=-1001563698953&parse_mode=html&text=";
export default (req, res) => {
  let body = "";
  req.on("data", (data) => {
    body += data;
  });
  req.on("end", () => {
    axios
      .post(TELEGRAM + encodeURIComponent(body))
      .then(() => {
        res.status(200);
        res.end();
      })
      .catch((error) => {
        console.error(
          "An error occured while sendin data to telegram bot:",
          error
        );
        res.end();
      });
  });
};
