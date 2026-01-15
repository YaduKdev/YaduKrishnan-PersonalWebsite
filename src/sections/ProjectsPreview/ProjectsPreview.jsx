import Button from "../../components/Button/Button"
import { projects } from "../../Data/ProjectsData"

const ProjectsPreview = () => {
  return (
    <div className="h-screen py-24 lg:py-40">
      <div className="main-container pb-8 lg:pb-12 flex max-md:flex-col gap-6 justify-between items-start md:items-end">
        <div className="max-w-xl">
          <h3 className="mb-3">Projects</h3>
          <p className="text-lg lg:text-xl text-gray-400">Showcasing select projects - designed to inspire, engage and deliver real results.</p>
        </div>
        <Button text="View All" className="bg-white text-black hover:bg-gray-400 border-white hover:border-gray-400" />
      </div>
      <div className="flex gap-4 lg:gap-8 ms-4 lg:ms-[40%] mt-6">
        {
          projects.map(({id, name, image, link}) => (
            <a href={link} key={id} className="relative rounded-2xl w-full min-w-85 lg:min-w-xl h-64 lg:h-96 block overflow-hidden group">
              <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <span className="absolute top-4 right-4 bg-white text-black uppercase leading-[1.4] font-heading px-5 py-1 rounded-full text-sm lg:text-lg">{name}</span>
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default ProjectsPreview