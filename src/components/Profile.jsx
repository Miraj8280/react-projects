function Avatar({ size, person }) {
  return (
    <img
      src={`https://i.imgur.com/${person.imageId}.jpg`}
      alt={person.name}
      height={size}
      width={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
    
     <Avatar 
        size={70} 
        person={{
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2"
        }}
     />
    </div>
  );
}
