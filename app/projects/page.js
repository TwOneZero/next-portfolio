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

  const res = await fetch(`${process.env.NOTION_API_URL}/${process.env.NOTION_DATABASE_ID}/query`, options).then(response => response.json());

  // console.log(res);
  return res;


}

const Project = async () => {

  const projects = await getNotionData();
  console.log(projects);
  return (
    <>
      <h1>총 프로젝트 : {projects?.results.length}</h1>

      {projects?.results.map((proj) => {
        return <ProjectItem key={proj.id} data={proj} />
      })}

    </>
  )
}

export default Project;