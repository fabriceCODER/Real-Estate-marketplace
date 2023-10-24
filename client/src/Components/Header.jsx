import {FaSearch} from 'react-icons/fa';

function Header() {
  return (
     <Header className="bg-slate-200 shadow-md">
       <div className='flex justify-between items-center max-w-xl mx-auto p-3'>
     <h1 className='text-bold text-sm sm:text-6xl flex flex-wrap'>
          <span className='text-blue-500'>Fab</span>
          <span className='text-blue-700'>Estate</span>
     </h1>
     <form action="" className='bg-slate-100p-3 rounded-lg flex items-center'>
          <input 
          type="text"
          placeholder='Search...' 
          className='bg-transparent'/>
          <FaSearch className='text-slate-600 focus-outline-none' />
     </form>
     </div>
    </Header>
  );
}
export default Header;