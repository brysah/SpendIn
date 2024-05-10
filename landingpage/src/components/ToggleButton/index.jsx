export function ToggleButton({hasSpend,text,...rest}){
     return(
        <button 
        data-hasspend = {hasSpend}
        className='transition-all w-full py-[14px] rounded-[30px] font-semibold text-[16px] bg-secondary-100 text-secondary-300 hover:text-secondary-400
        data-[hasspend=true]:bg-primary-500 
        data-[hasspend=true]:text-primary 
        data-[hasspend=true]:hover:bg-primary-400' {...rest}>{text}</button>
    )
}