import { NextPage } from "next";
import * as article from "../../genproto/public/v1/article_pb";
import { getArtices } from "../../lib/grpc/publicClient";

type ArticleProps = {
  articlesList: article.Article.AsObject[];
};

const Article: NextPage<ArticleProps> = () => {
  getArtices().then(res => {
    console.log(res);
  })
  return (
    <div>
      <h1>Article</h1>
      {/* {articlesList.map((article) => (
        <h2 key={article.id}>{article.title}</h2>
      ))} */}
    </div>
  );
};

// export const getStaticProps = async () => {
//   const { articlesList } = await getArtices();

//   return {
//     props: {
//       articlesList,
//     },
//   };
// };

export default Article;
