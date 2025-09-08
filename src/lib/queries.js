export const PROJECTS_QUERY = `
  query GetProjects {
    projects {
      id
      title
      slug
      shortDescription
    description
    heroImage {
        url
      }
    thumbnail {
        url
      }
      featured
      technologies {
        id
        name
      }
      categories {
        id
        name
      }
    liveDemo
    viewCode
    }
  }
`;

export const technologiesQuery = `
  query MyQuery {
    technologies {
      id
      name
      svgCode
    }
  }
`;
