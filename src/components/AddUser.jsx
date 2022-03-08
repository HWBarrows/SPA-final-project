function signUp(){
    // take in the new username and password in a new-user object, and create a new user profile. 
    // console.log(users);
    const randomFirstName = Fakerator().names.firstName()
    const randomLastName = Fakerator().names.lastName()
    const randomEmail = Fakerator().internet.email(randomFirstName, randomLastName)

    console.log(data);
    setUsers([...users, {"login":
                            {"username":data.userName, "password":data.password}, 
                            "name": {
                                "first": randomFirstName,
                                "last": randomLastName
                            },
                                "email": randomEmail,
                        
                            "picture": 
                                {"medium":"http://www.formasdigitales.mx/images/client.png",
                                "large":"http://www.formasdigitales.mx/images/client.png",
                                "thumbnail":"http://www.formasdigitales.mx/images/client.png"
                                }
                        }
                        ])
    

}