import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query FurnitureInstallationPageQuery {
  site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
    title
    description
    keywords
  }
  projects: allSanitySampleProject(
    limit: 20,
    sort: {
      fields: [publishedAt],
      order: DESC
    },
    filter: {
      slug: {current: {ne: null}},
      publishedAt: {ne: null},
      categories: {
        elemMatch: {
          title: {
            eq: "Furniture & Installation"
          }
        }
      }
    }
  ) {
    edges {
      node {
        id
        mainImage {
          crop {
            _key
            _type
            top
            bottom
            left
            right
          }
          hotspot {
            _key
            _type
            x
            y
            height
            width
          }
          asset {
            _id
          }
          alt
        }
        title
        _rawExcerpt
        slug {
          current
        }
      }
    }
  }
}
`

const IndexPage = (props) => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const {site} = data || {}
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  const homepageCarousel = (data || {}).homepageCarousel
    ? mapEdgesToNodes(data.homepageCarousel)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        {projectNodes && (
          <ProjectPreviewGrid
            title='Latest Furniture & Installations'
            nodes={projectNodes}
            browseMoreHref='/archive/'
          />
        )}
      </Container>
    </Layout>
  )
}

export default IndexPage
