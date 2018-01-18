import User from './user'

const Room = `
	type Room {
		_id: String,
		caller: User,
		callee: User,
		status: String,
		logs: [String]
	}
`;

export default () => [Room, User]