const ExpertQuery = `
	input ExpertQuery {
		findExpertWithID : String
		knowledgeAreas: [String]
		disciplines: [String]
	}
`;

export default () => [ExpertQuery]