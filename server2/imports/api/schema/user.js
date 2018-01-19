import UserStatusInfo from './userStatusInfo'
import UserProfile from './userProfile'

const User = `
	type User {
		_id: String
		username: String
		statusInfo: UserStatusInfo
		profile: UserProfile
	}
`;

export default () => [User, UserStatusInfo, UserProfile];

