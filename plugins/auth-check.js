import firebase, { auth } from "firebase/app"
import axios from "axios";

const authCheck = ({store, redirect }) => {
	firebase.auth().onAuthStateChanged(async user => {
		if(user){
			const {data} = await axios.get(`/v1/users?uid=${user.uid}`)
			console.log("ログインしているユーザー：",data)
		}
	});
}

export default authCheck