const Doctor = require('../model/doctorModel')
const catchAsync = require('../utils/catchAsync')


exports.createDoctor = catchAsync(async (req,res,next)=>{


    const doctor = await Doctor.create({
      ...req.body
    })

    res.status(201).json({
        status :"success",
        result : doctor.length,
        data:{
            doctor
        }
    })
})