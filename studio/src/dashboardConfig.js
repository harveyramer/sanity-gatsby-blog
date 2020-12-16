export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fda8a96f59e2a20a3839232',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-hecrej88',
                  apiId: '6b414763-621d-498b-8c2b-9eecd5f8f676'
                },
                {
                  buildHookId: '5fda8a97f59e2a20a3839233',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-p17e9y1v',
                  apiId: '0756efcf-5ca4-4df1-bf29-d0a7067b17ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/harveyramer/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-p17e9y1v.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
