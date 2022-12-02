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