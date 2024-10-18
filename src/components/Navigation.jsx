import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const DisplayHome = () => {
    const navigate = useNavigate();

    return (
        <div className='flex items-center gap-2 bg-gray-900 py-5 pl-16'>
            <ChevronLeftIcon 
                onClick={() => navigate(-1)} 
                className='cursor-pointer text-slate-100 hover:text-violet-500 h-5 w-5' 
                aria-label="Go Back" 
            />
            <ChevronRightIcon
                onClick={() => navigate(1)} 
                className='cursor-pointer text-slate-100 hover:text-violet-500 h-5 w-5'  
                aria-label="Go Forward" 
            />
        </div>
    );
};

export default DisplayHome;
