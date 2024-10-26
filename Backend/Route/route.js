const express = require('express');
const router = express.Router();
const Service = require('../Schema/schema.js');

router.get('/', async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

router.post('/', async (req, res) => {
  const newService = new Service(req.body);
  await newService.save();
  res.json(newService);
});
router.get('/geo', async(req,res) =>{
  res.setHeader("Content-type", "application/json");
  res.status(200);
  res.json({
message: "welcome to the geotechnical route",
  });
  console.log(
    "All is working as intented welcome to the geotechnical route"
  );
  return {
    error: false,
    message: "All is well",
    status: 200,
  };
})
router.get('/borehole', async(req,res)=>{
  res.setHeader("Content-type", "application/json");
  res.status(200);
  res.json({
message: "welcome to the borehole route",
  });
  console.log(
    "All is working as intented welcome to the borehole route"
  );
  return {
    error: false,
    message: "All is well",
status: 200,
  };
})
router.get('/water', async(req,res)=>{
  res.setHeader("Content-type", "application/json");
  res.status(200);
  res.json({
message: "welcome to the water route",
  });
  console.log(
    "All is working as intented welcome to the water route"
  );
  return {
    error: false,
    message: "All is well",
status: 200,
  };
})

router.get('/community', async(req,res)=>{
  res.setHeader("Content-type", "application/json");
  res.status(200);
  res.json({
    message: "welcome to the mining route",
  });
  console.log(
    "All is working as intented welcome to the mining route"
  );
return{
  error:false,
message:"all is well",
status:200  
}
})
module.exports = router;
