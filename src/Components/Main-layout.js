import { Image } from "./Images"

function Header(){
    return<div className="logo-container">
        <Image className="logo" src='instaclone.png' />
        <Image className="camera" src= "camera.png"/>
    </div>
} 




export default function  MainLayout({children}){

    return <div>
        <Header/>
        <div className="main"> 
         {children}
        </div>
    </div>


}