function Characters(props) {
  console.log(props.characters);
  return (
    <div class="row">
      {props.characters.map((character) => {
        console.log(character);
        return (
          <div class="card" style={{ width: "18rem", marginLeft: "10%" }}>
            <img
              src={character.image}
              class="card-img-top"
              alt={character.name}
            />
            <div class="card-body">
              <h5 class="card-title">{character.name}</h5>
              <p class="card-text">Status: {character.status}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Characters;
