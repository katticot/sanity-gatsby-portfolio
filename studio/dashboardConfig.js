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
                  buildHookId: '61c0745097a02a2518e86e2f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-cz6ss1hs',
                  apiId: '5f2be37a-d873-4015-8ac5-d3335dea081b'
                },
                {
                  buildHookId: '61c07450734924237c3ac9f8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-u57boi5p',
                  apiId: 'd93cc098-8175-4c01-a0ab-e7b857e7d520'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/katticot/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-u57boi5p.netlify.app',
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
