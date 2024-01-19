import { getMeetups }  from '../../db/api.js';

export default async function Meetups() {
  const data = await getMeetups();

  return (
    <>
      <h1>Meetups</h1>
      {data.map((meetup: any) => (
        <div className="border-solid border-2 my-5" key={meetup.id}>
          <h2 className="font-bold">{meetup.title}</h2>
          <p>{meetup.description}</p>
        </div>
      ))}
    </>
  );
}
