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

export const TECHNOLOGIES_QUERY = `
  query GetTechnologies {
    technologies {
      id
      name
      svgCode
    }
  }
`;

export const PROJECT_BY_SLUG_QUERY = `
  query ProjectBySlug($slug: String!) {
    project(where: { slug: $slug }) {
      id
      title
      slug
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
