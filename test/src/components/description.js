const data = [
    {
        id: Math.random(),
        posterUrl:
            "https://occ-0-92-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABX8k1fuyGwHncTCnTM-mbZUe8RMjF7behOyHRK-7jy8vlL73O5QfTsgB-kjkVp_LV77Lf8sjUKlur4WTwQJ8EwxBiRP4.jpg?r=794",
        name: "Spenser Confidential",
        duration: "1h 58 m",
        date: 2019,
        rating: 5,
        description:" spenser confidential american film",
        trailer:"https://www.youtube.com/watch?v=bgKEoHNi3Uc",
    },
    {
        id: Math.random(),
        posterUrl:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQW8SnjJQ9s3Ucj1_hePX_sH6_uyfM58pbQreOVO-0nN0PnbHRL",
        name: "Pirates of Silicon Valley",
        duration: "1h 37m",
        date: 1999,
        rating: 3,
        description:"Pirates of Silicon Valley american movie",
        trailer:"https://www.youtube.com/watch?v=lEyrivrjAuU",
    },
    {
        id: Math.random(),
        posterUrl:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTF5NJQLpcDF6kTb7vs0DeCwHpsaitSYLQHgZLKoLsnbKlpiYTa",
        name: "Takedown",
        duration: "1h 32m",
        date: 2000,
        rating: 4,
        description:"Takedown:arab film",
        trailer:"https://www.youtube.com/watch?v=NbgDMYy9mzM",
    },
    {
        id: Math.random(),
        posterUrl:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLMr26lgT7vKwXNoRl06aAvU-rh-wck2vNjFqSK5M6eDrlQ7NL",
        name: "Ex Machina",
        duration: "1h 48m",
        date: 2014,
        rating: 5,
        description:"Ex Machina : american film",
        trailer:"https://www.youtube.com/watch?v=EoQuVnKhxaM",
    },
];
function Description ({match,history}) {
    
       const movie = data.find((el) => el.name == match.params.name);
    console.log(movie);
    console.log(match);
    return (
        <div>
                        <p> this is the description of the movie {movie.description}</p>

            

          
            <iframe width="600" height="500" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           <br></br>
            <button  onClick={() => history.goBack()}>goBack</button>
        </div>
            
    );
    

}

export default Description;