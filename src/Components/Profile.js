import PersonalInfo from "./PersonalInfo"

let Profile = () =>{
    return(
        <div className="users">
            <h1>Users</h1>
            <PersonalInfo name="Rufat"  adress="Baku"/>
            <PersonalInfo name="Murad" email="m1@gmail.com" adress="London"/>
        </div>
    )
}

export default Profile;