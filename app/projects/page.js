import ProjectItem from '@/components/projects/project-item';

const getNotionData = async () => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.NOTION_TOKEN_ID}`
    },
    body: JSON.stringify({
      page_size: 100,
      sorts: [{
        'property': 'name',
        'direction': 'ascending'
      }
      ]
    })
  };
  const res = await fetch(`https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`, options)
    .then(response => response.json());
  return res;
}

const Project = async () => {

  const projects = await getNotionData();
  return (
    <div>
      <h1 className='m-6 text-4xl font-bold sm:text-6xl text-center content-center'>
        총 프로젝트 :
        <span className=' ml-3 text-sky-800'>{projects?.results.length}</span>
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 mx-2 my-10 gap-4 sm:w-auto'>
        {projects?.results.map((proj) => {
          return <ProjectItem key={proj.id} data={proj} />
        })}
      </div>
    </div>

  )
}

export default Project;