export const getStaticData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: { ninjas: data },
  };
};

function testFunction({ ninjas }) {
  return (
    <div>
      <h1> Hello World</h1>
      {ninjas?.map((ninja) => (
        <div key={ninja.id}>
          <a>
            <h3>{ninja.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
}

export default testFunction;
