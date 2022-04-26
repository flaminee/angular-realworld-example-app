export interface ArticleListConfig {
  type: string;

  filters: {
    tag?: string,
    author?: string,
    favorited?: string,
    title?: string,
    limit?: number,
    offset?: number
  };
}
