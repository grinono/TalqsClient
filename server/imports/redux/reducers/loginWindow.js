let initialState ={
	showLogin : false,
	showSignup : false
}

export default function reducer (state=initialState, action ) {
	switch (action.type) {
		case "LoginView" : {
			console.log("this")
			return {...state , state : {showLogin: action.payload } }
			break;
		}
		case "signupView" : {
			return  {...state , state : {showSignup: action.payload } }
			break;
		}	
	}	
	return {state}
}