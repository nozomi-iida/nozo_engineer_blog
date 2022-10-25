import { ArticleServiceClient } from "../../genproto/public/v1/article.service_pb_service";
import { GetArticlesRequest } from "../../genproto/public/v1/article.service_pb";
import { promisify } from "util";

export const getArtices = () => {
  const request = new GetArticlesRequest();
  const client = new ArticleServiceClient("localhols:8080");
  return promisify(client.getArticles)
    .call(client, request)
    .then((res) => {
      if (!res) {
        throw new Error(`getArticles recieved: ${res}`);
      }

      return res.toObject();
    });
};
