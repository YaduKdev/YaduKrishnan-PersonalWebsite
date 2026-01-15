import Button from "../../components/Button/Button"

const Contact = () => {
  return (
    <>
      <div className="main-container py-20 lg:py-28 h-full flex flex-col gap-8 justify-center items-center">
        <h4 className="max-w-6xl text-2xl lg:text-5xl text-center leading-tight">Freelance, Collaborations & Full-time opportunities. Let's Work Together!</h4>
        <Button text="Contact Me" className="bg-green-800 text-zinc-200 hover:bg-green-700 border-green-800 hover:border-green-700" />
      </div>
    </>
  )
}

export default Contact