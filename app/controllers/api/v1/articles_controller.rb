class Api::V1::ArticlesController < ApplicationController
    def index
      render json: Article.all
    end
  
    def create
      article = Article.create(article_params)
      render json: article
    end
  
    def destroy
      Article.destroy(params[:id])
    end
  
    def update
      article = Article.find(params[:id])
      article.update_attributes(article_params)
      render json: article
    end
  
    private
  
    def article_params
      params.require(:article).permit(:id, :title, :text)
    end
  end