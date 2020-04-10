import HomeImage from "../assets/sign/home.png"
import LocationImage from "../assets/sign/location.png"
import DrinkImage from "../assets/sign/drink.png"
import IdealImage from "../assets/sign/ideals.png"
import AboutUsImage from "../assets/sign/aboutus.png"
import FacebookImage from "../assets/sign/facebook.png"
import InstgramImage from "../assets/sign/photo.png"
import EmailImage from "../assets/sign/email.png"
export const socialRouter = function(){
        return [
                {
                        to: '/facebook',
                        src:FacebookImage
                },
                {
                        to: '/instgram',
                        src:InstgramImage
                },
                {
                        to: '/email',
                        src:EmailImage
                }
        ]
}
export const MenuRouter = function(){
        return [
                {
                        to: '/home',
                        src:HomeImage
                },
                {
                        to: '/drink',
                        src:DrinkImage
                },
                {
                        to: '/ideal',
                        src:IdealImage
                },
                {
                        to: '/location',
                        src:LocationImage
                },
                {
                        to: '/aboutus',
                        src:AboutUsImage
                }
        ]
}