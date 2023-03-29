import Container from "./Container";
import Typography from "./Typography";

const Information = () => {
  return (
    <div className="bg-gradient-to-b from-zinc-900 to-emerald-900/10">
      <Container>
        <Typography variant="h2">Information</Typography>
        <Typography>
          On August 18, THE MIND ACTION CONFLICT debuts with the surfing song
          “Ocean breeze”. A song born out of experimenting with a piamino and a
          LinnDrum.
        </Typography>
        <Typography>
          THE MIND ACTION CONFLICT is a band molded by the will of doing
          whatever comes to mind and letting it take time. “Ocean breeze” is a
          track about feeling connected with the ocean. Your own moments of
          shared silence and the power they possess.
        </Typography>
        <Typography>
          THE MIND ACTION CONFLICT consists of Elias Lorenzo on vocals and
          guitar, Q (Josef Ask) on drums, Timo Krantz on piano, and Coach J
          (Axel Engström) on bass guitar. The music video is shot in the fishing
          town Caibarién, Cuba.
        </Typography>
      </Container>
    </div>
  );
};

export default Information;
