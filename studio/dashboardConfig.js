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
                  buildHookId: '603a79dbb79b0d22f76fa336',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-x-studio',
                  apiId: 'e515fd9a-10ca-4268-ab6f-a9ee760fc721'
                },
                {
                  buildHookId: '603a79db60b9521fb4b3d1c9',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-x',
                  apiId: '8496f4ae-70b8-45fd-b334-8bc0fe67dcee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/feliperoschel/sanity-sapper-blog-x',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-x.netlify.app', category: 'apps'}
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
