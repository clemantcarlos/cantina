export default function Spinner({ show }: { show: boolean }) {
  if (!show) return "";

  return (
    <div className ="overflow-y-auto overflow-x-hidden
    fixed top-0 right-0 left-0 z-50 
    md:inset-0 h-screen max-h-full 
    bg-slate-500/30 flex justify-center items-center w-full">
      <div
        className="text-slate-900 inline-block size-20 animate-spin rounded-full 
        border-8 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
}
