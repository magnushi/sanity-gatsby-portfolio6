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
                  buildHookId: '5d51c3ff55ab7d017ca091d8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio6-studio',
                  apiId: 'bea3bb33-c56d-4853-b285-cebae18272d2'
                },
                {
                  buildHookId: '5d51c3fe44e3d60190d8fbf3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio6',
                  apiId: '20a1142b-496b-44c1-9445-fe8658da4c7c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-gatsby-portfolio6',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio6.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
