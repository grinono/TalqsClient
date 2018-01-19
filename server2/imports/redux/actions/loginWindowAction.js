export function LoginView (state) {
	// console.log("called")
	return {
		type: "LoginView",
		payload : state
	}
}

export function signupView (state) {
	// console.log("called")
	return {
		type: "signupView",
		payload : state
	}
}