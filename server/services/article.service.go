package services

import (
	nozo_engineer_blogv1 "github.com/nozomi-iida/nozo_engineer_blog/genproto"
)

type ArticleService interface {
	nozo_engineer_blogv1.UnimplementedArticleServiceServer
}
