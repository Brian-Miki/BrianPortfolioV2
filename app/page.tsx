import Image from 'next/image'
import LinkedInIcon from './LinkedIn_icon.svg'
import GmailIcon from './Gmail_icon.svg'
import MediumIcon from './medium-icon.svg'


export default function Home() {
  const titleStyle = {
    fontSize: '100px',
    fontWeight: 'bold',
    textAlight: 'left',
  };
  const subTitleStyle = {
    fontSize: '36px',
    fontWeight: 'semibold',
    textAlign: 'left',
  };
  const textStyleLeft = {
    fontSize: '18px',
    textAlign: 'left',
    margin: '12px 0px 16px',
  };
  const textStyleRight = {
    fontSize: '18px',
    textAlign: 'right',
    margin: '12px 0px 16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  };


  return (
    <main className="flex min-h-screen flex-col lg: items-center md: items-left p-24">
      
     <div class = "grid md:grid-cols-1 lg:grid-cols-2 gap-4">
     <div style={titleStyle}>brian miki.</div>
     <div className="hidden sm:flex flex-col items-end">
     <a href="https://www.linkedin.com/in/brian-miki/"><Image src={LinkedInIcon} alt="LinkedIn" width={35} height={35}/></a>
     <a href="mailto:bmiki5508@gmail.com"><Image src={GmailIcon} alt="Email"width={35} height={27}/></a>
     <a href="https://medium.com/@bmiki5508"><Image src ={MediumIcon} alt ="Blog" width={35} height={27}/></a>
     <div style={textStyleRight}>product manager • casual blogger • vibe bringer</div>
     </div>
      <div style={subTitleStyle}>a brief introduction
        <div style = {textStyleLeft}>
          <div>van  mtl  sf</div>
          <div>sfu cs + business</div>
        </div>
      </div>
      <div className ="sm:text-left lg: text-right" style={textStyleRight}>
        <div>APM Intern @ Salesforce.</div>
        <div>Previously at Unity, Dead By Daylight and Teifi.</div>
        <div style={textStyleRight}>
        <div>Outside of work I enjoy practicing kendo, trying matcha flavoured food items and cooking japanese dishes.</div>
        </div>
      </div>
     </div>
    </main>
  )
 
}
