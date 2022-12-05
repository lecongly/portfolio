export const discussionGql = (ghDiscussionCategoryId: string | undefined) => {
    return `{
  repository(name: "portfolio", owner: "lecongly") {
    discussions(first: 100, categoryId: "${ghDiscussionCategoryId}") {
      nodes {
        title
        url
        number
        bodyHTML
        bodyText
        createdAt
        lastEditedAt
        author {
          login
          url
          avatarUrl
        }
        labels(first: 100) {
          nodes {
            name
          }
        }
      }
    }
  }
}`;
};

export function discussionDetailGql(postId: number | undefined) {
    return `{
    repository(owner: "lecongly", name: "portfolio") {
      discussion(number: ${postId}) {
        title
        bodyHTML
        createdAt
        author {
          login
          url
          avatarUrl
        }
      }
    }
  }`;
}