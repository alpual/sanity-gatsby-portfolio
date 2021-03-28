import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes
} from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import HomeCarousel from '../components/carousel';

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    homepageCarousel: allSanityHomepageCarousel(
      limit: 7,
      sort: {
        fields: [publishedAt],
        order: DESC
      },
      filter: {
        publishedAt: {ne: null}
      }) {
      edges {
        node {
          id
          image {
            _key
            _type
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
            caption
            alt
          }
          link {
            slug {
              current
            }
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  
  const carouselImages = (data || {}).homepageCarousel 
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
        <HomeCarousel nodes={carouselImages}/>
      </Container>
    </Layout>
  )
}

export default IndexPage
