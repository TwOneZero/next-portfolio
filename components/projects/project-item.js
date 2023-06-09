import Image from 'next/image';

const ProjectItem = ({ data }) => {
  const { name, tag, description, github_url, date } = data.properties;
  const projectTitle = name.title[0].plain_text; //제목
  const tags = tag.multi_select; // 태그
  const coverImg = data.cover.file?.url || data.cover.external.url; //이미지
  const desc = description.rich_text[0].plain_text; //설명
  //날짜
  const srt_d = date.date.start;
  const end_d = date.date.end;
  //작업 일 수 계산
  const getProjectPeriod = (start, end) => {
    const startDateStringArr = start.split('-');
    const endDateStringArr = end.split('-');
    let startDate = new Date(startDateStringArr[0], startDateStringArr[1], startDateStringArr[2]);
    let endDate = new Date(endDateStringArr[0], endDateStringArr[1], endDateStringArr[2])
    const diffSec = endDate - startDate;
    const result = diffSec / (1000 * 60 * 60 * 24) //일 수로 계산
    return result;
  }

  return (
    <div className='m-2 p-4  dark:bg-slate-700 rounded-md transition duration-300 transform border border-gray-300 hover:scale-110 hover:shadow-lg dark:hover:shadow-gray-400 dark:border-gray-200/50'>
      <div className='relative w-auto h-60'>
        <Image
          priority
          style={{ objectFit: 'cover', borderRadius: '10px', objectPosition: 'center', }}
          fill={true}
          src={coverImg}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Picture of the projects"
        />
      </div>

      <h1 className=' text-xl font-bold my-3'>
        {projectTitle}
      </h1>

      <div className='grid grid-cols-2 gap-1 sm:flex sm:flex-row sm:w-auto'>
        {tags.map((tag, idx) => (
          <span key={idx} className='w-auto rounded-md bg-cyan-700/75 p-1 max-w-fit text-slate-200'>{tag.name}</span>
        ))}
      </div>
      <div className='mt-3 '>
        <span className='text-sm'>{desc}</span>
      </div>
      <h3 className='mt-4 text-xs'>작업 기간 : {getProjectPeriod(srt_d, end_d)}일</h3>

      <a className=' text-base text-cyan-900 hover:text-cyan-600 hover:transition-colors' href={github_url.url} target='_blank'>Github</a>


    </div>
  )
}

export default ProjectItem