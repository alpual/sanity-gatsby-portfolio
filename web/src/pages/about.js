import React from 'react'
import { graphql } from 'gatsby'
import {
  mapEdgesToNodes, cn, buildImageObj
} from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from '../components/block-content'
import styles from '../components/project.module.css'

export const query = graphql`
  query AboutQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    about: allSanityAbout {
      edges {
        node {
          _key
          _type
          id
          _rawBody
          body {
            _key
            _type
            style
            list
          }
          mainImage {
            asset {
              _id
            }
            alt
            caption
          }
          title
        }
      }
    }
  }
`

const AboutPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site

  const aboutNodes = (data || {}).about
    ? mapEdgesToNodes(data.about)
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
        {aboutNodes && aboutNodes.map((node, index) => (
          <article
            key={node.id || index}
            className={cn('about', node.title), styles.aboutPage}>
            <div className={styles.mediaBox}>
              {node.mainImage && node.mainImage.asset && (
                <figure>
                  <img
                    key={node.id}
                    src={imageUrlFor(buildImageObj(node.mainImage)).url()}
                    alt={node.alt && node.alt}
                  />
                </figure>
              )}
              <div className={styles.grid}>
                <div className={styles.mainContent}>
                  <h1 className={styles.title}>{node.title}</h1>
                  {node._rawBody && <BlockContent blocks={node._rawBody || []} />}
                  <p><a href="mailto:nnelson@risd.edu">Contact me</a></p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </Container>
    </Layout>
  )
}

export default AboutPage
