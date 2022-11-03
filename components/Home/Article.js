import Card2 from "../../components/Card/Card2";
import HeadingGroup from "../../components/HadingGroup";
import { articles } from "../../data/home";

function Article() {
  return (
    <>
      <section id="article_news">
        <HeadingGroup
          heading={"Article and News"}
          subheading={"News, tips, tricks and more"}
        />
        <div className="gap_40"></div>
        <div className="container">
          <div className="row">
            <Card2 grid={"col-12 col-md-6"} data={articles} />
          </div>
        </div>

        <div className="gap_64"></div>
      </section>
    </>
  );
}

export default Article;
