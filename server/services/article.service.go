package services

import (
	"context"
	"errors"
	"fmt"

	"github.com/golang/protobuf/ptypes"
	publicv1 "github.com/nozomi-iida/nozo_engineer_blog/genproto/public/v1"
)

var dummyTag = publicv1.Tag{
	Id: 1,
	Name: "First Tag",
	CreatedAt: ptypes.TimestampNow(),
	UpdatedAt: ptypes.TimestampNow(),
}

var dummyArticles = []publicv1.Article{
	{
		Id: 1,	
		Title: "First Article",
		Content: "This is first article.",
		PublishedAt: ptypes.TimestampNow(),
		CreatedAt: ptypes.TimestampNow(),
		UpdatedAt: ptypes.TimestampNow(),
		ThumbnailUrl: "https://img.freepik.com/premium-photo/city-landscape-with-group-building-sky-sunlight_254791-864.jpg?size=626&ext=jpg",
		Tags: []*publicv1.Tag{
			&dummyTag,
		},
	},
	{
		Id: 2,	
		Title: "Second Article",
		Content: "This is second article.",
		PublishedAt: ptypes.TimestampNow(),
		CreatedAt: ptypes.TimestampNow(),
		UpdatedAt: ptypes.TimestampNow(),
		ThumbnailUrl: "https://img.freepik.com/premium-photo/city-landscape-with-group-building-sky-sunlight_254791-864.jpg?size=626&ext=jpg",
		Tags: []*publicv1.Tag{
			&dummyTag,
		},
	},
	{
		Id: 3,	
		Title: "Third Article",
		Content: "This is third article.",
		PublishedAt: ptypes.TimestampNow(),
		CreatedAt: ptypes.TimestampNow(),
		UpdatedAt: ptypes.TimestampNow(),
		ThumbnailUrl: "https://img.freepik.com/premium-photo/city-landscape-with-group-building-sky-sunlight_254791-864.jpg?size=626&ext=jpg",
		Tags: []*publicv1.Tag{
			&dummyTag,
		},
	},
}

type ArticleService struct {
	publicv1.UnimplementedArticleServiceServer
}

func (as *ArticleService) GetArticles(ctx context.Context, req *publicv1.GetArticlesRequest) (*publicv1.GetArticlesResponse, error) {
	fmt.Println("Getting Articles")
	articles := make([]*publicv1.Article, 0, len(dummyArticles))

	return &publicv1.GetArticlesResponse{
		Articles: articles,
	}, nil
}

func (as *ArticleService) GetArticle(ctx context.Context, req *publicv1.GetArticleRequest) (*publicv1.GetArticleResponse, error)  {
	fmt.Println("Getting Article")
	id := req.GetId()

	for _, article := range dummyArticles {
		if article.Id == id {
			return &publicv1.GetArticleResponse{
				Article: &article,
			}, nil
		}
	}
	
	return nil, errors.New("Article not found")
}
