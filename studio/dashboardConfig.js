export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5da1a473ee02f9fc53a01c30',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4d8dz4nd',
                  apiId: '9e707e04-4fb0-4e7a-892a-7d301b5fecbe'
                },
                {
                  buildHookId: '5da1a473b0d2a56d4b7664b0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6zkkmvzt',
                  apiId: 'adef7df4-b3e7-42d5-8c4d-14b2fb00a650'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vis0rka/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6zkkmvzt.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
