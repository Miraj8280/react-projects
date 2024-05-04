function Profile({ 
    person, 
    profession, 
    awards, 
    discovered, 
    imageSize = 70 
}) {
  return (
    <section>
      <h2>{person.name}</h2>
      <img
        src={`https://i.imgur.com/${person.imageId}.jpg`}
        alt={person.name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>({awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        person={{
          name: "Maria Skłodowska-Curie",
          imageId: "szV5sdG",
        }}
        profession={"physicist and chemist"}
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
        discovered={"polonium (chemical element)"}
      />

      <Profile
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
        profession={"geochemist"}
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
        discovered={"a method for measuring carbon dioxide in seawater"}
      />
    </div>
  );
}
