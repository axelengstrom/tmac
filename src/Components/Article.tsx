import { Component } from "../Types/common";
import Container from "./Container";
import Typography from "./Typography";

interface Props extends Component {
  title: string;
  video?: string;
  audio?: string;
}

const Article = ({ title, video, audio, children }: Props) => {
  const articleStyles = [
    "odd:bg-gradient-to-b from-cyan-900/10 to-zinc-900",
  ].join(" ");

  const gridStyles = [
    "grid grid-cols-12",
    ...(video || audio ? ["gap-4 md:gap-12"] : []),
  ].join(" ");

  return (
    <article className={articleStyles}>
      <Container>
        <Typography variant="h2">{title}</Typography>
        <div className={gridStyles}>
          <div className="col-span-12 md:col-span-6">
            {video ? (
              <iframe
                className="w-full aspect-video mb-4"
                src={video}
                title={title + " music video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : null}
            {audio ? (
              <>
                {/* eslint-disable-next-line */}
              <audio controls src={"/tmac" + audio} className="mb-4" />
              </>
            ) : null}
          </div>
          {children ? (
            <div className="col-span-12 md:col-span-6">{children}</div>
          ) : null}
        </div>
      </Container>
    </article>
  );
};

export default Article;
