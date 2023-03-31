import Article from "./Components/Article";
import Container from "./Components/Container";
import Hero from "./Components/Hero";
import Information from "./Components/Information";
import List from "./Components/List";
import ListItem from "./Components/ListItem";
import Photos from "./Components/Photos";
import Typography from "./Components/Typography";

const App = () => {
  return (
    <>
      <main>
        <Hero
          heading="The Mind Action Conflict"
          subHeading='"Fantasy" out April 14'
        />
        <Article
          title="Fantasy"
          video="https://www.youtube.com/embed/W7u5GMF1Xxg"
          // audio="https://knivenpr.se/wp-content/uploads/2022/08/The-Mind-Action-Conflict-Ocean-Breeze.mp3"
        >
          <Typography>
            &quot;I just added this text to get a feeling for the site. The
            video above should be changed to the Fantasy video, the same goes
            for the audio above. This text should also be replaced by a text
            that describes Fantasy&quot;
          </Typography>
          <Typography>– Coach J</Typography>
          <Typography>
            <>
              <a href="/tmac/fantasy.mp3">Click here</a> to download Fantasy as
              a mp3 file.
            </>
          </Typography>
        </Article>
        <Article
          title="Ocean Breeze"
          video="https://www.youtube.com/embed/qM4FipMtFWM"
          // audio="https://knivenpr.se/wp-content/uploads/2022/08/The-Mind-Action-Conflict-Ocean-Breeze.mp3"
        />
        <Information />
        <Photos />
      </main>
      <footer className="bg-gradient-to-b from-zinc-900 to-violet-900/10  text-stone-200">
        <Container>
          {/* <Typography variant="h2">Contact</Typography>
          <List>
            <ListItem>
              <a href="mailto:elias@mail.com" className="flex items-center">
                <svg
                  className="h-8 w-8 text-stone-200 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                elias@mail.com
              </a>
            </ListItem>
            <ListItem>
              <a href="tel:+46761700357" className="flex items-center">
                <svg
                  className="h-8 w-8 text-stone-200 mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
                Pingla upp Coach J
              </a>
            </ListItem>
          </List> */}
          <Typography variant="h2">Social</Typography>
          <List>
            <ListItem>
              <a href="https://www.facebook.com/TheMindActionConflict">
                Facebook
              </a>
            </ListItem>
            <ListItem>
              <a href="https://www.instagram.com/themindactionconflict/">
                Instagram
              </a>
            </ListItem>
            <ListItem>
              <a href="https://www.youtube.com/channel/UC2UNi-XavCcA3RkxVpmiNWQ">
                Youtube
              </a>
            </ListItem>
            <ListItem>
              <a href="https://open.spotify.com/artist/4VDUa4KGznup8L5AkUXACb?si=V0QxY0YNTIGROciRtEBC0w">
                Spotify
              </a>
            </ListItem>
            <ListItem>
              <a href="https://music.apple.com/us/artist/the-mind-action-conflict/1636356345">
                Apple Music
              </a>
            </ListItem>
          </List>
        </Container>
      </footer>
    </>
  );
};

export default App;
