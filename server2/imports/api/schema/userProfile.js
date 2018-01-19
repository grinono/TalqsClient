
const About = `
	type About {
		helpWithHeaderText : String
        tagLine : String
        expertiseDescription : String
        aboutDescription : String
        skillsDescription : String
	}
`;

const SkillsLabels = `
	type SkillsLabels {
            _id : String 
            label : String 
            rating : Int 
            value : String     
	}
`;

const ExpertiseLabels = `
	type ExpertiseLabels {
		  id : String
          label : String
          value : Int
	}
`;

const Knowledge = `
	type Knowledge {
		  knowledgeAreaIDs : String
          disciplineID : String
          expertiseLabels : [ExpertiseLabels]
          skillsLabels : [SkillsLabels]
        
	}
`;

const Details = `
	type Details {
            age : Int 
            language : String 
            location : String 
            website : String 
            email : String    
	}
`;

const ProfilePicture = `
	type ProfilePicture {
            large : String
            search : String
            S3url : String
            cropped : String

	}
`;

const Rating = `
	type Rating {
            smartNumber : Int   
	}
`;



const UserProfile = `
	type UserProfile {
		name :String
		about : About
		knowledge : Knowledge
		details : Details
		profilePicture : ProfilePicture
		rating : Rating 
	}
`;

export default () => [UserProfile, About, Knowledge, Details, ProfilePicture,Rating,SkillsLabels,ExpertiseLabels];

