package services

import (
	pubv1 "github.com/nozomi-iida/nozo_engineer_blog/genproto"
)

type ArticleService interface {
	pubv1.UnimplementedArticleServiceServer
}
