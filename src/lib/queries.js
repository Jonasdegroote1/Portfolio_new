export const PROJECTS_QUERY = `
  query GetProjects {
    projects {
      id
      title
      description       
      link
      image {
        url
        width
        height
      }
    }
  }
`;
