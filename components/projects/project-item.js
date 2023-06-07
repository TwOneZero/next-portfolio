import Image from 'next/image';

const ProjectItem = ({ data }) => {
  const { name, tag, description, github_url, date } = data.properties;
  const projectTitle = name.title[0].plain_text
  const tags = tag.multi_select;

  const coverImg = data.cover.external.url;
  console.log(coverImg);

  return (
    <div className='p-6 bg-slate-400 rounded-md mb-4'>
      <h1>{projectTitle}</h1>
      <div className='flex flex-row space-x-4 '>
        {tags.map((tag, idx) => (
          <h6 key={idx} className='rounded-md mb-1 max-w-fit bg-yellow-300'>{tag.name}</h6>
        ))}
      </div>

      <a href={github_url.url}>깃헙주소</a>
      <div className='relative h-40 w-40'>
        <Image
          fill={true}
          src={coverImg}
          alt="Picture of the projects"
        />
      </div>

    </div>
  )
}

export default ProjectItem