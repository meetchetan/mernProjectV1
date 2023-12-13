// "action" is the description of what you want to do, while "dispatch" is the function that carries out that action.

// In an express.js application, a "controller" refers to a part of your code that is responsible for handling the application's logic. Controllers are typically used to process incoming requests, interact with models (data sources), and send responses back to clients. They help organize your application by separating concerns and following the MVC (Model-view-controller) design pattern.

//  Home page logic

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to MERN project using router.route");
  } catch (error) {
    console.log(error);
  }
};

//  Register page logic

const register = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({message: req.body});
  } catch (error) {
    res.status(500).send({ msg: "Page not found" });
  }
};

module.exports = { home, register };
