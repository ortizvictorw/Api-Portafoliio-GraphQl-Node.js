
const Skill = require('./models/Skill');



const resolvers = {
   
    Query:{
        
        async Technology(){
            return await Skill.find()
        }
        
    },

};

module.exports = resolvers;