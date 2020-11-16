//Dato que se almacenara en Mongo DB

const { Schema, model } =require('mongoose');
 const SkillSchema = new Schema({
     nameSkill:{
        type:String,
        required:true
 },
 description:{
     type:String,
     required:true
},

experience:{
    type:String,
    required:true
}

})



module.exports = model('Skill', SkillSchema);