import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className='bg-gray-200 h-[80vh] '>
      <div className='absolute flex gap-6 right-[42%] font-semibold text-xl pt-3 cursor-pointer'>
        <Link to='/Product/Man' className='active:scale-95'>Man</Link>
        <Link to='/Product/Woman' className='active:scale-95'>Woman</Link>
        <Link to='/Product/Kids' className='active:scale-95'>Kid's</Link>
      </div>

      <Outlet />
    </div>
  )
}

export default Product
