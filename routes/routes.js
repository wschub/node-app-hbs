const { Router } = require("express");
const router = Router();


router.get("/", (req, res) => {
    res.render("index");
  });
  
  
  
  router.get("/alumnos", (req, res) => {
    const nombres = [
      "Orlyn",
      "Natalia",
      "Connie",
      "Andrés",
      "Manuel",
      "Yhonny",
      "Yuli",
      "Brian",
      "Daniel"
    ];
    res.render("alumnos", { nombres });
  });

  module.exports = router;