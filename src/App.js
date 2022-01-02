import PatternTop from './images/bg-pattern-top.svg';
import PatternBotton from './images/bg-pattern-bottom.svg';
import ProfilePicture from './images/image-victor.jpg';

function App() {
 return (
  <>
   <div className='fatherContainer'>
    <img className='PatternTop' src={PatternTop} alt='' />
    <img className='PatternBottom' src={PatternBotton} alt='' />
    <div className='container'>
     <div className='card'>
      <div className='header'>
       <img
        className='profile-picture'
        src={ProfilePicture}
        alt='victor crest'
       />
      </div>
      <div className='content'>
       <div className='content-top'>
        <h2 className='name'>
         Victor Crest <span>26</span>
        </h2>
        <p className='city'>London</p>
       </div>
       <div className='content-bottom'>
        <div className='Followers'>
         <h2>80k</h2>
         <h4>Followers</h4>
        </div>
        <div className='Likes'>
         <h2>803K</h2>
         <h4>Likes</h4>
        </div>
        <div className='Photos'>
         <h2>1.4K</h2>
         <h4>Photos</h4>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
}

export default App;
