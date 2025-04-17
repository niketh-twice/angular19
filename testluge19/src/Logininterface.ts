export interface ILogin{
    
        id: Number;
        username: String;
        email:  String;
        firstName: String;
        lastName: String;
        gender: String;
        image: String;
        accessToken:String;// JWT accessToken (for backward compatibility) in response and cookies
        refreshToken: String// refreshToken in response and cookies
    
}