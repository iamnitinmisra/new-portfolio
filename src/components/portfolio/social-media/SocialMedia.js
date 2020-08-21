import React from 'react'
import './SocialMedia.css'
import gitHubLogo from '../../../assets/GitHub-Mark-32px.png'
import linkedInLogo from '../../../assets/LI-In-Bug.png'
import instagramLogo from '../../../assets/IG_logo.png'

export default function SocialMedia(){
    return(
        <div id='social-media-container'>
            <img id ="github-logo" src={gitHubLogo} alt='GitHub Logo'/>
            <img id ="social-media-logos" src={linkedInLogo} alt='LinkedIn Logo'/>
            <img id ="social-media-logos" src={instagramLogo} alt='Instagram Logo'/>
        </div>
    )
}