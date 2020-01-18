export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e230c203992608b990c42d4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4od6b9wj',
                  apiId: '8b0ab6ce-6cb4-4fd5-9b2b-c8b939bc6951'
                },
                {
                  buildHookId: '5e230c20e6ddb61100fff5c5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-twu5ytsm',
                  apiId: '8eeee717-a16a-4f93-8c22-9253fcd08838'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/surya-space/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-twu5ytsm.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
