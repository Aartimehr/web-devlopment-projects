const express = require('express');
const router = express.Router();

const Satellite = require('../models/Satellite.model')

router.get("/Satellite/all", async (req, res) => {
	try {
		const post = await Satellite.find();
		res.send(post)
		
        console.log("Satellite data sent")
	} catch {
		res.status(404)
		res.send({ error: "Satellite doesn't exist!" })
	}
})


router.post('/create',(req,res,next) => {

    console.log(req.body);
    const post = new Satellite({
        name: req.body.name ,
        Lati: req.body.Lati,
		Long:req.body.Long,
		Alt:req.body.Alt,
		Pitch:req.body.Pitch,
		Yaw:req.body.Yaw,
		Roll:req.body.Roll,
		Temp:req.body.Temp,
		Humid:req.body.Humid,
		Pressure:req.body.Pressure,
		Bat_remain:req.body.Bat_remain,
		Bat_time:req.body.Bat_time,
		NORAD_ID:req.body.NORAD_ID,
		organisation:req.body.organisation
    })
    post.save()
    .then(result => {
        console.log(result);
        res.send(result);
    })
    .catch(err => {
        console.log(err.message);
    })
    
    });


router.get("/Satellite/:id", async (req, res) => {
	try {
        console.log("Satellite id received")
		const post = await Satellite.findOne({ _id: req.params.id })
		res.send(post)
	} catch {
		res.status(404)
		res.send({ error: "Satellite doesn't exist!" })
	}
})


router.patch("/Satellite/:id", async (req, res) => {
	try {
		const post = await Satellite.findOne({ _id: req.params.id })

		if (req.body.name) {
			post.name = req.body.name
		}

		if (req.body.Lati) {
			post.Lati = req.body.Lati
		}
		if (req.body.Long) {
			post.Long = req.body.Long
		}
		if (req.body.Alt) {
			post.Alt = req.body.Alt
		}
		if (req.body.Pitch) {
			post.Pitch= req.body.Pitch
		}
		if (req.body.Yaw) {
			post.Yaw= req.body.Yaw
		}
		if (req.body.Roll) {
			post.Roll= req.body.Roll
		}
		if (req.body.Temp) {
			post.Temp= req.body.Temp
		}
		if (req.body.Humid) {
			post.Humid= req.body.Humid
		}
		if (req.body.Pressure) {
			post.Pressure= req.body.Pressure
		}
		if (req.body.Bat_remain) {
			post.Bat_remain= req.body.Bat_remain
		}
		if (req.body.Bat_time) {
			post.Bat_time= req.body.Bat_time
		}
		if (req.body.NORAD_ID) {
			post.NORAD_ID=req.body.NORAD_ID
		}
		if (req.body.organisation) {
			post.organisation=req.body.organisation
		}
		await post.save()
		res.send(post)
	} catch {
		res.status(404)
		res.send({ error: "Satellite doesn't exist!" })
	}
});



router.delete('/:id', (req,res,next)  => {
    res.send('deleting a single Satellite');
    
});
module.exports = router;
