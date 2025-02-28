export interface BlogData {
  id: string;
  attributes: {
    documentId: string;
    title: string;
    slug: string;
    date: string;
    readingTime: string;
    bannerImage: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
  };
}

export interface GetAllBlogsResponse {
  blogs: {
    data: BlogData[];
    meta: {
      pagination: {
        total: number;
      };
    };
  };
}
