
const express =require("express");
const temp=express();

temp.get("/",(req ,res)=>{

});

temp.listen(port,(err)=>{
	if(err)
	 throw err
	 else
	 console.log("server is running at port %d:",port);
});