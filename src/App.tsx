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
            <>
              <i>&quot;Try to get back again - try is the best I can&quot;</i>
              <br />
              <br />
              Just as this mantra from singer and project founder Elias repeats,
              we are reminded that memories are impossible to recreate. The only
              thing that matters is trying to make new ones.
            </>
          </Typography>
          <Typography>
            <>
              <strong>Fantasy</strong> is the third release from the band THE
              MIND ACTION CONFLICT. A song about escaping the pressure of a
              sometimes dull and harsh reality for the simplicity of living in a
              futuristic dream.
            </>
          </Typography>
          <Typography>
            Playfulness and improvisation has played a big part in both writing,
            arranging and producing as this song slowly found its current shape
            when Filip dropped by the studio when the drums were being cut. He
            started jamming to the track on the piano and Elias quickly put up a
            microphone to capture the vibe.
          </Typography>
          <a
            href="https://share.amuse.io/track/the-mind-action-conflict-fantasy"
            target="_blank"
            rel="noreferrer"
          >
            <Typography>
              <span className="underline">Click here to pre-save Fantasy</span>
            </Typography>
          </a>
          <Typography />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.dropbox.com/s/aszxlxw3brb3hvb/The Mind Action Conflict - Fantasy_Main Master (44,1)_230213.mp3?dl=1"
          >
            <Typography>
              <span className="underline">
                Click here to download Fantasy as a mp3 file
              </span>
            </Typography>
          </a>
        </Article>
        {/* <Article
          title="Ocean Breeze"
          video="https://www.youtube.com/embed/qM4FipMtFWM"
          // audio="https://knivenpr.se/wp-content/uploads/2022/08/The-Mind-Action-Conflict-Ocean-Breeze.mp3"
        /> */}
        <Container>
          <div className="grid grid-cols-12 gap-4 md:gap-12">
            <div className="col-span-12 md:col-span-6">
              <Information />
            </div>
            <div className="col-span-12 md:col-span-6">
              <Photos />
            </div>
          </div>
        </Container>
      </main>
      <footer className="bg-gradient-to-b from-zinc-900 to-violet-900/10 text-stone-200">
        <Container>
          <div className="grid grid-cols-12 gap-4 md:gap-12">
            <div className="col-span-12 md:col-span-6">
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
            </div>
            <div className="col-span-12 md:col-span-6 pb-8 sm:pb-0">
              <Typography variant="h2">Contact</Typography>
              <List>
                <ListItem>
                  <a
                    href="mailto:elias.berndt@gmail.com"
                    className="flex items-center"
                  >
                    elias.berndt@gmail.com
                  </a>
                </ListItem>
              </List>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default App;
