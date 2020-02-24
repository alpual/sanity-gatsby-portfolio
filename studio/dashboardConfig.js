export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5317a9051f089d08abe4fa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ckncujt7',
                  apiId: '9a34733d-4ba8-4b7b-ad25-2ce5eef18b25'
                },
                {
                  buildHookId: '5e5317a9f12c2dfecafa6309',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-aufwsotv',
                  apiId: '7e4637a8-d3e6-47d0-b58a-2425b8df7b4b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alpual/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-aufwsotv.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
