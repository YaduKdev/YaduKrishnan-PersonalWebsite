const Button = ({ text, className="" }) => {
  return (
    <>
        <a href="" className={`uppercase font-heading border-2 text-center min-w-51.25 px-8 lg:px-12 text-lg md:text-xl py-2 lg:py-3 rounded-full transition-colors ease-in-out duration-200 ${className}`}>{text}</a>
    </>
  )
}

export default Button