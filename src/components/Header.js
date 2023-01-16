import omronLogo from '../resources/images/Omron_Logo.svg'
const Header =()=>{
    return (
        <div className="header w-full flex justify-between p-8" style={{borderBottom:'2px solid #005eb8'}}>
            <div className="logo p-2 m-2">
                <img src={omronLogo} />
            </div>
            <div className='nav'>
                <button className='p-2 rounded-xl m-2'>ომრონი</button>
                <button className='p-2 rounded-xl m-2'>პროდუქცია</button>
                <button className='p-2 rounded-xl m-2'>კონტაქტი</button>
            </div>
        </div>
    )
}
export default Header