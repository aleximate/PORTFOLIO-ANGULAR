const { response, request }=require('express');
const nodemailer= require('nodemailer');

const sendEmail= (req=request,res=response)=>{
    let body= req.body;
    

    let config =nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        auth:{
            user:'alexanderflorespinin@gmail.com',        
            pass:'klkoklwrjvoxosfc'
        }
    });

    const options={
        from:'Send Email',
        subject:body.asunto,
        to:body.email,
        text:body.message
    };

    config.sendMail(options,function(error,result){
        if(error) return response.json({ok:false, msg:error});
        return res.json({
            ok:true,
            msg:result
        })
    })
}

module.exports={
    sendEmail
}