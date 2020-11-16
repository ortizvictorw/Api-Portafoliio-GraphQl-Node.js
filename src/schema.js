const {makeExecutableSchema}=require('graphql-tools')
const resolvers = require('./resolvers');



const typeDefs=`
type Query {
   
    Technology:[Skill]
}

type Skill{
    _id:ID
    nameSkill:String!
    description:String!
    experience:String!
    
}

input SkillInput{
    nameSkill:String!
    description:String!
    experience:String!
    
}



`;
 

module.exports = 
makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers:resolvers
});