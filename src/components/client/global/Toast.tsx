
interface Props {
  message: string
  show: boolean
  type?: string
}
export function Toast({message, show, type = 'success'}: Props) {
  if ( type === 'success' ) return <>
    <div id="toast-simple" 
      className = { show ?
        "fixed bottom-4 left-4 flex items-center max-w-xs p-4 space-x-4 rtl:space-x-reverse text-primary bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-xl animate-bounce transition-all w-[300]":
        "fixed bottom-4 left-4 flex items-center max-w-xs p-4 space-x-4 rtl:space-x-reverse text-primary bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-xl animate-bounce transition-all w-[300]transition-all duration-300 opacity-0"
      } 
      role="alert">
      <svg xmlns="http://www.w3.org/2000/svg" 
        className="size-10 text-green-500" 
        width="44" 
        height="44" 
        viewBox="0 0 24 24" 
        strokeWidth="1.5" 
        stroke="currentColor" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"> 
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 12l5 5l10 -10" />
      </svg>
      <div className="text-lg font-bold">
      {message}
      </div>
    </div>
  </>
  if ( type === 'error' ) return <>
  <div id="toast-simple" 
    className = { show ?
      "fixed bottom-4 left-4 flex items-center max-w-xs p-4 space-x-4 rtl:space-x-reverse text-primary bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-xl animate-bounce transition-all w-[300]":
      "fixed bottom-4 left-4 flex items-center max-w-xs p-4 space-x-4 rtl:space-x-reverse text-primary bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-xl animate-bounce transition-all w-[300]transition-all duration-300 opacity-0"
    } 
    role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" 
      className="size-10 text-red-500" 
      width="44"
      height="44" 
      viewBox="0 0 24 24" 
      strokeWidth="1.5" 
      stroke="currentColor" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
    <div className="text-lg font-bold">
    {message}
    </div>
  </div>
  </>
}