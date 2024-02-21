function Avatar(person, job) {
  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <p>{job}</p>
    </div>
  );
}

export default Avatar;
